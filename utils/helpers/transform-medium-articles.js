
import DOMParser from 'universal-dom-parser'

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
  const pos1 = content.toLowerCase().indexOf('src="')
  const pos2 = pos1 && content.toLowerCase().indexOf('"', pos1 + 5)
  if (pos1 && pos2) {
    return content.substring(pos1 + 5, pos2)
  } else {
    return undefined
  }
}

export default transformMediumArticles
