import { useEffect, useState } from 'react'
import Switch from "./components/Switch"
import Header from './components/Header'
import NewsList from './components/NewsList'
import getTopHeadLines from './services/newsService'



function App() {
  const [articles, setArticles] = useState([])
  const [toggleValue, setValue] = useState(false);


  useEffect(() => {
    getTopHeadLines()
      .then(initialArticles => {
        setArticles(initialArticles)
      })
  }, [])
  console.log(articles)

  return (
    <div className="app">
      <Header />
      <Switch
        isOn={toggleValue}
        onColor="#06D6A0"
        handleToggle={() => setValue(!toggleValue)}
      />
      <NewsList
        articles={articles}
      />
    </div>
  )
}

export default App
