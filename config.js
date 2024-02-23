const config = {
  appName: 'StableCascade',
  appTitle:
    'stable cascade,stable cascade free,text to image,ai generator free',
  appDescription:
    'Stable Cascade in its research preview. This innovative text to image model introduces an interesting three-stage approach, setting new benchmarks for quality, flexibility, fine-tuning, and efficiency with a focus on further eliminating hardware barriers.',
  domainName: 'stablecascade.net',
  appKeywords: ['stable cascade', 'text to image'],
  crisp: {
    id: '',
    onlyShowOnRoutes: ['/'],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === 'development'
            ? 'price_1Niyy5AxyNprDp7iZIqEyD2h'
            : 'price_456',
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: 'Starter',
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: 'Perfect for small projects',
        // The price you want to display, the one user will be charged on Stripe.
        price: 79,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 99,
        features: [
          {
            name: 'NextJS boilerplate',
          },
          { name: 'User oauth' },
          { name: 'Database' },
          { name: 'Emails' },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === 'development'
            ? 'price_1O5KtcAxyNprDp7iftKnrrpw'
            : 'price_456',
        name: 'Advanced',
        description: 'You need more power',
        price: 99,
        priceAnchor: 149,
        features: [
          {
            name: 'NextJS boilerplate',
          },
          { name: 'User oauth' },
          { name: 'Database' },
          { name: 'Emails' },
          { name: '1 year of updates' },
          { name: '24/7 support' },
        ],
      },
    ],
  },
  aws: {
    bucket: 'bucket-name',
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: 'https://cdn-id.cloudfront.net/',
  },
  mailgun: {
    subdomain: 'mg',
    fromNoReply: `TTS.Tools <noreply@mg.shipfa.st>`,
    fromAdmin: `Marc at TTS.Tools <marc@mg.shipfa.st>`,
    supportEmail: 'robinw@mail.texttospeech.tools',
    forwardRepliesTo: 'v517649974769@gmail.com',
  },
  auth: {
    loginUrl: '/api/auth/signin',
    callbackUrl: '/dashboard',
  },
}

export default config
