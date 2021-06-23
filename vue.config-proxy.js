module.exports = {
  devServer: {
    proxy: {
      '^/api/*': {
        target: 'https://api.active-test.tech',
        ws: true,
        changeOrigin: true
      },
    }
  }
}