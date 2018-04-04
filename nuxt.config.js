module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: [{
    src: './plugins/element-ui.js',
    ssr: true
  }, {
    src: './plugins/map.js',
    ssr: false
  }, {
    src: './plugins/echarts.js',
    ssr: true
  }
  ],

  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', 'element-ui/lib/theme-chalk/index.css', 'mapbox-gl/dist/mapbox-gl.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['./plugins/element-ui', 'axios', './plugins/echarts']
  }
}
