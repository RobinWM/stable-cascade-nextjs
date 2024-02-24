module.exports = {
  siteUrl: process.env.SITE_URL || 'https://soraai.tech/',
  generateRobotsTxt: false,
  exclude: [
    '/twitter-image.*',
    '/opengraph-image.*',
    '/icon.*',
    '/api/**/*',
    '/img/*',
  ],
  async additionalPaths(config) {
    const paths = [
      '/',
      '/privacy-policy',
      '/terms-of-service',
      '/faq',
      '/blog',
      '/blog/what-is-sora-ai',
    ]
    console.log(`additionalPaths`, config)
    return paths.map(path => {
      return {
        loc: `https://soraai.tech${path}`,
        lastmod: new Date().toISOString(),
        priority: 0.7,
        changefreq: 'daily',
      }
    })
  },
  async generateSitemap(config) {
    console.log(`generateSitemap`, config)
    return getServerSideSitemap({ paths: allPaths })
  },
}
