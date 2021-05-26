const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
], {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
})
