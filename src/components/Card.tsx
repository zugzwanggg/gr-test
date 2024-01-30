import {useState} from 'react';
import { useMyContext } from '../Context/Context';

export interface ICard {
  url:string
}



const Card = ({url}:ICard) => {

  const [hover,setHover] = useState<boolean>()
  const [favorite,setFavorite] = useState<boolean>(false)

  const {addToFavorites,removeFromFavorites,favorites} = useMyContext()
  
  const handleAddFavorite = () => {
    setFavorite(true)
    addToFavorites(url)
  }

  const handleRemoveFavorite = () => {
    setFavorite(false)
    removeFromFavorites(url)
  }


  return (
    <div onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} className='card' style={{backgroundImage: `url(${url})`}}>
      {
        hover 
        ?
          favorite
          ?
            <img onClick={()=>handleRemoveFavorite()} className='favorite-icon' src='./img/favorite.svg'/>
          :
            <img onClick={()=>handleAddFavorite()} className='favorite-icon' src='./img/favorite_border.svg'/>
        :
        ""
      }
      {favorites.some(cat=>cat.url == url) && <img onClick={()=>handleRemoveFavorite()} className='favorite-icon' src='./img/favorite.svg'/>}
     
    </div>
  )
}

export default Card