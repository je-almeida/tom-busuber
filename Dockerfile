FROM node:18-alpine AS base

# Install dependencies
RUN apk add --no-cache libc6-compat
# Install PM2 globally
RUN npm install -g pm2
WORKDIR /app

# Install Strapi dependencies
FROM base AS strapi-deps
WORKDIR /app/strapi
COPY strapi/package.json strapi/package-lock.json* ./
RUN npm ci --only=production

# Install Next.js dependencies  
FROM base AS webapp-deps
WORKDIR /app/webapp
COPY webapp/package.json webapp/package-lock.json* ./
RUN npm ci --only=production

# Build Strapi
FROM base AS strapi-builder
WORKDIR /app/strapi
COPY --from=strapi-deps /app/strapi/node_modules ./node_modules
COPY strapi/ ./
RUN npm run build

# Build Next.js
FROM base AS webapp-builder
WORKDIR /app/webapp
COPY --from=webapp-deps /app/webapp/node_modules ./node_modules
COPY webapp/ ./
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy Strapi application
COPY --from=strapi-builder --chown=nextjs:nodejs /app/strapi ./strapi
COPY --from=strapi-deps --chown=nextjs:nodejs /app/strapi/node_modules ./strapi/node_modules

# Copy Next.js application
COPY --from=webapp-builder --chown=nextjs:nodejs /app/webapp/.next ./webapp/.next
COPY --from=webapp-builder --chown=nextjs:nodejs /app/webapp/public ./webapp/public
COPY --from=webapp-deps --chown=nextjs:nodejs /app/webapp/node_modules ./webapp/node_modules
COPY --from=webapp-builder --chown=nextjs:nodejs /app/webapp/package.json ./webapp/package.json

# Copy PM2 configuration
COPY ecosystem.config.json /app/ecosystem.config.json

# Create log directory
RUN mkdir -p /var/log/pm2

# Change ownership
RUN chown -R nextjs:nodejs /app /var/log/pm2

# Switch to non-root user
USER nextjs

# Expose ports
EXPOSE 3000 1337

# Start PM2
CMD ["pm2-runtime", "start", "/app/ecosystem.config.json"]