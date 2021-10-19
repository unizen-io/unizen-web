
const PAGES = Object.freeze({
  home: {
    url: '/',
    title: 'home'
  },
  blog: {
    url: '/blog',
    title: 'blog'
  },
  team: {
    url: '/team',
    title: 'team'
  },
  contact: {
    url: '/contact',
    title: 'contact'
  },
  competition: {
    url: '/competition',
    title: 'competition'
  },
  kycComplete: {
    url: '/kyc-complete',
    title: 'kyc complete'
  },
  privacyPolicy: {
    url: '/privacy-policy',
    title: 'privacy policy'
  },
  thanks: {
    url: '/thanks',
    title: 'thanks'
  },
  token: {
    url: '/token',
    title: 'token'
  },
  wenzen: {
    url: '/wenzen',
    title: 'wenzen'
  },
  zcx: {
    url: '/token',
    title: 'zcx'
  }
})

const NAVIGATION_LINKS = [
  PAGES.home,
  PAGES.blog,
  PAGES.zcx,
  PAGES.team,
  PAGES.contact
]

export {
  PAGES,
  NAVIGATION_LINKS
}
