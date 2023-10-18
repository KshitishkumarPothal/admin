import React from 'react'
import {RiAlignJustify} from 'react-icons/ri'
import { BsSearch, BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle} from 'react-icons/bs'




const Header = ({openSidebar}) => {
  return (
    <header className='header'>
      <div className="menu-icon">
        <RiAlignJustify className='icon' onClick={openSidebar}/>
      </div>
      <div className="headert-left">
        <BsSearch className='icon'/>
      


      </div>
      <div className="header-right">
      <BsFillBellFill className='icon'/>
      <BsFillEnvelopeFill className='icon'/>
      <BsPersonCircle className='icon'/>
        

      </div>
      
      
    </header>
  )
}

export default Header
