import FAQ from '@/components/FAQ'
import { getSEOTags } from '@/libs/seo'
import config from '@/config'

export async function generateMetadata() {
  return getSEOTags({
    title: `FAQ | ${config.appName}`,
    canonicalUrlRelative: `/faq`,
  })
}

export default function FAQPage() {
  return (
    <div className='pt-10'>
      <FAQ />
    </div>
  )
}
