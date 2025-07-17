const fs = require('fs');
const path = require('path');

module.exports = () => {
  return {
    postcssPlugin: 'postcss-tokens',
    Once(root, { from }) {
      // Só processar se for o arquivo de tokens
      if (!from || !from.includes('tokens.css')) {
        return;
      }
      
      const tokens = {};
      
      // Extrair variáveis CSS do arquivo tokens.css
      root.walkDecls(/^--/, (decl) => {
        const name = decl.prop;
        const value = decl.value;
        
        // Remover prefixo --mnt- ou --color- para o nome da chave
        const key = name.replace(/^--(mnt-|color-)?/, '');
        
        tokens[key] = value;
      });
      
      // Gerar arquivo JSON
      const jsonPath = path.join(__dirname, 'dist', 'tokens.json');
      const jsonContent = JSON.stringify(tokens, null, 2);
      
      // Garantir que o diretório dist existe
      const distDir = path.dirname(jsonPath);
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      
      fs.writeFileSync(jsonPath, jsonContent);
      console.log('✅ Tokens JSON gerado:', jsonPath);
    }
  };
};

module.exports.postcss = true; 