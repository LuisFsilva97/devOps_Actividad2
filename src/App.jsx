import { useEffect, useState } from "react"
import { BackgroundSection } from "./components/background"
import { Header } from "./components/header"
import { api } from './api'
import { CharacterList } from './components/character-list'
import { SocialLinks } from "./components/social"


function App() {

  const [data, setData] = useState([])

  const fetchData = async (url) => {
    try {
      setData(await api(url))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()

  }, [])

  const fetchNextPage = async (url) => {
    fetchData(url)
  }

  const fetchPreviousPage = async (url) => {
    fetchData(url)
  }

  return (
    <>
      <Header />
      <BackgroundSection />
      <CharacterList data={data}
        fetchNextPage={(url) => fetchNextPage(url)}
        fetchPreviousPage={(url) => fetchPreviousPage(url)}
      />
      <SocialLinks />
    </>
  )

}

export default App
