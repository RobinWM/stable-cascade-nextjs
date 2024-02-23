// components/Analytics.tsx
import Script from 'next/script'
import React from 'react'

const Analytics: React.FC = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
      />

      <Script id='ga-analytics'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA_ID}');
          `}
      </Script>
    </>
  )
}

export default Analytics
