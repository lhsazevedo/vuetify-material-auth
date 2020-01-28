module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuetify-google-signin-2018/'
    : '/',

  'transpileDependencies': [
    'vuetify'
  ]
}
