import React from 'react'
import TaskForm from '../TaskForm';
import Popup from 'reactjs-popup';
import { MdEdit} from "react-icons/md";
import 'reactjs-popup/dist/index.css';
import './index.css'


const EditTaskPopup = ({initialDetails}) => {
  return (
    <Popup
          modal
          trigger={
            <button type="button" className="trigger-btn">
              <MdEdit/>
            </button>
          }
          overlayStyle={{ background: 'transparent' }}
          contentStyle={{ background: 'transparent', border: 'none', padding: '20px', width:'100%' }}
        >
          {close => (
            <TaskForm close={close} initialDetails={initialDetails}/>
          )}
        </Popup>
  )
}

export default EditTaskPopup