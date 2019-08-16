module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.externals = {
      // 'vue': 'Vue',
      // 'vue-router': 'VueRouter',
      'axios': 'axios',
      // 'cube-ui': 'Cube'
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps
    sourceMap: false,
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
  },
}
