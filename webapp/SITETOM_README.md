# Estrutura do Site TOM (GOLFFOX)

## Estrutura Geral do HTML

O site está estruturado em uma landing page (index.html) com 7233 linhas de código, organizada em seções modulares usando um sistema de grid.

### Head Section

- **Título**: "Transporte Confortável e Personalizado para Colaboradores | GOLFFOX"
- **Meta tags**: SEO otimizado com descrições em português sobre otimização de transporte empresarial
- **Favicon**: EMOJI-S-2.png
- **CSS**: Múltiplos arquivos CSS modulares (template_library.min.css, template_main.min.css, etc.)
- **Fontes**: Montserrat, Caveat (cursive)

### Estrutura do Body

#### 1. Header

- **Logo**: logo-green-1.png (150x63px) - Logo verde da empresa com responsividade

#### 2. Seção Hero (Principal)

- **Título Principal**: "Solução Inteligente de Transporte para Seus Colaboradores"
- **Subtítulo**: "Oferecemos a solução perfeita para reduzir o custo do transporte e melhorar a experiência do seu time."
- **Imagem Hero**: bus_banner (2)-1.png - Banner de ônibus
- **Cores**: Verde (#00bf6f) e laranja (#ff9f0d) como cores de destaque
- **CTAs**: Botões "Fale com a gente" e "Fale connosco"

#### 3. Seção de Logos de Clientes

Exibição de logotipos de empresas parceiras:

- amazon.png
- mercado_livre.png
- JBS.png
- casas_bahia.png
- Boticario.png
- dasa-1.png

#### 4. Seção de Funcionalidades

**Título**: "Como Funciona" com ícone Imagem5.svg

**Slides/Cards com imagens:**

- image-png-May-09-2025-06-31-23-7341-PM.png
- image-png-May-09-2025-06-41-46-0693-PM.png
- image-png-May-09-2025-06-45-33-1338-PM.png

#### 5. Seção de Benefícios

**Título**: "Por que Escolher a GOLFFOX?"

**4 Pilares principais com ícones:**

1. **Redução de Custos** - redução de custos.png
2. **Sustentabilidade** - sustentabilidade.png
3. **Retenção de Talentos** - talentos.png
4. **Inovação** - bulb_scratch.png

#### 6. Seção de Mapa/Rotas

- **Imagem**: mapa-optimizar-rotas-web-3.png
- Demonstração visual das rotas otimizadas

#### 7. Seção de Resultados

- **Título**: "Resultados que falam por si"
- Estatísticas e métricas de performance

#### 8. Seção de Depoimentos/Testemunhos

- **Ícone**: quote.svg (repetido 3 vezes)
- Cards com depoimentos de clientes

#### 9. Seção de App Mobile

- **Imagem**: telemóvel_golffox-2.png
- Apresentação do aplicativo móvel

#### 10. Seção "Como Começar"

- **Título**: "Veja como é fácil e rápido começar!"
- **3 Passos numerados**:
  1. **Soluções personalizadas** - "Analisamos as necessidades da sua empresa e criamos rotas sob medida."
  2. **Implementação rápida** - "Treinamos o Operador e colocamos tudo a funcionar sem complicações."
  3. **Gestão contínua** - "Monitorizamos o serviço em tempo real e ajustamos conforme necessário."

#### 11. Seção de Contato

- **Título**: "Pronto para transformar o transporte da sua empresa?"
- **Formulário de contato** com campos:
  - Nome completo
  - Email
  - Telefone
  - Empresa
  - Mensagem
- **ID âncora**: #contacto

#### 12. Footer

- **Copyright**: "Copyright © 2025 GOLFFOX All Rights Reserved."
- **Botão "Scroll to Top"**: Botão circular verde com seta para cima
- **Áreas de Footer**: 3 áreas modulares (footer-dnd-area1, footer-dnd-area2, footer-dnd-area3)

### Características Técnicas

- **Sistema modular**: Uso de widgets/módulos reutilizáveis
- **Grid responsivo**: Layout em colunas adaptáveis (span6, span12)
- **CSS inline e externo**: Estilos personalizados para cada módulo
- **Slider/Galeria**: Implementação com Splide.js
- **Formulário funcional**: Action="/api/form" method="POST"

### Paleta de Cores

- **Verde principal**: #00bf6f
- **Laranja de destaque**: #ff9f0d
- **Preto**: #000000
- **Cinza**: #666666

### Imagens por Categoria

- **Branding**: logos, favicon
- **Hero/Banner**: imagens de ônibus e transporte
- **Clientes**: logotipos de empresas parceiras
- **Funcionalidades**: screenshots do produto/serviço
- **Benefícios**: ícones ilustrativos
- **Interface**: elementos de UI como quotes, mapas
- **Mobile**: mockups de aplicativo
