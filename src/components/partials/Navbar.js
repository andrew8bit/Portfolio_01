import React, {useState} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation, Link as Anchor} from "react-router-dom";
import { SidebarData } from '../data/SidebarData';
import { Divide as Hamburger } from 'hamburger-react'
import "../../css/main.css"

function Navbar() {

    const location = useLocation();
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const [ sidebar, setSidebar ] = useState(false);
    const showSidebar = () => { setSidebar(!sidebar) };

    return (
        <>
            <div className="nav">
            <div className="navbar">
            
            { location.pathname !== "/profile" ? 
                <div className="menu-bars">
                    <Hamburger
                    toggled={sidebar} 
                    toggle={setSidebar} 
                    duration={.5}
                    distance="sm"
                    size={24}
                    />
                    {/* <h3>{window.location.pathname}</h3> */}
                </div>
            : <div></div>
            
        }
                <Anchor to="/home" onClick={scrollToTop} className="home-name strike-white ">
                    Andrew Bith
                </Anchor>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle" onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            if(item.path === '/profile' || location.pathname === "/profile") {
                                return (
                                    <li key={index} className={item.cName}>
                                    <Anchor to={item.pathHome} onClick={scrollToTop}>
                                        <span className="strike-white ">{item.title}</span>
                                    </Anchor>
                                    </li>
                                )
                            }
                            else if (item.path !== '/profile' && location.pathname !== "/profile") {
                                return (
                                <>
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} spy={true} smooth={true} onClick={showSidebar} offset={-60}>
                                        <span className="strike-white ">{item.title}</span>
                                    </Link>
                                </li>
                                </>
                                )
                            }
                            else {
                                return ( <> </>)
                            }
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

