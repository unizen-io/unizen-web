/**
 * Creates SEO related meta tags for the header
 *
 * @param {Object} data The object holding all relevant SEO information for the current page (title,description,image,url,viewport)
 * @param {Object} baseTags Optional object holding additional default meta tags for the current page
 *
 * @return {Object} Merged object of base tags and generated meta tags object
 *
 */
export default (data, baseTags) => {
  const _seoTags = {
    // default page title
    title: data.title,
    // meta tags
    meta: [
      { charset: data.charset || 'utf-8' },
      { name: 'viewport', content: data.viewport || 'width=device-width, initial-scale=1' },
      // default meta tag description
      { hid: 'description', name: 'description', content: data.description },
      // open graph tags (used by reddit, facebook, etc.)
      { hid: 'og:type', property: 'og:type', content: data.type || 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: data.title },
      { hid: 'og:title', property: 'og:title', content: data.title },
      { hid: 'og:description', property: 'og:description', content: data.description },
      { hid: 'og:image', property: 'og:image', content: data.image || '' }, // TODO: set default image
      { hid: 'og:url', property: 'og:url', content: `https://unizen.io/${(data.url || '')}` },
      // custom twitter tags (twitter cards)
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:side', name: 'twitter:site', content: '@unizen_io' },
      { hid: 'twitter:domain', property: 'twitter:domain', content: 'unizen.io' },
      { hid: 'twitter:url', property: 'twitter:url', content: `https://unizen.io/${(data.url || ' ')}` },
      { hid: 'twitter:title', name: 'twitter:title', content: data.title },
      { hid: 'twitter:description', name: 'twitter:description', content: data.description }
    ]
  }

  // return the combined array of header data
  return { ...baseTags || {}, ..._seoTags }
}
