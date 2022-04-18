
import DOMParser from 'universal-dom-parser'

// TODO: could be better using Vue built-in utilities
const transformMediumArticles = (data) => {
  const parser = new DOMParser()
  const xml = parser.parseFromString(data, 'text/xml')
  let articles = []
  const itemsList = xml.getElementsByTagName('item')
  for (let i = 0; i < itemsList.length; i++) {
    const item = itemsList[i]
    articles.push({
      thumbnail: getThumbnailImage(cleanCDATA(item.getElementsByTagName('content:encoded')[0].innerHTML)),
      title: cleanCDATA(item.getElementsByTagName('title')[0].innerHTML).toUpperCase(),
      publishedDate: item.getElementsByTagName('pubDate')[0].innerHTML,
      link: item.getElementsByTagName('link')[0].innerHTML,
      content: item.getElementsByTagName('content:encoded')[0].innerHTML
    })
  }
  articles = articles.sort(function (a, b) {
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  })

  return articles
}

const cleanCDATA = content => content.replace('<![CDATA[', '').replace(']]>', '')

const getThumbnailImage = (content) => {
  const parser = new DOMParser()
  const xml = parser.parseFromString(content, 'text/xml')
  return xml.getElementsByTagName('img').length > 0
    ? xml.getElementsByTagName('img')[0].getAttribute('src')
    : undefined
}

export default transformMediumArticles
