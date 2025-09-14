FROM node:18-alpine

# Install dependencies and PM2
RUN apk add --no-cache libc6-compat && \
    npm install -g pm2

WORKDIR /app

# Copy package files
COPY strapi/package*.json ./strapi/
COPY webapp/package*.json ./webapp/

# Install dependencies
RUN cd strapi && npm ci && \
    cd ../webapp && npm ci

# Copy source code
COPY strapi/ ./strapi/
COPY webapp/ ./webapp/

# Build applications
RUN cd strapi && npm run build && \
    cd ../webapp && npm run build

# Copy PM2 configuration
COPY ecosystem.config.json ./

# Create user and set permissions
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    mkdir -p /var/log/pm2 && \
    chown -R nextjs:nodejs /app /var/log/pm2

USER nextjs

# Expose ports
EXPOSE 3000 1337

# Start PM2
CMD ["pm2-runtime", "start", "ecosystem.config.json"]