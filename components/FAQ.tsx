export default function FAQ() {
  return (
    <section>
      <div className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='py-12'>
          <div className='max-w-3xl pb-2 mx-auto text-center md:pb-4'>
            <h1 className='mb-4 h2'>Sora AI: Frequently Asked Questions</h1>
          </div>
        </div>

        <div className='p-5 bg-white rounded shadow-md border-slate-200'>
          <div className='mb-0 space-y-2 text-slate-800'>
            {/* <h1 className='text-2xl font-semibold text-center'>
              Sora AI: Frequently Asked Questions
            </h1> */}
            <h2 className='my-2 text-xl font-semibold'>General Questions</h2>
            <h3 className='my-2 text-xl font-semibold'>What is Sora AI?</h3>
            <p className='my-2'>
              Sora AI is an AI-based model developed by Stability AI, designed
              to generate images by text prompt. It's a pioneering tool in the
              field of generative AI for image.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              Why is Sora AI significant?
            </h3>
            <p className='my-2'>
              It introduces an interesting three-stage approach, setting new
              benchmarks for quality, flexibility, fine-tuning, and efficiency
              with a focus on further eliminating hardware barriers.
            </p>
            <h2 className='my-2 text-xl font-semibold'>Technical Aspects</h2>
            <h3 className='my-2 text-xl font-semibold'>
              What are the different variants of Sora AI?
            </h3>
            <p className='my-2'>
              There are two variants: SVD and SVD-XT. SVD creates 576×1024
              resolution videos with 14 frames, while SVD-XT extends the frame
              count to 24.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              What are the frame rates of Sora AI models?
            </h3>
            <p className='my-2'>
              Both models, SVD and SVD-XT, can generate videos at frame rates
              ranging from 3 to 30 frames per second.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              What are the limitations of Sora AI?
            </h3>
            <p className='my-2'>
              The model has difficulties generating videos without motion,
              cannot be controlled by text, struggles with rendering text
              legibly, and sometimes inaccurately generates faces and people.
            </p>
            <h2 className='my-2 text-xl font-semibold'>
              Usage and Applications
            </h2>
            <h3 className='my-2 text-xl font-semibold'>
              Can Sora AI be used for commercial purposes?
            </h3>
            <p className='my-2'>
              Currently, Sora AI is in a research preview and not intended for
              real-world commercial applications. However, there are plans for
              future development towards commercial uses.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              What are the intended applications of Sora AI?
            </h3>
            <p className='my-2'>
              The model is intended for educational or creative tools, design
              processes, and artistic projects. It's not meant for creating
              factual or true representations of people or events.
            </p>
            <h2 className='my-2 text-xl font-semibold'>Access and Community</h2>
            <h3 className='my-2 text-xl font-semibold'>
              Where can I access the Sora AI model?
            </h3>
            <p className='my-2'>
              The code is available on{' '}
              <a
                href='https://github.com/Stability-AI/StableCascade'
                title='Sora AI GitHub'
              >
                GitHub
              </a>
              , and the weights can be found on{' '}
              <a href='#getStarted' title='Sora AI'>
                StableCascade.net
              </a>
              .
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              Is Sora AI open source?
            </h3>
            <p className='my-2'>
              Yes, Stability AI has made the code for Sora AI available on
              GitHub, encouraging open-source collaboration and development.
            </p>
            <h2 className='my-2 text-xl font-semibold'>Future Prospects</h2>
            <h3 className='my-2 text-xl font-semibold'>
              What are the future developments planned for Sora AI?
            </h3>
            <p className='my-2'>
              Stability AI plans to build and extend upon the current models,
              including developing a "text-to-image" interface and evolving the
              models for broader, commercial applications.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              How can I stay updated on StableCascade's progress?
            </h3>
            <p className='my-2'>
              You can stay informed about the latest updates and developments by
              signing up for Stability AI's newsletter or following their
              official channels.
            </p>
            <h2 className='my-2 text-xl font-semibold'>Conclusion</h2>
            <h3 className='my-2 text-xl font-semibold'>
              How will Sora AI impact image generation?
            </h3>
            <p className='my-2'>
              Sora AI achieves impressive results, both visually and evaluation
              wise. According to our evaluation, Sora AI performs best in both
              prompt alignment and aesthetic quality in almost all comparisons.
            </p>
            <h2 className='my-2 text-xl font-semibold'>Additional Concerns</h2>
            <h3 className='my-2 text-xl font-semibold'>
              How does Sora AI compare to other AI image generation models?
            </h3>
            <p className='my-2'>
              Sora AI is one of the few image-generating models available in
              open source. It's known for its high-quality output and
              flexibility in applications. It compares favorably to other models
              in terms of accessibility and the quality of generated images.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              What kind of training data was used for Sora AI?
            </h3>
            <p className='my-2'>
              Sora AI was initially trained on a dataset of millions of images,
              many of which were from public research datasets. The exact
              sources of these images and the implications of their use in terms
              of copyrights and ethics have been points of discussion.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              Are there any ethical concerns associated with the use of Stable
              Video Diffusion?
            </h3>
            <p className='my-2'>
              Yes, like any generative AI model, Sora AI raises ethical
              concerns, particularly around the potential for misuse in creating
              misleading content or deepfakes. Stability AI has outlined certain
              non-intended uses and emphasizes ethical usage.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              How can developers and researchers contribute to the development
              of Sora AI?
            </h3>
            <p className='my-2'>
              Developers and researchers can contribute by accessing the model's
              code on GitHub, experimenting with it, providing feedback, and
              possibly contributing to its development through pull requests or
              discussions.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              What impact could Sora AI have on creative industries?
            </h3>
            <p className='my-2'>
              Sora AI could significantly impact creative industries by
              providing a tool for rapid and diverse video content creation. It
              could enhance creative processes in filmmaking, advertising,
              digital art, and more.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              Is there a community or forum where I can discuss Stable Video
              Diffusion?
            </h3>
            <p className='my-2'>
              Yes, interested users can join discussions on forums like GitHub
              or relevant subreddits. Also, Stability AI may have community
              channels or forums for discussions and updates.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              Are there any tutorials or learning resources available for Stable
              Cascade?
            </h3>
            <p className='my-2'>
              As of now, specific tutorials for Sora AI may be limited, but
              resources might become available as the community grows. Users can
              look for documentation on GitHub or Hugging Face for initial
              guidance.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              What are the computational requirements to run Sora AI?
            </h3>
            <p className='my-2'>
              Running Sora AI requires a significant amount of computational
              power, typically involving high-performance GPUs. The exact
              requirements can be found in the documentation on GitHub or
              Hugging Face.
            </p>
            <h3 className='my-2 text-xl font-semibold'>
              What is the future vision for Sora AI?
            </h3>
            <p className='my-2'>
              The long-term vision for Sora AI is to develop it into a
              versatile, user-friendly tool that can cater to a wide range of
              video generation needs across various industries, driving
              innovation in AI-assisted content creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
