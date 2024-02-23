// components/Analytics.tsx
import Script from 'next/script'
import React from 'react'

const Analytics: React.FC = () => {
  return (
    <>
      <Script
        async
        src='https://platform.twitter.com/widgets.js'
        charSet='utf-8'
      ></Script>
    </>
  )
}

export default Analytics
