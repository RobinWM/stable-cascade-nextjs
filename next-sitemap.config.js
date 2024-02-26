module.exports = {
  siteUrl: process.env.SITE_URL || 'https://stablecascade.net/',
  generateRobotsTxt: true,
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
      '/blog/what-is-stable-cascade',
      '/blog/why-is-stable-cascade-better',
    ]
    console.log(`additionalPaths`, config)
    return paths.map(path => {
      return {
        loc: `https://stablecascade.net${path}`,
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
