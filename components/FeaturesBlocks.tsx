export default function FeaturesBlocks() {
  return (
    <section className='relative'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0 bg-gray-900 pointer-events-none top-1/2 md:mt-12 lg:mt-0'
        aria-hidden='true'
      ></div>
      <div className='absolute bottom-0 left-0 right-0 w-px h-20 p-px m-auto transform translate-y-1/2 bg-gray-200'></div>

      <div className='relative max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='py-2 md:py-6'>
          {/* Section header */}
          <div className='max-w-3xl pb-12 mx-auto text-center md:pb-20'>
            <h2 className='mb-4 h2'>Sora AI Basic Features</h2>
            <p className='text-xl text-gray-600'>
              The model provides you with basic functionality for text-to-video,
              image-to-video and video-to-video.
            </p>
          </div>

          {/* Items */}
          <div className='grid items-start max-w-sm gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none'>
            {/* 1st item */}
            <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-60'>
              <svg
                className='w-16 h-16 p-1 mb-2 -mt-1'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <rect
                    className='text-blue-600 fill-current'
                    width='64'
                    height='64'
                    rx='32'
                  />
                  <g strokeWidth='2'>
                    <path
                      className='text-blue-300 stroke-current'
                      d='M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285'
                    />
                    <path
                      className='text-white stroke-current'
                      d='M20.571 37.714h5.715L36.57 26.286h8'
                    />
                    <path
                      className='text-blue-300 stroke-current'
                      strokeLinecap='square'
                      d='M41.143 34.286l3.428 3.428-3.428 3.429'
                    />
                    <path
                      className='text-white stroke-current'
                      strokeLinecap='square'
                      d='M41.143 29.714l3.428-3.428-3.428-3.429'
                    />
                  </g>
                </g>
              </svg>
              <h3 className='mb-1 text-xl font-bold leading-snug tracking-tight'>
                Text-To-Video
              </h3>
              <p className='text-center text-gray-600'>
                It's the basic feature.
              </p>
            </div>

            {/* 2nd item */}
            <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-60'>
              <svg
                className='w-16 h-16 p-1 mb-2 -mt-1'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <rect
                    className='text-blue-600 fill-current'
                    width='64'
                    height='64'
                    rx='32'
                  />
                  <g strokeWidth='2' transform='translate(19.429 20.571)'>
                    <circle
                      className='text-white stroke-current'
                      strokeLinecap='square'
                      cx='12.571'
                      cy='12.571'
                      r='1.143'
                    />
                    <path
                      className='text-white stroke-current'
                      d='M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696'
                    />
                    <path
                      className='text-blue-300 stroke-current'
                      d='M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835'
                    />
                  </g>
                </g>
              </svg>
              <h3 className='mb-1 text-xl font-bold leading-snug tracking-tight'>
                Image-To-Video
              </h3>
              <p className='text-center text-gray-600'>
                The model can also understand image embeddings, which makes it
                possible to generate variations of a given image.
              </p>
            </div>

            {/* 3rd item */}
            <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-60'>
              <svg
                className='w-16 h-16 p-1 mb-2 -mt-1'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <rect
                    className='text-blue-600 fill-current'
                    width='64'
                    height='64'
                    rx='32'
                  />
                  <g strokeWidth='2'>
                    <path
                      className='text-blue-300 stroke-current'
                      d='M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286'
                    />
                    <path
                      className='text-white stroke-current'
                      strokeLinecap='square'
                      d='M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286'
                    />
                    <path
                      className='text-blue-300 stroke-current'
                      d='M36.571 32H40'
                    />
                    <path
                      className='text-white stroke-current'
                      d='M24 32h3.429'
                      strokeLinecap='square'
                    />
                  </g>
                </g>
              </svg>
              <h3 className='mb-1 text-xl font-bold leading-snug tracking-tight'>
                Video-To-Video
              </h3>
              <p className='text-center text-gray-600'>
                This works just as usual, by noising an image up to a specific
                point and then letting the model generate from that starting
                point.
              </p>
            </div>

            {/* 4th item */}
            <div className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-60'>
              <svg
                className='w-16 h-16 p-1 mb-2 -mt-1'
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <rect
                    className='text-blue-600 fill-current'
                    width='64'
                    height='64'
                    rx='32'
                  />
                  <g strokeWidth='2'>
                    <path
                      className='text-white stroke-current'
                      d='M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714'
                    />
                    <path
                      className='text-white stroke-current'
                      d='M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286'
                    />
                    <path
                      className='text-white stroke-current'
                      d='M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286'
                    />
                    <path
                      className='text-blue-300 stroke-current'
                      d='M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572'
                      strokeLinecap='square'
                    />
                  </g>
                </g>
              </svg>
              <h3 className='mb-1 text-xl font-bold leading-snug tracking-tight'>
                Coming soon
              </h3>
              <p className='text-center text-gray-600'>Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
