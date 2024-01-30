import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"

export interface ICats {
  url: string
  id: string
}


const AllCats = () => {
  const [cats,setCats] = useState<ICats[]>([])
  const [isLoading,setIsLoading] = useState<boolean>(true)
  const [page,setPage] = useState<number>(1)
  const key = "live_AZ5ogAkZtWry6Af6W1p9FM1cA2UWuvKI0ObRbQe5w488FPEYe2y06z55OgJqV3PO"
  
  const getCats = () => {
    setIsLoading(true)
    axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${key}&limit=15&page=${page}`)
    .then(res=>setCats(prev=>[...prev,...res.data]))
    .catch(err=>console.log(err))
    .finally(()=>{
      setIsLoading(false)
    })
  }

  useEffect(()=>{
    getCats()
  },[page])

  const scrollHandler = () => {

    if (window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight) {
      setPage(prev=>prev+1)
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", scrollHandler)

    return function () {
      window.removeEventListener("scroll", scrollHandler)
    }
  },[])
    




  return (
    <div className="container">
      <ul className="grid">
        {cats.map(cat=> {
          return (
          <li key={cat.id}> 
            <Card url={cat.url}/> 
          </li>)
        })}
      </ul>
      {isLoading ? <h3>... загружаем {page==1 ? "" : "еще"} котиков ...</h3> : ""}
    </div>
  )
}

export default AllCats