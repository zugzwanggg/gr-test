import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"

export interface ICats {
  url: string
  id: string
}


const AllCats = () => {
  const [cats,setCats] = useState<ICats[]>([])
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [page,setPage] = useState<number>(2)
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
  }, [page])

  useEffect(()=> {
    document.addEventListener("scroll", (e)=>scrollHandler(e))

    return function () {
      document.removeEventListener("scroll", (e)=>scrollHandler(e))
    }
  },[])

  const scrollHandler = (e:Event) => {
    if(e.target instanceof Document && e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100) {
      setIsLoading(true)
      
      setPage(prev=>prev+1)
    } else {
      setIsLoading(false)
    }
  }




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
      {isLoading && <h3>... загружаем еще котиков ...</h3>}
    </div>
  )
}

export default AllCats