import React, { useContext } from 'react'
import {v4 as uuidv4} from 'uuid'
import TaskContext from '../../context/TaskContext'
import './index.css'

const statusList = ["All","Pending","Completed"]

const StatusTabIndicator = props => {

  const taskContext = useContext(TaskContext)
  const {activeStatusTab,setActiveStatusTab} = taskContext

  return (
    <ul className="active-tast-indicator-list">
      {statusList.map(each => {
        const activeStatsClassName =
          each === activeStatusTab ? 'active-task-item' : ''
        return (
          <li
            className={`task-indicator-item ${activeStatsClassName}`}
            key={uuidv4()}
            onClick={()=>setActiveStatusTab(each)}
          >{each}</li>
        )
      })}
    </ul>
  )
}

export default StatusTabIndicator 