import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/privacy-policy',
    '/terms-of-service',
    '/faq',
    '/blog',
    '/blog/what-is-stable-cascade',
    '/sign-in',
    '/sign-up',
  ],
  debug: true,
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
