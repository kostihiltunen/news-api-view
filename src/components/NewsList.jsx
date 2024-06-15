import NewsItem from "./NewsItem"

const NewsList = ({ articles }) => {
    console.log(articles)
    return (
        <div>
            {articles.map((article, index) => (
                <NewsItem key={index} article={article}/>

            ))}
        </div>
    )
}

export default NewsList