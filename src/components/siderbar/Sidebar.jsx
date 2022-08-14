import './sidebar.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(() => {
        const fetchCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        fetchCats();
    },[])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, asperiores ullam voluptatem sunt necessitatibus enim accusantium dicta </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className='link'>
                        <li className="sidebarListItem">{c.name}</li>
                    
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar