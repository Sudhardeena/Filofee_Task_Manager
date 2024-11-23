import React, { useContext } from 'react'
import Popup from 'reactjs-popup';
import { MdDeleteOutline} from "react-icons/md";
import 'reactjs-popup/dist/index.css';
import './index.css'
import TaskContext from '../../context/TaskContext';


const DeleteTaskPopup = ({taskId}) => {
    const taskContext = useContext(TaskContext)
    const {deleteTask} = taskContext
    console.log(taskId)

  return (
    <Popup
          className='popup'
          modal
          trigger={
            <button type="button" className="trigger-btn">
                <MdDeleteOutline />
            </button>
          }
          overlayStyle={{ background: 'transparent' }}
          contentStyle={{ background: 'transparent', border: 'none', padding: '20px', width:'100%' }}
        >
          {close => (
            <div className='delete-confirmation-container'>
            <h1 className='confirmation-heading'>Please Confirm to delete task</h1>
                <div>
                    <button className='btn light' onClick={close}>Cancel</button>
                    <button className='btn dark' onClick={()=>{
                        deleteTask(taskId)
                        close()
                    }}>Confirm</button>
                </div>
            </div>
          )}
        </Popup>
  )
}

export default DeleteTaskPopup