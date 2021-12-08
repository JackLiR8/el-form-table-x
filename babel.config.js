module.exports = {
  presets: [
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs'
  ],
  'env': {
    'development': {
      'plugins': [
        [
          'component',
          {
            'libraryName': 'element-ui',
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    'production': {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            "styleLibraryName": "theme-chalk"
          }
        ]
      ],
    }
  }
}
