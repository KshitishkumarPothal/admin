import React from 'react'

import { TbHexagonNumber0, TbHexagonLetterX, TbMessageQuestion } from "react-icons/tb";
import {PiKeyReturnLight} from 'react-icons/pi'
import {BsBox} from 'react-icons/bs'
import {RiAccountBoxFill} from 'react-icons/ri'
import {GiWallet} from 'react-icons/gi'
import {LuBadgePercent} from 'react-icons/lu'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'



function Sidebar ({openSidebarToggle, openSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ?'sidebar-responsive':""}>
      <div className="sidebar-tittle">
        <div className="sidebar-brand">
          <TbHexagonNumber0 className='icon_header'/>Dashboard
        </div>
        <span className='icon close-icon'>
          <TbHexagonLetterX className='icon_header' onClick={openSidebar}/>
        </span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <PiKeyReturnLight/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <div>
            <a href="">
               <BsBox/> Product 
            </a>
          </div>
          <div><MdOutlineKeyboardArrowRight/></div>
          
        </li>
        <li className='sidebar-list-item'>
          <div>
            <a href="">
              <RiAccountBoxFill/> Customer
            </a>
          </div>
          <div><MdOutlineKeyboardArrowRight/></div>
          
        </li>
        <li className='sidebar-list-item'>
          <div>
          <a href="">
            <GiWallet/> Income
          </a>
          </div>
          <div><MdOutlineKeyboardArrowRight/></div>
        </li>
        <li className='sidebar-list-item'>
          <div>
            <a href="">
               <LuBadgePercent/> Promote
            </a>
          </div>
          <div><MdOutlineKeyboardArrowRight/></div>
        </li>
        <li className='sidebar-list-item'>
        <div>
        <a href="">
            <TbMessageQuestion/> Help
          </a>
          </div>
          <div><MdOutlineKeyboardArrowRight/></div>
          
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
