import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='container'>
        <ul className='nav-list'>
          <li>
            <NavLink className={({isActive})=> isActive ? "active" : ""} to="/">Все котики</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "active" : ""} to="/favorite">Любимые котики</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header