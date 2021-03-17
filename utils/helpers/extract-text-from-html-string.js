
const extractTextFromHTMLString = (node) => {
  if (!process.client) {
    return ''
  }

  const tag = document.createElement('div')
  tag.innerHTML = node
  node = tag.textContent

  return node
}

export default extractTextFromHTMLString
