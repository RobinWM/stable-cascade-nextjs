import GoogleAnalytics from './GoogleAnalytics'
import MicrosoftClarity from './MicrosoftClarity'
import PlausibleProvider from 'next-plausible'
import config from '@/config'

export default function CommonAnalytics() {
  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <PlausibleProvider domain={config.domainName} />
    </>
  )
}
