import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { Divide as Hamburger } from 'hamburger-react'
import "../../css/main.css"

function Navbar() {
    const [ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => { setSidebar(!sidebar) };
    return (
        <>
            <div className="navbar">
                <Link to ="#" className="menu-bars">
                    <Hamburger 
                    toggled={sidebar} 
                    toggle={setSidebar} 
                    duration={0.8}
                    />
                </Link>
                <Link to ="/" className="home-name">
                    andrew bith
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle" onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className="strikethrough">{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

