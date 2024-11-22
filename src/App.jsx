import React, { useState } from 'react'
import TaskContext from './context/TaskContext'
import TaskListContainer from './components/TaskListContainer'
import Header from './components/Header'

import './App.css'

const dummyTasks = [
  {
    "title": "Submit Project Report",
    "description": "Finalize and submit the project report to the team lead. Ensure all data is accurate and formatted correctly.",
    "due_date": "2024-11-25",
    "status": "Pending"
  },
  {
    "title": "Team Meeting Preparation",
    "description": "Prepare the agenda and supporting materials for the team meeting. Ensure all relevant documents are updated.",
    "due_date": "2024-11-26",
    "status": "Completed"
  },
  {
    "title": "Client Feedback Review",
    "description": "Review feedback from the client on the recent proposal and create a response strategy.",
    "due_date": "2024-11-27",
    "status": "Pending"
  },
  {
    "title": "Update Website Content",
    "description": "Update the website with the latest blog post and new product images.",
    "due_date": "2024-11-28",
    "status": "Pending"
  },
  {
    "title": "Employee Training Session",
    "description": "Organize and conduct a training session for new employees on company tools and processes.",
    "due_date": "2024-11-30",
    "status": "Completed"
  }
]


const App = () => {
  const [taskList,setTaskList] = useState(dummyTasks)

  return (
    <div className='page-container'>
      <TaskContext.Provider
        value={
          {taskList}
          }
      >
        <div className='body-container'>
          <Header/>
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