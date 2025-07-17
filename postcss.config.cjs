const tokensPlugin = require('./postcss-tokens');

module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: { preset: "default" }
  }
}; 