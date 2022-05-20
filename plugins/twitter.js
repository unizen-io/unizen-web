
export default () => {
  // Add script tag to head
  const script = document.createElement('script')
  script.id = 'twitter'
  script.src = '/js/twitterSnippet.js'
  document.head.appendChild(script)
}
