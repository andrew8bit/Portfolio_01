import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../data/SidebarData';
import { Divide as Hamburger } from 'hamburger-react'
import "../../css/main.css"

function Navbar() {
    const [ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => { setSidebar(!sidebar) };
    return (
        <>
            <div className="nav">
            <div className="navbar">
                <div className="menu-bars">
                    <Hamburger
                    toggled={sidebar} 
                    toggle={setSidebar} 
                    duration={.5}
                    distance="sm"
                    size={24}
                    />
                    <h3>{window.location.pathname}</h3>
                </div>
                <Link to ="/" className="home-name strike-white ">
                    Andrew Bith
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle" onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span className="strike-white ">{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </li>
                </ul>
            </nav>
            </div>
            <div className="nav-spacer">
            </div>
           
        </>
    )
}

export default Navbar

