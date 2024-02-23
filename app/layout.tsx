import './css/style.css'

import { Inter } from 'next/font/google'

import CommonAnalytics from '@/components/CommonAnalytics'
import AddRelatedTweets from '@/components/AddRelatedTweets'
import { getSEOTags } from '@/libs/seo'
// import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateMetadata() {
  return getSEOTags()
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
    <html lang='en'>
      <head>
        <CommonAnalytics />
        <AddRelatedTweets />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className='flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
          {children}
        </div>
      </body>
    </html>
    // </ClerkProvider>
  )
}
