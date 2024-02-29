import React from 'react'
import{Bscart3} from 'react-icons/bs'


function Slidebarleft() {
  return (
    <aside>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <Bscart className='icon'/> SHOP
        </div>
        <span className='icon close_icon'></span>
      </div>
      <ul className='sidbar-list'>
        <li className='sidbar-list-item'>
          <a href=''>
            <Bscart3 className='icon'/>Notification
          </a>

          <a href=''>
            <Bscart3 className='icon'/>grad
            
          </a>

          <a href=''>
            <Bscart3 className='icon'/>Setting
            
          </a>

          <a href=''>
            <Bscart3 className='icon'/>file
          </a>

        </li>
      </ul>
    </aside>
  )
}

export default Slidebarleft
