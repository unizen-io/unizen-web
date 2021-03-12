// ray test touch <
// TODO: could define URLs as config constants
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    netlifyIdentity.init({
      APIUrl: 'https://zencex-dev-branch.netlify.app/.netlify/identity'
    })
  })
} else {
  netlifyIdentity.init({
    APIUrl: 'https://zencex-dev-branch.netlify.app/.netlify/identity'
  })
}
// ray test touch >
