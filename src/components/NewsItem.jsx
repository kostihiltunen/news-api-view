const NewsItem = ({ article }) => {
    
    return (
      <li className='newsItem'>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </li>
    )
}

export default NewsItem