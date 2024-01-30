import {createContext, ReactNode, useState, useContext} from 'react'
import { ICard } from '../components/Card'


type defaultValue = {
  favorites: ICard[],
  addToFavorites: (url:string) => void,
  removeFromFavorites: (url:string) => void
}

const favoritesContext = createContext({} as defaultValue)


type FavoritesContetxProps = {
  children: ReactNode
}

export const useMyContext = () => {
  return useContext(favoritesContext)
}

export const ContextProvider = ({children}:FavoritesContetxProps) => {

  const [favorites,setFavorites] = useState<ICard[]>(JSON.parse(localStorage.getItem("favorites")||"[]"))

  

  const addToFavorites = (url:string) => {
    setFavorites((prev):ICard[] => [...prev,{url}])
  }

  const removeFromFavorites = (url:string) => {
    setFavorites(currentCats=> {
      return currentCats.filter(cat=> cat.url !== url)
    })
  }

  localStorage.setItem("favorites", JSON.stringify(favorites))

  

  return (
    <favoritesContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
      {children}
    </favoritesContext.Provider>
  )
}