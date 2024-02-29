import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebarleft from './Slidebarleft'
import Slidebarright from './Slidebarright'
import Home from './Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebarleft />
      <Home />
      <Slidebarright/>
    </div>
  )
}

export default App