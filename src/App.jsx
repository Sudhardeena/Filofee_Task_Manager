import React, { useState } from 'react'
import TaskContext from './context/TaskContext'
import TaskListContainer from './components/TaskListContainer'
import Header from './components/Header'
import StatusTabIndicator from './components/StatusTabIndicator'

import './App.css'

const dummyTasks = [
  {
    "taskId":1,
    "title": "Submit Project Report",
    "description": "Finalize and submit the project report to the team lead. Ensure all data is accurate and formatted correctly.",
    "dueDate": "2024-11-25",
    "status": "Pending"
  },
  {
    "taskId":2,
    "title": "Team Meeting Preparation",
    "description": "Prepare the agenda and supporting materials for the team meeting. Ensure all relevant documents are updated.",
    "dueDate": "2024-11-26",
    "status": "Completed"
  },
  {
    "taskId":3,
    "title": "Client Feedback Review",
    "description": "Review feedback from the client on the recent proposal and create a response strategy.",
    "dueDate": "2024-11-27",
    "status": "Pending"
  },
  {
    "taskId":4,
    "title": "Update Website Content",
    "description": "Update the website with the latest blog post and new product images.",
    "dueDate": "2024-11-28",
    "status": "Pending"
  },
  {
    "taskId":5,
    "title": "Employee Training Session",
    "description": "Organize and conduct a training session for new employees on company tools and processes.",
    "dueDate": "2024-11-30",
    "status": "Completed"
  }
]


const App = () => {
  const persistedTaskList = localStorage.getItem("taskList")

  const [taskList,setTaskList] = useState(()=>{
    return persistedTaskList ? JSON.parse(persistedTaskList) : []
  })
  const [activeStatusTab,setActiveStatusTab] = useState('All')

  const addTask = taskDetails => setTaskList(prevTaskList=>[...prevTaskList,taskDetails])

  const updateTask = taskDetails => setTaskList(prevTaskList=>prevTaskList.map(each=>{
    if(each.taskId===taskDetails.taskId){
      return taskDetails
    }
    return each
  }))

  const deleteTask = taskId => setTaskList(prevTaskList=>prevTaskList.filter(each=>each.taskId!==taskId))

  localStorage.setItem('taskList',JSON.stringify(taskList))

  return (
    <div className='page-container'>
      <TaskContext.Provider
        value={
          {
            taskList,
            activeStatusTab,
            setActiveStatusTab,
            addTask,
            updateTask,
            deleteTask
            }
          }
      >
        <div className='body-container'>
          <Header/>
          <StatusTabIndicator/>
          <div className='task-or-empty-view'>
          {taskList.length===0 ? <>
          <img className="empty-img" src="https://res.cloudinary.com/da9omg4ab/image/upload/v1731616509/empty-concept-illustration_114360-1188_xhayir.webp" />
          <p className='add-task-text'>Add some task</p>
          </>:
          <TaskListContainer/>}
          </div>
        </div>
      </TaskContext.Provider>
    </div>
  )
}

export default App