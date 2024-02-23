import Link from 'next/link'
import Image from 'next/image'
import config from '@/config'

export default function Logo() {
  return (
    <Link href='/' className='flex items-center' aria-label='StableCascade'>
      <Image src={'/LOGO-remove-bg.png'} alt={''} width={80} height={80} />
      <strong className='text-base font-extrabold tracking-tight md:text-lg'>
        {config.appName}
      </strong>
    </Link>
  )
}
