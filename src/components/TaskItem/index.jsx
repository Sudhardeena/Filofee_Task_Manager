import React, { useContext } from 'react'
import EditTaskPopup from '../EditTaskPopup';
import TaskContext from '../../context/TaskContext';
import DeleteTaskPopup from '../DeleteTaskPopup';
import './index.css'

const TaskItem = props => {
    const {taskItemDetails} = props
    const {title,description,dueDate,status,taskId} = taskItemDetails
    const statusColorClassName = status==='Pending' ? 'pending' : 'completed'

    const taskContext = useContext(TaskContext)
    const {deleteTask} = taskContext
  return (
    <li className='task-list-item'>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description.slice(0,100)}...</p>
        <div className='status-edit-delete-container'>
            <span className={`status-text ${statusColorClassName}`}>{status}</span>
            <span className='due-date-text'>{dueDate}</span>
            <EditTaskPopup initialDetails={taskItemDetails} />
            <DeleteTaskPopup taskId={taskId}/>
        </div>
    </li>
  )
}

export default TaskItem