import { useMDXComponent } from 'next-contentlayer/hooks'
import PostLink from './Link'
import PostImage from './Image'
import PostBanner from './Banner'

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
  Banner: PostBanner,
}

interface MdxProps {
  code: string
}

export default function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className='text-lg prose prose-lg text-gray-600 max-w-none prose-p:leading-normal prose-headings:text-gray-900 prose-a:text-gray-90 hover:prose-a:underline prose-a:font-normal prose-strong:font-medium prose-strong:text-gray-900 prose-blockquote:italic prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:pl-0 prose-blockquote:border-none prose-h2:scroll-mt-28'>
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
