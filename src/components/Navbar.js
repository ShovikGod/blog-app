import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { SidebarData } from './SidebarData';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className="navbar sticky-top">
                <Link to="#" className='menu-bars'>
                    <AiOutlineMenu onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className='nav-text' onClick={showSidebar}>
                                <Link to={item.path}><span>{item.title}</span></Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
