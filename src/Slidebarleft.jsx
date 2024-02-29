import React from 'react'
import{Bscart3 , BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'


function Slidebarleft({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <Bscart className='icon_header'/> SHOP
        </div>
        <span className='icon close_icon'></span>
      </div>
      <ul className='sidbar-list'>
        <li className='sidbar-list-item'>
          <a href=''>
            <Bscart3 className='icon'/>Notification
          </a>
          </li>

          <li className='sidbar-list-item'>
            <a href=''>
              <Bscart3 className='icon'/>grad
            
            </a>
          </li>
          <li className='sidbar-list-item'>
            <a href=''>
              <Bscart3 className='icon'/>Setting
            
            </a>
          </li>
          <li className='sidbar-list-item'>
            <a href=''>
              <Bscart3 className='icon'/>file
            </a>

        </li>
      </ul>
    </aside>
  )
}

export default Slidebarleft
