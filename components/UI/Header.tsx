// 'use client'

// import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './Logo'
// import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './MobileMenu'
import { UserButton, auth } from '@clerk/nextjs'

export default function Header() {
  const { userId } = auth()

  // const [top, setTop] = useState<boolean>(true)
  const top = false

  // // detect whether user has scrolled the page down by 10px
  // const scrollHandler = () => {
  //   window.pageYOffset > 10 ? setTop(false) : setTop(true)
  // }

  // useEffect(() => {
  //   scrollHandler()
  //   window.addEventListener('scroll', scrollHandler)
  //   return () => window.removeEventListener('scroll', scrollHandler)
  // }, [top])

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? 'bg-white backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <div className='max-w-6xl px-5 mx-auto sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='mr-4 shrink-0'>
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            {/* Desktop menu links */}
            <ul className='flex flex-wrap items-center justify-end grow'>
              <li>
                <Link
                  href='/blog'
                  className='flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5'
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href='/faq'
                  className='flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5'
                >
                  FAQ
                </Link>
              </li>

              {/* <li>
                <Link
                  href='/pricing'
                  className='flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5'
                >
                  Pricing
                </Link>
              </li> */}

              {/* <li>
                <Link
                  href='/terms-of-service'
                  className='flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5'
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href='/privacy-policy'
                  className='flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5'
                >
                  Privacy Policy
                </Link>
              </li> */}

              {/* 
              <Dropdown title='Resources'>
                <li>
                  <Link
                    href='/documentation'
                    className='flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900'
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/support'
                    className='flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900'
                  >
                    Support center
                  </Link>
                </li>
              </Dropdown> */}
            </ul>

            {/* Desktop sign in links */}
            <ul className='flex flex-wrap items-center justify-end grow'>
              <li>
                <Link
                  href='/signin'
                  className='flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                >
                  Sign in
                </Link>
              </li>
              {
                <li>
                  {!userId ? (
                    <Link
                      href='/sign-in'
                      className='ml-3 text-gray-200 bg-gray-900 btn-sm hover:bg-gray-800'
                    >
                      <span>Sign in</span>
                    </Link>
                  ) : (
                    <UserButton />
                  )}
                </li>
              }
            </ul>
          </nav>

          <MobileMenu userId={userId} />
        </div>
      </div>
    </header>
  )
}
