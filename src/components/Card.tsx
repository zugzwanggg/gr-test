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
            <svg onClick={()=>handleRemoveFavorite()} className='favorite-icon' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="favorite" clip-path="url(#clip0_1_2180)">
              <path id="Vector" d="M24 42.7L21.1 40.06C10.8 30.72 4 24.56 4 17C4 10.84 8.84 6 15 6C18.48 6 21.82 7.62 24 10.18C26.18 7.62 29.52 6 33 6C39.16 6 44 10.84 44 17C44 24.56 37.2 30.72 26.9 40.08L24 42.7Z" fill="#F24E1E"/>
              </g>
              <defs>
              <clipPath id="clip0_1_2180">
              <rect width="48" height="48" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          
          :
          <svg onClick={()=>handleAddFavorite()} className='favorite-icon' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="favorite_border" clip-path="url(#clip0_1_2165)">
            <path id="Vector" d="M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6ZM24.2 37.1L24 37.3L23.8 37.1C14.28 28.48 8 22.78 8 17C8 13 11 10 15 10C18.08 10 21.08 11.98 22.14 14.72H25.88C26.92 11.98 29.92 10 33 10C37 10 40 13 40 17C40 22.78 33.72 28.48 24.2 37.1Z" fill="#F24E1E"/>
            </g>
            <defs>
            <clipPath id="clip0_1_2165">
            <rect width="48" height="48" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          
            
        :
        ""
      }
      {favorites.some(cat=>cat.url == url) 
      && 
      <svg onClick={()=>handleRemoveFavorite()} className='favorite-icon' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="favorite" clip-path="url(#clip0_1_2180)">
        <path id="Vector" d="M24 42.7L21.1 40.06C10.8 30.72 4 24.56 4 17C4 10.84 8.84 6 15 6C18.48 6 21.82 7.62 24 10.18C26.18 7.62 29.52 6 33 6C39.16 6 44 10.84 44 17C44 24.56 37.2 30.72 26.9 40.08L24 42.7Z" fill="#F24E1E"/>
        </g>
        <defs>
        <clipPath id="clip0_1_2180">
        <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
      </svg>}
     
    </div>
  )
}

export default Card