
// TODO: could be better using Vue built-in utilities
const transformMediumArticles = (data) => {
  const res = data.items // This is an array with the content. No feed, no info about author etc..
  let articles = res.filter(item => item.categories.length > 0) // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0

  articles =
    articles
      .map(article => ({
        thumbnail: article.thumbnail,
        title: article.title,
        content: article.content,
        publishedDate: article.pubDate,
        link: article.link
      }))
      .sort(function (a, b) {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      })

  return articles
}

export default transformMediumArticles
