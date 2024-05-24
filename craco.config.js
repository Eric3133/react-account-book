const path = require('path');

module.exports = {
  // webpack config
  webpack: {
    // alias config
    alias: {
      // @ -> src
      '@': path.resolve(__dirname, 'src')
    }
  }
}
