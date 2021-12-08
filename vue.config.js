const path = require('path')

module.exports = {
  configureWebpack: {
    entry: './examples/main.js',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'example'),
        packages: path.resolve(__dirname, 'packages')
      }
    }
  }
}
