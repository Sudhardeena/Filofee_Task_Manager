import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import './index.css'

const Header = () => {
  return (
    <div className='header-contaner'>
        <h1 className='task-Header'>Task Manager</h1>
        <AiOutlinePlus className='plus-icon'/>
    </div>
  )
}

export default Header