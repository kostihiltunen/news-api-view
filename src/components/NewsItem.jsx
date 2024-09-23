const NewsItem = ({ article }) => {

  return (
    <li className='newsItem'>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>{article.content}</p>
    </li>
  )
}

export default NewsItem