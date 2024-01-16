import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId)
  const handleOnMouseLeave = (event)=>{
    setPageId(null)
  }

  return (
    <div className={pageId?'submenu show-submenu':'submenu'} onMouseLeave={handleOnMouseLeave}>
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" style={{gridTemplateColumns: currentPage?.links?.length>3?'1fr 1fr':'1fr'}}>
        {currentPage?.links?.map((link)=>{
          return <a href={link.url} key={link.id}>{link.icon}{link.label}</a>
        })}

      </div>


    </div>
  )
}

export default Submenu
