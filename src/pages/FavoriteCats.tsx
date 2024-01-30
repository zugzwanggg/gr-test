import { useMyContext } from "../Context/Context"
import Card from "../components/Card";

const FavoriteCats = () => {

  const {favorites} = useMyContext();
  console.log(favorites);
  
  return (
    <div className="container">
      <ul className="grid">
        {
          favorites.length > 0
          ?
          favorites.map(cat=> {
            return <Card key={cat.url} url={cat.url}/>
          })
          :
          <h3>Пусто</h3>
        }
      </ul>
    </div>
  )
}

export default FavoriteCats