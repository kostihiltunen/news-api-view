import { useEffect, useState } from 'react'
import Header from './components/Header'
import NewsList from './components/NewsList'
import getTopHeadLines from './services/newsService'


function App() {
  const [articles, setArticles] = useState([])
 
  useEffect(() => {
    getTopHeadLines()
      .then(initialArticles => {
        setArticles(initialArticles)
      })
  }, [])
    console.log(articles)

  return (
    <>
      <Header />
      <NewsList 
        articles={articles} 
      />
    </>
  )
}

export default App
