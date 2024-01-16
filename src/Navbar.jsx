import React from 'react'
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from './context'
import NavLinks from './NavLinks';

const Navbar = () => {
    const { OpenSidebar, setPageId } = useGlobalContext();
    const handleMenu = (e) => {
        if (!e.target.classList.contains('nav-link')) {
            setPageId(null)
        }
    }
    return (
        <nav onMouseOver={handleMenu}>
            <div className='nav-center'>
                <h2 className='logo'>Strabi</h2>
                <button type='button' onClick={OpenSidebar} className='toggle-btn '><FaBars /> </button>
                <NavLinks />
            </div>
        </nav>
    )
}

export default Navbar
