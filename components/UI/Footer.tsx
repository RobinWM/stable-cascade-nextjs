import Logo from './Logo'
import Link from 'next/link'
import config from '@/config'

export default async function Footer() {
  return (
    <footer className='border-t bg-base-200 border-base-content/10'>
      <div className='px-8 py-24 mx-auto max-w-7xl'>
        <div className='flex flex-col flex-wrap lg:items-start md:flex-row md:flex-nowrap'>
          <div className='flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left'>
            <Logo />

            <p className='mt-3 text-sm text-base-content/60'>
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          <div className='flex flex-wrap justify-center flex-grow mt-10 -mb-10 text-center md:mt-0'>
            <div className='w-full px-4 lg:w-1/3 md:w-1/2'>
              <div className='mb-3 text-sm font-semibold tracking-widest footer-title text-base-content md:text-left'>
                LEGAL
              </div>

              <div className='flex flex-col items-center justify-center gap-2 mb-10 text-sm md:items-start'>
                <Link href='/terms-of-service' className='link link-hover'>
                  Terms & Conditions
                </Link>

                <Link href='/privacy-policy' className='link link-hover'>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
