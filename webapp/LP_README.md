# Landing Page - Estrutura e Componentes

## Visão Geral

Esta landing page é composta por 19 seções principais, cada uma com características específicas de layout, conteúdo e funcionalidades. O objetivo deste documento é mapear a estrutura para criar um sistema JSON configurável que permita gerar códigos alternativos.

## Estrutura das Seções

### Seção 1: Hero Section (Cabeçalho Principal)

**Localização:** `row-number-1`
**Tipo:** Hero com logo, título principal e CTA
**Componentes:**

- Logo da empresa (imagem configurável)
- Título principal em destaque
- Subtítulo explicativo
- Botão CTA "Fale com a gente"
- Imagem ilustrativa (ônibus)
  **Layout:** 2 colunas (6/6) - texto à esquerda, imagem à direita
  **Cores:** Verde #00bf6f para destaque

### Seção 2: Logos de Clientes

**Localização:** `row-number-2`
**Tipo:** Galeria de logos de clientes
**Componentes:**

- 6 logos distribuídos em colunas iguais (2/2/2/2/2/2)
- Logos: Amazon, Mercado Livre, JBS, Casas Bahia, Boticário, Dasa
  **Layout:** 6 colunas de 2 spans cada
  **Função:** Social proof

### Seção 3: Call to Action Principal

**Localização:** `row-number-9`
**Tipo:** CTA com formulário
**Componentes:**

- Título de conversão
- Formulário de contato completo com campos:
  - Nome (obrigatório)
  - Email corporativo (obrigatório)
  - Telefone corporativo
  - Nome da empresa (obrigatório)
  - Número de colaboradores (select)
  - Cidade (obrigatório)
  - Tipo de transporte (select)
  - Número de filiais (select)
  - Experiência com fretados (select)
  - Detalhes adicionais (textarea)
  - Checkbox de consentimento
- Botão de envio
  **Layout:** Centralized form
  **Cores:** Verde #00bf6f para botão

### Seção 4: Slider de Clientes (Oculto)

**Localização:** `row-number-12`
**Tipo:** Carrossel de imagens
**Componentes:**

- Slider Splide com 6 slides
- Controles de navegação (setas)
- Paginação
- Mesmos logos da seção 2
  **Status:** Atualmente oculto (`dnd_area-row-3-hidden`)

### Seção 5: Problema e Solução

**Localização:** `row-number-14`
**Tipo:** Apresentação do problema
**Componentes:**

- Texto destacando problemas (custo elevado, falta de flexibilidade)
- Proposta de solução da GOLFFOX
- Imagem ilustrativa do app
  **Layout:** 2 colunas (6/6) - texto à esquerda, imagem à direita
  **Cores:** Verde #00bf6f para solução

### Seção 6: Benefícios da Solução

**Localização:** `row-number-17`
**Tipo:** Descrição dos benefícios
**Componentes:**

- Título principal sobre redução de custos e produtividade
- Texto explicativo sobre otimização
- Imagem do mapa de rotas otimizadas
  **Layout:** Coluna única centralizada
  **Cores:** Verde #00bf6f para destaques

### Seção 7: Tecnologia - Visão Geral

**Localização:** `row-number-21`
**Tipo:** Introdução às funcionalidades
**Componentes:**

- Título "Tecnologia que otimiza o transporte corporativo"
  **Layout:** Coluna única centralizada

### Seção 8: Gestão Multi-operadores e Multi-Site

**Localização:** `row-number-23`
**Tipo:** Features em destaque
**Componentes:**

- Card 1: Gestão Multi-operadores
  - Título, descrição e ícone
  - Background azul claro (#e3f4f8)
- Card 2: Gestão Multi-Site
  - Título, descrição e screenshot
  - Background verde claro (#e6feef)
    **Layout:** 2 colunas (5/7)
    **Cores:** Fundos coloridos específicos para cada card

### Seção 9: Reports IA e Rotas Otimizadas

**Localização:** `row-number-26`
**Tipo:** Features técnicas
**Componentes:**

- Card 1: Reports IA
  - Background laranja (#fcf2e2)
  - Screenshot de dashboard
- Card 2: Rotas Otimizadas
  - Background verde claro (#d5fff2)
  - Imagem de interface mobile
    **Layout:** 2 colunas (7/5)

### Seção 10: Título dos Benefícios

**Localização:** `row-number-29`
**Tipo:** Separador de seção
**Componentes:**

- Título "Economia, produtividade e bem-estar para seus colaboradores"
  **Layout:** Coluna única centralizada

### Seção 11: Cards de Benefícios

**Localização:** `row-number-31`
**Tipo:** Grid de benefícios
**Componentes:**

- 4 cards com ícones e descrições:
  1. Redução de custos (até 40%)
  2. Sustentabilidade
  3. Retenção de talentos
  4. Flexibilidade e controle
     **Layout:** 2 colunas (6/6) com 2 cards cada
     **Cores:** Fundo branco com sombras

### Seção 12: Resultados Numéricos

**Localização:** `row-number-36`
**Tipo:** Métricas de impacto
**Componentes:**

- Título "Resultados que falam por si"
- 4 métricas em destaque:
  - +50 Cidades em 8 países
  - +80M Passageiros
  - +110 Clientes
  - +1.6K Rotas diárias
    **Layout:** 2 colunas (5/7) - título à esquerda, métricas à direita
    **Cores:** Fundo cinza (#eeeeee) para cards

### Seção 13: Título Depoimentos

**Localização:** `row-number-44`
**Tipo:** Separador
**Componentes:**

- Título "Histórias reais, Resultados reais"
  **Layout:** Coluna única centralizada

### Seção 14: Depoimentos de Clientes

**Localização:** `row-number-46`
**Tipo:** Testimonials
**Componentes:**

- 3 depoimentos em cards:
  1. Banco Millennium BCP
  2. Cognizant
  3. Ficosa
- Cada card com aspas, texto e empresa
  **Layout:** 3 colunas (4/4/4)
  **Cores:** Fundo branco com sombras

### Seção 15: Processo de Implementação

**Localização:** `row-number-50`
**Tipo:** Steps do processo
**Componentes:**

- Título "Veja como é fácil e rápido começar!"
- 3 etapas numeradas:
  1. Soluções personalizadas
  2. Implementação rápida
  3. Gestão contínua
     **Layout:** 3 colunas (4/4/4)
     **Cores:** Verde #00bf6f para números e títulos

### Seção 16: CTA Final com Imagem

**Localização:** `row-number-53`
**Tipo:** Call-to-action final
**Componentes:**

- Imagem do celular com app
- Título de conversão
- Texto explicativo
- Botões CTA (ocultos atualmente)
  **Layout:** 2 colunas (4/8) - imagem à esquerda, texto à direita

### Seção 17: Compromisso ESG

**Localização:** `row-number-58`
**Tipo:** Certificações e compliance
**Componentes:**

- Título sobre metas ESG
- Logo EPA
- Certificações ambientais
- Logos de agências reguladoras
- Selo EcoVadis
  **Layout:** 2 colunas (6/6)

### Seção 18: FAQ (Perguntas Frequentes)

**Localização:** `row-number-63`
**Tipo:** Accordion com perguntas
**Componentes:**

- Título "Perguntas Frequentes (FAQ)"
- 5 perguntas em formato accordion:
  1. Quem pode contratar
  2. Como reduz custos
  3. Serviços inclusos
  4. Eventos específicos
  5. Estratégia de sustentabilidade
     **Layout:** 2 colunas (4/8) - título à esquerda, accordion à direita

### Seção 19: Footer

**Localização:** `row-number-68`
**Tipo:** Rodapé
**Componentes:**

- Copyright da GOLFFOX
- Links de rodapé (vazios atualmente)
  **Layout:** Coluna única centralizada

## Elementos Configuráveis Identificados

### Cores Principais

- Verde primário: `#00bf6f`
- Cinza texto: `#666666`
- Fundos coloridos para cards específicos

### Imagens

- Logo da empresa
- Imagem hero (ônibus)
- Logos de clientes (6 diferentes)
- Screenshots de produtos
- Ícones de benefícios
- Certificações ESG

### Textos

- Títulos de seções
- Descrições de benefícios
- Depoimentos
- Campos de formulário
- Perguntas do FAQ

### Layout

- Sistema de grid responsivo
- Alternância de layouts 2 colunas
- Cards com diferentes backgrounds
- Componentes reutilizáveis

## Próximos Passos

1. Criar estrutura JSON para configuração
2. Definir componentes reutilizáveis
3. Mapear variáveis de estilo
4. Criar sistema de templates
