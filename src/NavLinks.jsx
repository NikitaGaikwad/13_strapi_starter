import React from 'react'
import sublinks from "./data"
import { useGlobalContext } from './context'

const NavLinks = () => {
    const { pageId, setPageId } = useGlobalContext();
    return (
        <div className='nav-links '>
            {sublinks.map((link) => {
                return <button className='nav-link' key={link.pageId} onMouseEnter={()=>setPageId(link.pageId)}>{link.page}</button>
            })}
        </div>
    )
}

export default NavLinks
