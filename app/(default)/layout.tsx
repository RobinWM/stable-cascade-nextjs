import Header from '@/components/UI/Header'

import Footer from '@/components/UI/Footer'

import { getSEOTags } from '@/libs/seo'

export async function generateMetadata() {
  return getSEOTags()
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <main className='grow'>{children}</main>

      <Footer />
    </>
  )
}
