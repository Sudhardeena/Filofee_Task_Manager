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
        {filterdTaskList.map(each=>
            <TaskItem key={each.taskId} taskItemDetails={each}/>
        )}
    </ul>
  )
}

export default TaskListContainer