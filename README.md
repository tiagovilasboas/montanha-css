# Montanha CSS

A pure CSS framework with modular layers for modern web development.

## Installation

### CDN
```html
<link rel="stylesheet" href="https://unpkg.com/montanha-css/dist/montanha.min.css">
```

### npm
```bash
npm install montanha-css
# or
yarn add montanha-css
# or
pnpm add montanha-css
```

## Layer Structure

Montanha CSS is split into three main layers:

- **Base**: Classless, opinionated reset and basic elements
- **Components**: Pre-built UI components (e.g. `.mnt-card`, `.mnt-btn`)
- **Utilities**: Utility classes for layout, spacing, color, etc.

You can import only what you need, or the full bundle.

## Usage Examples

### HTML (full bundle)
```html
<link rel="stylesheet" href="/node_modules/montanha-css/dist/montanha.css">
<!-- or CDN -->
<link rel="stylesheet" href="https://unpkg.com/montanha-css/dist/montanha.min.css">
```

### HTML (individual layers)
```html
<link rel="stylesheet" href="/node_modules/montanha-css/dist/montanha.base.css">
<link rel="stylesheet" href="/node_modules/montanha-css/dist/montanha.components.css">
<link rel="stylesheet" href="/node_modules/montanha-css/dist/montanha.utilities.css">
```

### React (full bundle)
```js
import 'montanha-css/dist/montanha.css';
```

### React (individual layers)
```js
import 'montanha-css/dist/montanha.base.css';
import 'montanha-css/dist/montanha.components.css';
import 'montanha-css/dist/montanha.utilities.css';
```

## Design Tokens

All design tokens are available as a JSON file for easy integration:

[View tokens.json](./dist/tokens.json)

## Project Structure

```
montanha-css/
├── src/
│   ├── core/
│   │   └── tokens.css          # Design tokens
│   ├── layers/
│   │   ├── montanha.base.css   # Classless base styles
│   │   ├── montanha.components.css  # Component classes
│   │   └── montanha.utilities.css   # Utility classes
│   └── index.css               # Main bundle
├── dist/                       # Built files
├── docs/                       # Documentation site
└── package.json
```

## License

MIT License - see LICENSE file for details.

## Documentation

Visit the [documentation site](https://tiagoboas.github.io/montanha-css) for detailed guides and examples.
