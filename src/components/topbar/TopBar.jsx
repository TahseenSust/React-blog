import { Link } from 'react-router-dom'
import './topbar.css'

function TopBar() {

  const user = false

  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook-square"></i>
      <i className="topIcon fa-brands fa-twitter-square"></i>
      <i className="topIcon fa-brands fa-pinterest-square"></i>
      <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'>
            <Link className='link' to="/">HOME</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/">ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/">CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/write">WRITE</Link>
          </li>
          <li className='topListItem'>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className='topImg' src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to="/login">LOGIN</Link>              
              </li>
              <li className='topListItem'>
                <Link className='link' to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar