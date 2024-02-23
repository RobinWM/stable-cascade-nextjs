'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import HeroHome from '@/components/HeroHome'
import FeaturesBlocks from '@/components/FeaturesBlocks'
import RelatedTweets from '@/components/RelatedTweets'
import GetStarted from '@/components/GetStarted'
import FAQ from '@/components/FAQ'

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

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
