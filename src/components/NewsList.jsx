import NewsItem from "./NewsItem"

const NewsList = ({ articles }) => {
    console.log(articles)
    return (
        <ul>
            {articles.map((article, index) => (
                <NewsItem key={index} article={article}/>

            ))}
        </ul>
    )
}

export default NewsList