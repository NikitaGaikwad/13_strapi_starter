import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { isSidebarOpen, CloseSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen?'sidebar show-sidebar':'sidebar'}>
      <div className="sidebar-container">
        <button type='button' onClick={CloseSidebar} className='close-btn'> <FaTimes /> </button>
        <div className='sidebar-links'>
          {sublinks.map((item)=>{
            const {pageId, page, links}=item
            return <article key={pageId}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link)=>{
                  return <a href={link.url} key={link.id}>{link.icon} {link.label}</a>
                })}

              </div>
            </article>
          })}
        </div>

      </div>
    </aside>
  )
}

export default Sidebar
