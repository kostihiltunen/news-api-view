import axios from 'axios'

const API_KEY = ''
const BASE_URL = 'https://newsapi.org/v2'

const getTopHeadLines = async () => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
        country: 'us',
        apiKey: API_KEY,
    },
  })
  return response.data.articles
}

export default getTopHeadLines