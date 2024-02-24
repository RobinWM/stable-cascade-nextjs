import { allPosts } from 'contentlayer/generated'
import PostItem from '@/components/PostItem'
import PopularPosts from './popular-posts'
import Topics from './topics'
import { getSEOTags } from '@/libs/seo'
import config from '@/config'

export async function generateMetadata() {
  return getSEOTags({
    title: `Blog | ${config.appName}`,
    canonicalUrlRelative: `/blog`,
  })
}

export default function Blog() {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
  })

  return (
    <section>
      <div className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {/* Page header */}
          <div className='max-w-3xl pb-12 text-center md:pb-20 md:text-left'>
            <h1 className='mb-4 h1'>Sora AI blog</h1>
            <p className='text-xl text-gray-600'>
              Get the latest information of Sora AI model from here.
            </p>
          </div>

          {/* Main content */}
          <div className='md:flex md:justify-between'>
            {/* Articles container */}
            <div className='-mt-4 md:grow'>
              {allPosts.map((post, postIndex) => (
                <PostItem key={postIndex} {...post} />
              ))}
            </div>

            {/* Sidebar */}
            <aside className='relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0'>
              <PopularPosts />
              {/* <Topics /> */}
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
