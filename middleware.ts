import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/privacy-policy',
    '/terms-of-service',
    '/faq',
    '/blog',
    // '/blog/**',
    '/sign-in',
    '/sign-up',
    '/blog/what-is-stable-cascade',
    '/blog/why-is-stable-cascade-better',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
