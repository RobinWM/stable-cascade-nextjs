import HeroHome from '@/components/HeroHome'
import FeaturesBlocks from '@/components/FeaturesBlocks'
import RelatedTweets from '@/components/RelatedTweets'
import GetStarted from '@/components/GetStarted'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <HeroHome />

      <FeaturesBlocks />

      <RelatedTweets />

      <GetStarted />

      <section id='faq'>
        <FAQ />
      </section>
    </>
  )
}
