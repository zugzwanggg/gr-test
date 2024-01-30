import {Routes,Route} from 'react-router-dom'
import "./App.css"
import Layout from './components/Layout'
import AllCats from './pages/AllCats'
import FavoriteCats from './pages/FavoriteCats'

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" index element={<AllCats/>}/>
        <Route path="/favorite" element={<FavoriteCats/>} />
      </Route>
    </Routes>
  )
}

export default App
