
import { PRODUCTION_DOMAIN } from '../../config'

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
      // Primary
      { hid: 'title', name: 'title', content: data.title },
      { hid: 'description', name: 'description', content: data.description },

      // Open Graph (used by reddit, facebook, etc.)
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `https://${PRODUCTION_DOMAIN}${(data.slug || '')}` },
      { hid: 'og:title', property: 'og:title', content: data.title },
      { hid: 'og:description', property: 'og:description', content: data.description },
      { hid: 'og:image', property: 'og:image', content: data.image || `https://${PRODUCTION_DOMAIN}/unizen-meta-image.jpg` },
      { hid: 'og:image:width', property: 'og:image:width', content: data.imageWidth || '1920' },
      { hid: 'og:image:height', property: 'og:image:height', content: data.imageHeight || '719' },

      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:url', property: 'twitter:url', content: `https://${PRODUCTION_DOMAIN}${(data.slug || ' ')}` },
      { hid: 'twitter:title', name: 'twitter:title', content: data.title },
      { hid: 'twitter:description', name: 'twitter:description', content: data.description },
      { hid: 'twitter:image', name: 'twitter:image', content: data.image || `https://${PRODUCTION_DOMAIN}/unizen-meta-image.jpg` },
      { hid: 'twitter:site', name: 'twitter:site', content: '@unizen_io' },
      { hid: 'twitter:domain', property: 'twitter:domain', content: PRODUCTION_DOMAIN },

      // Additional meta tags for icon themes
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#00aba9' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      // Icons for favicon, pwa etc.
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { hid: 'favicon-32x32', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { hid: 'favicon-16x16', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { hid: 'manifest', rel: 'manifest', href: '/site.webmanifest' },
      { hid: 'mask-icon', rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbbab5' },
      { hid: 'favicon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
