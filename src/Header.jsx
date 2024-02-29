import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
from 'react-icons/bs'
function Header() {
  return (
    <header className='header'>
      
      <div className='header-left'>
        <BsSearch className='icon' />
        
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        
      </div>
    </header>
  )
}

export default Header
