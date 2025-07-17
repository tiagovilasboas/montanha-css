const fs = require('fs');
const path = require('path');

// Ler o arquivo de tokens
const tokensPath = path.join(__dirname, '..', 'src', 'core', 'tokens.css');
const tokensContent = fs.readFileSync(tokensPath, 'utf8');

// Extrair variáveis CSS
const tokens = {};
const cssVarRegex = /--([^:]+):\s*([^;]+);/g;
let match;

while ((match = cssVarRegex.exec(tokensContent)) !== null) {
  const [, name, value] = match;
  const cleanName = name.replace(/^(mnt-|color-)/, '');
  tokens[cleanName] = value.trim();
}

// Gerar arquivo JSON
const jsonPath = path.join(__dirname, '..', 'dist', 'tokens.json');
const jsonContent = JSON.stringify(tokens, null, 2);

// Garantir que o diretório dist existe
const distDir = path.dirname(jsonPath);
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(jsonPath, jsonContent);
console.log('✅ Tokens JSON gerado:', jsonPath);
console.log('📊 Tokens extraídos:', Object.keys(tokens).length); 