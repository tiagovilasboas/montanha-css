# Montanha CSS

Um framework CSS minimalista e acessível, inspirado na simplicidade dos frameworks modernos como Simple.css, mas com foco em design systems robustos e acessibilidade.

## ✨ Características

- **Design System Completo**: Tokens CSS, cores semânticas, tipografia fluida
- **Dark Mode Nativo**: Toggle manual + preferência do sistema
- **Acessibilidade First**: Skip links, focus states, reduced motion
- **Print Styles**: Otimizado para impressão
- **Componentes Prontos**: Header, nav, footer, cards, forms
- **Utilitários Flexíveis**: Grid, flexbox, spacing, animações
- **Responsivo**: Breakpoints otimizados para todos os dispositivos
- **Zero JavaScript**: Funciona sem JS (exceto theme toggle)

## 🚀 Instalação

```bash
npm install montanha-css
```

## 📦 Uso

### CSS Import
```css
@import "montanha-css";
```

### HTML
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <link rel="stylesheet" href="montanha.css">
</head>
<body>
  <!-- Skip Link para Acessibilidade -->
  <a href="#main" class="skip-link">Pular para o conteúdo</a>
  
  <!-- Header -->
  <header class="mnt-header">
    <div class="mnt-header-content">
      <a href="#" class="mnt-header-brand">Logo</a>
      <nav class="mnt-nav">
        <ul class="mnt-nav-list">
          <li><a href="#" class="mnt-nav-link">Início</a></li>
        </ul>
      </nav>
      <button class="mnt-theme-toggle">🌙</button>
    </div>
  </header>

  <main id="main">
    <div class="mnt-card">
      <h1>Olá, Montanha CSS!</h1>
      <button class="mnt-btn">Clique aqui</button>
    </div>
  </main>
</body>
</html>
```

## 🎨 Design System

### Cores
```css
/* Primária */
--color-primary: #1D8CFF;
--color-primary-hover: #4BA4FF;

/* Semânticas */
--mnt-success: #22C55E;
--mnt-warning: #F59E0B;
--mnt-danger: #EF4444;

/* Neutros */
--mnt-gray-50: #F9FAFB;
--mnt-gray-900: #111827;
```

### Tipografia Fluida
```css
/* Base: 16px → 18px */
--font-base: clamp(1rem, 1rem + 0.5vw, 1.125rem);

/* Headings */
--font-h1: clamp(2.25rem, 1.75rem + 2vw, 3rem);
--font-h2: clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem);
```

## 🌙 Dark Mode

### Automático (Preferência do Sistema)
```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bg: #0A1B3F;
    --color-surface: #162447;
  }
}
```

### Manual (JavaScript)
```javascript
// Toggle
document.documentElement.setAttribute('data-theme', 'dark');

// Salvar preferência
localStorage.setItem('theme', 'dark');
```

## ♿ Acessibilidade

### Skip Links
```html
<a href="#main" class="skip-link">Pular para o conteúdo</a>
```

### Focus States
```css
button:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📄 Print Styles

O framework inclui estilos otimizados para impressão:
- Cores em preto e branco
- Quebras de página adequadas
- Links com URLs visíveis
- Elementos não essenciais ocultos

## 🧩 Componentes

### Header
```html
<header class="mnt-header">
  <div class="mnt-header-content">
    <a href="#" class="mnt-header-brand">Logo</a>
    <nav class="mnt-nav">...</nav>
  </div>
</header>
```

### Navigation
```html
<nav class="mnt-nav">
  <ul class="mnt-nav-list">
    <li class="mnt-nav-item">
      <a href="#" class="mnt-nav-link active">Início</a>
    </li>
  </ul>
</nav>
```

### Cards
```html
<div class="mnt-card mnt-hover-lift">
  <h3>Título</h3>
  <p>Conteúdo do card</p>
  <button class="mnt-btn">Ação</button>
</div>
```

### Hero Section
```html
<section class="mnt-hero">
  <div class="mnt-hero-content">
    <h1>Título Principal</h1>
    <p>Descrição do hero</p>
    <button class="mnt-btn">CTA</button>
  </div>
</section>
```

## 🛠️ Utilitários

### Layout
```css
.mnt-container-sm  /* max-width: 640px */
.mnt-container-md  /* max-width: 768px */
.mnt-container-lg  /* max-width: 1024px */
.mnt-container-xl  /* max-width: 1280px */
```

### Grid
```css
.mnt-grid
.mnt-grid-cols-1
.mnt-grid-cols-2
.mnt-grid-cols-3
.mnt-grid-cols-4
.mnt-gap-1
.mnt-gap-2
.mnt-gap-3
.mnt-gap-4
```

### Flexbox
```css
.mnt-flex
.mnt-flex-row
.mnt-flex-col
.mnt-items-center
.mnt-justify-between
```

### Spacing
```css
.mnt-p-1, .mnt-p-2, .mnt-p-3, .mnt-p-4
.mnt-m-1, .mnt-m-2, .mnt-m-3, .mnt-m-4
.mnt-px-1, .mnt-px-2, .mnt-px-3, .mnt-px-4
.mnt-py-1, .mnt-py-2, .mnt-py-3, .mnt-py-4
```

### Text
```css
.mnt-text-xs, .mnt-text-sm, .mnt-text-base
.mnt-text-lg, .mnt-text-xl, .mnt-text-2xl
.mnt-font-light, .mnt-font-normal, .mnt-font-medium
.mnt-font-semibold, .mnt-font-bold
```

### Colors
```css
.mnt-text-primary, .mnt-text-muted
.mnt-text-success, .mnt-text-warning, .mnt-text-danger
.mnt-bg-primary, .mnt-bg-surface
.mnt-bg-success, .mnt-bg-warning, .mnt-bg-danger
```

### Animations
```css
.mnt-transition
.mnt-transition-fast
.mnt-transition-slow
.mnt-hover-scale
.mnt-hover-lift
```

## 📱 Responsivo

### Breakpoints
```css
/* Mobile First */
@media (max-width: 640px) { /* sm */ }
@media (min-width: 641px) and (max-width: 1024px) { /* md */ }
@media (min-width: 1025px) { /* lg */ }
```

### Classes Responsivas
```css
.mnt-sm-hidden, .mnt-sm-block, .mnt-sm-flex
.mnt-md-hidden, .mnt-md-block, .mnt-md-flex
.mnt-lg-hidden, .mnt-lg-block, .mnt-lg-flex
```

## 🏗️ Estrutura do Projeto

```
montanha-css/
├── src/
│   ├── core/
│   │   ├── tokens.css          # Design tokens
│   │   └── breakpoints.css     # Breakpoints
│   ├── layers/
│   │   ├── montanha.base.css   # Reset e base
│   │   ├── montanha.components.css # Componentes
│   │   └── montanha.utilities.css  # Utilitários
│   └── index.css               # Entry point
├── dist/
│   └── montanha.css            # Build final
├── docs/                       # Documentação
└── scripts/                    # Build scripts
```

## 🧪 Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Build de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Gerar tokens
pnpm tokens

# Testes visuais
pnpm test:visual
```

## 📚 Documentação

- [Guia de Início Rápido](./docs/getting-started.md)
- [Design System](./docs/design-system.md)
- [Componentes](./docs/components.md)
- [Utilitários](./docs/utilities.md)
- [Acessibilidade](./docs/accessibility.md)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**Montanha CSS** - Simplicidade e acessibilidade para a web moderna.
