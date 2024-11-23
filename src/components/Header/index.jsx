import React from 'react'
import AddTaskPopup from '../AddTaskPopup'

import './index.css'

const Header = () => {
  return (
    <div className='header-contaner'>
        <h1 className='task-Header'>Task Manager</h1>
        <AddTaskPopup/>
    </div>
  )
}

export default Header