
# tom-busuber

> Projeto Next.js 15 com conversão do site estático BUSUP para React + Tailwind CSS.

## Estrutura do Projeto

### Site TOM (/sitetom)
Site convertido do HTML estático para Next.js com componentes React e Tailwind CSS.

**Componentes criados:**
- `Header` - Cabeçalho com logo
- `Hero` - Seção principal com título e CTA
- `Partners` - Logos dos parceiros
- `Features` - Características do serviço
- `Certifications` - Certificações e parcerias
- `FAQ` - Perguntas frequentes com accordion
- `Footer` - Rodapé

**Configuração:**
- `src/data/siteConfig.json` - Configuração centralizada do site
- `public/img/` - Imagens do site original

## Como rodar o projeto

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse:
- Site principal: [http://localhost:3000](http://localhost:3000)
- Site TOM: [http://localhost:3000/sitetom](http://localhost:3000/sitetom)

## Scripts disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a versão de produção
- `npm start`: Inicia o servidor em modo produção

## Tecnologias

- Next.js 15
- React 18
- Tailwind CSS
- TypeScript

## Deploy

Para fazer deploy, recomenda-se utilizar a plataforma [Vercel](https://vercel.com/).
