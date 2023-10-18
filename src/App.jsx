import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Product from './Product'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const openSidebar =() =>{
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header openSidebar={openSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle}  openSidebar={openSidebar} />
      <Home/>
      {/* <Product/> */}

     

    </div>
  )
}

export default App
