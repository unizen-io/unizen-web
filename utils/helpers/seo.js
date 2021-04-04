/**
 * Creates SEO related meta tags for the header
 *
 * @param {Object} data The object holding all relevant SEO information for the current page (title, description, image, slug, viewport)
 * @param {Object} baseTags Optional object holding additional default meta tags for the current page
 *
 * @return {Object} Merged object of base tags and generated meta tags object
 *
 */
const createSEOTags = (data, baseTags = {}) => {
  const _seoTags = {
    // default page title
    title: data.title,
    // meta tags
    meta: [
      // default meta tag description
      { hid: 'description', name: 'description', content: data.description },
      // open graph tags (used by reddit, facebook, etc.)
      { hid: 'og:type', property: 'og:type', content: data.type || 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: data.title },
      { hid: 'og:title', property: 'og:title', content: data.title },
      { hid: 'og:description', property: 'og:description', content: data.description },
      { hid: 'og:image', property: 'og:image', content: data.image || '' }, // TODO: set default image
      { hid: 'og:url', property: 'og:url', content: `https://unizen.io/${(data.slug || '')}` },
      // custom twitter tags (twitter cards)
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:side', name: 'twitter:site', content: '@unizen_io' },
      { hid: 'twitter:domain', property: 'twitter:domain', content: 'unizen.io' },
      { hid: 'twitter:url', property: 'twitter:url', content: `https://unizen.io/${(data.slug || ' ')}` },
      { hid: 'twitter:title', name: 'twitter:title', content: data.title },
      { hid: 'twitter:description', name: 'twitter:description', content: data.description },
      // additional meta tags for icon themes
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#00aba9' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      // icons for favicon, pwa etc.
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { hid: 'icon32', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-32x32.png' },
      { hid: 'icon16', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon-16x16.png' },
      { hid: 'manifest', rel: 'manifest', href: '/site.webmanifest' },
      { hid: 'mask-icon', rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbbab5' }
    ]
  }

  return {
    ...baseTags,
    ..._seoTags
  }
}

export {
  createSEOTags
}
