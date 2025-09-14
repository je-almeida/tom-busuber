# Tom Busuber - Deployment Guide

Este projeto contém duas aplicações:

- **Next.js** (webapp) - Frontend rodando na porta 3000
- **Strapi** (CMS) - Backend rodando na porta 1337

## Deployment no Easypanel

### Configuração do App

1. **Tipo**: Docker
2. **Source**: GitHub Repository
3. **Build**:
   - Dockerfile Path: `./Dockerfile`
   - Build Context: `.`

### Portas

- **3000**: Next.js Frontend (principal)
- **1337**: Strapi CMS Backend

### Variáveis de Ambiente

```env
NODE_ENV=production
HOSTNAME=0.0.0.0
HOST=0.0.0.0
```

### Volumes (Opcional)

Para persistir uploads do Strapi:

- **Mount Path**: `/app/strapi/public/uploads`
- **Size**: 1GB ou conforme necessário

### Health Check

- **Port**: 3000
- **Path**: `/`

## Estrutura do Container

```
/app/
├── strapi/          # CMS Backend (porta 1337)
└── webapp/          # Next.js Frontend (porta 3000)
```

## Logs

Os logs de ambas as aplicações ficam em:

- `/var/log/pm2/strapi-out.log` - Strapi stdout
- `/var/log/pm2/strapi-error.log` - Strapi stderr
- `/var/log/pm2/nextjs-out.log` - Next.js stdout
- `/var/log/pm2/nextjs-error.log` - Next.js stderr
- `/var/log/pm2/strapi.log` - Strapi combined
- `/var/log/pm2/nextjs.log` - Next.js combined

### Comandos PM2 úteis:

```bash
# Ver status dos processos
pm2 status

# Ver logs em tempo real
pm2 logs

# Ver logs de um processo específico
pm2 logs strapi
pm2 logs nextjs

# Restart de um processo
pm2 restart strapi
pm2 restart nextjs
```

## Build Local

Para testar localmente:

```bash
# Build
docker build -t tom-busuber .

# Run
docker run -p 3000:3000 -p 1337:1337 tom-busuber
```

Ou usando docker-compose:

```bash
docker-compose up --build
```

### Desenvolvimento Local com PM2

Se quiser usar PM2 localmente para desenvolvimento:

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar em modo desenvolvimento
pm2 start ecosystem.dev.config.json

# Ver status
pm2 status

# Ver logs
pm2 logs

# Parar todos os processos
pm2 stop all

# Deletar todos os processos
pm2 delete all
```

## Acessos

- **Frontend**: http://localhost:3000
- **Strapi Admin**: http://localhost:1337/admin
