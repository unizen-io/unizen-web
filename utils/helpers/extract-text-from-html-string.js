
const extractTextFromHTMLString = (node) => {
  if (!process.client) {
    return ''
  }
  node = node.replaceAll('</h4>', '.&nbsp;</h4>')
  node = node.replaceAll('</p>', '.&nbsp;</p>')
  const tag = document.createElement('div')
  tag.innerHTML = node
  node = tag.textContent

  return node
}

export default extractTextFromHTMLString
