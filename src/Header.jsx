import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
from 'react-icons/bs'
function Header() {
  return (
    <header className='header'>
      <ul>
        <li>ALERTS</li>
      </ul>
      <div className='header-left'>
        <BsSearch className='icon' />
        
      </div>
      <div className='header-left'>
        <BsFillBellFill className='icon' />
        
      </div>
    </header>
  )
}




export default Header
