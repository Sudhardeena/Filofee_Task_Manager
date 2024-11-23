import React, { useContext, useState } from 'react'
import './index.css'
import { v4 as uuidv4 } from 'uuid'
import TaskContext from '../../context/TaskContext'

const statusList = ['Pending','Completed']

const TaskForm = ({initialDetails,close}) => {
    const[title,setTitle] = useState('')
    const[description,setDescription] = useState('')
    const[status,setStatus] = useState(statusList[0])
    const[dueDate,setDueDate] = useState('')
    const[showError,setShowError] = useState(false)

    const taskContext = useContext(TaskContext)
    const {addTask,updateTask} = taskContext

    const onAdd = () => {
        const taskDetails = {
            taskId: uuidv4(),
            title,
            description,
            status,
            dueDate
        }
        if(title!=='' && description!=='' && dueDate!==''){
            addTask(taskDetails)
            setShowError(false)
            close()
        }
        setShowError(true) 
    }

    const onUpdate = () => {
        const taskDetails = {
            taskId:initialDetails.taskId,
            title,
            description,
            status,
            dueDate
        }
        updateTask(taskDetails)
        close()
    }

    useState(()=>{
        if(initialDetails){
            setTitle(initialDetails.title)
            setDescription(initialDetails.description)
            setStatus(initialDetails.status)
            setDueDate(initialDetails.dueDate)
        }
    },[initialDetails])

    const handleChangeDescription = (e) => {
        if((e.target.value.length)<100){
            setDescription(e.target.value)
        }
    }

  return (
    <form className='task-form'>
        <div className="input-feilds">
            <label
              className="input-feilds-labels"
              htmlFor="titleInput"
            >
              Title
            </label>
            <br/>
            <input
                id="titleInput"
                className="input-feilds-inputs"
                type="text"
                placeholder="Enter Title"
                value={title}
                name="title"
                onChange={(e)=>setTitle(e.target.value)}
              />
          </div>
          <div className="input-feilds">
            <label
              className="input-feilds-labels"
              htmlFor="descInput"
            >
              Description
            </label>
            <br/>
            <textarea
                id="descInput"
                className="input-feilds-inputs description"
                placeholder="Enter Description"
                value={description}
                name="description"
                onChange={handleChangeDescription}
              />
          </div>
          <div className="input-feilds">
            <label
              className="input-feilds-labels"
              htmlFor="dateSelectionInput"
            >
              Due Date
            </label>
            <br/>
            <input
                id="dateSelectionInput"
                className="input-feilds-inputs"
                type="date"
                placeholder="dd/mm/yyyy"
                value={dueDate}
                name="dueDate"
                onChange={(e)=>setDueDate(e.target.value)}
              />
          </div>
          {initialDetails && <div className="input-feilds">
            <label
              className="input-feilds-labels"
              htmlFor="statusSelectInput"
            >
              Status
            </label>
            <br/>
            <select
                id="dateSelectionInput"
                className="input-feilds-inputs"
                value={status}
                name="status"
                onChange={(e)=>setStatus(e.target.value)}
              >
                {statusList.map(each=><option key={uuidv4()} value={each}>{each}</option>)}
              </select>
          </div>}
          {showError && <p className='error-mssg'>please fill all the fields</p>}
          <div className='btn-div'>
            <button type='button' className='btn light' onClick={()=>{
                setShowError(false)
                close()
            }}>Cancel</button>
            {initialDetails?
            <button type='button' className='btn dark' onClick={onUpdate}>Update</button>
            :
            <button type='button' className='btn dark' onClick={onAdd}>Add</button>
            }
          </div>
    </form>
  )
}

export default TaskForm