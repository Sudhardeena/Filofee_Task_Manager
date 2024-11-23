import React from 'react'
import TaskForm from '../TaskForm';
import Popup from 'reactjs-popup';
import { AiOutlinePlus } from "react-icons/ai";
import 'reactjs-popup/dist/index.css';
import './index.css'


const AddTaskPopup = () => {
  return (
    <Popup
          modal
          trigger={
            <button type="button" className="trigger-btn">
              <AiOutlinePlus />
            </button>
          }
          overlayStyle={{ background: 'transparent' }}
          contentStyle={{ background: 'transparent', border: 'none', padding: '20px' }}
        >
          {close => (
            <TaskForm close={close}/>
          )}
        </Popup>
  )
}

export default AddTaskPopup