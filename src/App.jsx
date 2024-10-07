import { useEffect, useState } from 'react'
import Switch from "./components/Switch"
import Header from './components/Header'
import NewsList from './components/NewsList'
import getTopHeadLines from './services/newsService'


function App() {
  const [articles, setArticles] = useState([])
  const [value, setValue] = useState(false);

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
      <Switch
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
      <NewsList
        articles={articles}
      />
    </>
  )
}

export default App
