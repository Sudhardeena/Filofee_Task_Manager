import React, { useContext } from 'react'
import './index.css'
import TaskContext from '../../context/TaskContext'
import TaskItem from '../TaskItem'
import { v4 as uuidv4 } from 'uuid'

const TaskListContainer = () => {
    const taskContext = useContext(TaskContext)
    const {taskList} = taskContext

  return (
    <ul className='task-list'>
        {taskList.map(each=>
            <TaskItem key={uuidv4()} taskItemDetails={each}/>
        )}
    </ul>
  )
}

export default TaskListContainer