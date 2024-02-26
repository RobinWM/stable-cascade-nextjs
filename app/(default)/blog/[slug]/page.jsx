import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PostDate from '@/components/PostDate'
import MDX from '@/components/MDX/index'
import PostNav from './post-nav'

import { getSEOTags } from '@/libs/seo'
import config from '@/config'

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = allPosts.find(post => post.slug === params.slug)

  if (!post) return

  const { title, summary: description } = post

  return getSEOTags({
    title: `${title} | ${config.appName}`,
    description,
    canonicalUrlRelative: `/blog/${params.slug}`,
  })
}

export default async function SinglePost({ params }) {
  const post = allPosts.find(post => post.slug === params.slug)

  if (!post) notFound()

  return (
    <section>
      <div className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          <div className='max-w-3xl mx-auto lg:max-w-none'>
            <article>
              {/* Article header */}
              <header className='max-w-3xl mx-auto mb-20'>
                {/* Title */}
                <h1 className='mb-4 text-center h1'>{post.title}</h1>
              </header>

              {/* Article content */}
              <div className='lg:flex lg:justify-between'>
                {/* Sidebar */}
                <PostNav />

                {/* Main content */}
                <div>
                  {/* Article meta */}
                  <div className='flex items-center mb-6'>
                    <div className='flex mr-3 shrink-0'>
                      <a className='relative' href='#0'>
                        <span
                          className='absolute inset-0 -m-px'
                          aria-hidden='true'
                        >
                          <span className='absolute inset-0 -m-px bg-white rounded-full'></span>
                        </span>
                        <Image
                          className='relative rounded-full'
                          src={post.authorImg}
                          width={32}
                          height={32}
                          alt={post.author}
                        />
                      </a>
                    </div>
                    <div>
                      <span className='text-gray-600'>By </span>
                      <a className='font-medium hover:underline' href='#0'>
                        {post.author}
                      </a>
                      <span className='text-gray-600'>
                        {' '}
                        · <PostDate dateString={post.publishedAt} />
                      </span>
                    </div>
                  </div>
                  <hr className='w-16 h-px pt-px mb-6 bg-gray-200 border-0' />

                  {/* Article body */}
                  <div>
                    <MDX code={post.body.code} />
                  </div>

                  <div className='text-lg text-gray-600'>
                    <hr className='w-full h-px pt-px mt-8 bg-gray-200 border-0' />
                    {/* <div className='mt-8'>
                      Interested in more tips like this? Check out{' '}
                      <a className='text-gray-900 underline' href='#0'>
                        Introducing the Testing Field Guide
                      </a>
                      .
                    </div> */}
                    <div className='mt-6'>
                      <Link
                        href='/blog'
                        className='inline-flex items-center text-base font-medium text-blue-600 hover:underline'
                      >
                        <svg
                          className='w-3 h-3 mr-2 text-blue-400 fill-current shrink-0'
                          viewBox='0 0 12 12'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z' />
                        </svg>
                        <span>Back to the blog</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article footer */}
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
