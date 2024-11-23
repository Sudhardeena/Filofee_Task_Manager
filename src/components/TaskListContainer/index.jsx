import React, { useContext } from 'react'
import './index.css'
import TaskContext from '../../context/TaskContext'
import TaskItem from '../TaskItem'

const TaskListContainer = () => {
    const taskContext = useContext(TaskContext)
    const {taskList,activeStatusTab} = taskContext
    const filterdTaskList = taskList.filter(each=>(each.status===activeStatusTab || activeStatusTab==='All'))
  
  return (
    <ul className='task-list'>
        {
            filterdTaskList>0?
            filterdTaskList.map(each=>
                <TaskItem key={each.taskId} taskItemDetails={each}/>
            ):
            <img className="empty-img" src="https://res.cloudinary.com/da9omg4ab/image/upload/v1731616509/empty-concept-illustration_114360-1188_xhayir.webp" />
        }
    </ul>
  )
}

export default TaskListContainer