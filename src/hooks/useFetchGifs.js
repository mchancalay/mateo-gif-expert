import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

const useFetchGifs = (category) => {

  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getInfo = async () => {
    getGifs(category).then(resp => {
      setGifs(resp)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getInfo()
  },[])

  return {
    gifs,
    isLoading
  }
}

export default useFetchGifs