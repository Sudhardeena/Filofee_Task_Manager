import React from 'react'
import { MdDeleteOutline,MdEdit} from "react-icons/md";
import './index.css'

const TaskItem = props => {
    const {taskItemDetails} = props
    const {title,description,due_date,status} = taskItemDetails
    const statusColorClassName = status==='Pending' ? 'pending' : 'completed'
  return (
    <li className='task-list-item'>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description.slice(0,100)}...</p>
        <div className='status-edit-delete-container'>
            <span className={`status-text ${statusColorClassName}`}>{status}</span>
            <span className='due-date-text'>{due_date}</span>
            <MdEdit className='icon'/>
            <MdDeleteOutline className="icon"/>
        </div>
    </li>
  )
}

export default TaskItem