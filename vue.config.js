module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuetify-material-auth/'
    : '/',

  'transpileDependencies': [
    'vuetify'
  ]
}
