import { useState } from 'react'
import './App.css'
import Slidebarleft from './Slidebarleft'
import Slidebarright from './Slidebarright'
import Home from './Home'
import Header from './Header'

function App() {
  

  return (
  <div className='grid-container'> 
  
  <Slidebarleft/>
  <Header/>
  <Home/>
  <Header/>
  <Slidebarright/>
  

  </div>
  )
}

export default App
