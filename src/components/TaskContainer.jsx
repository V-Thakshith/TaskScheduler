import { Button } from "react-bootstrap"
import { CiAlarmOn } from "react-icons/ci";
import {Link,useNavigate} from 'react-router-dom'
import { useGlobleContext } from "../context";
import {IoMdClose} from "react-icons/io"
import { CiEdit } from "react-icons/ci";
import React,{useState} from "react";

const TaskContainer=()=>{
    const navigate=useNavigate()
    const {sortDate,setSortDate}=useState('')
    const {tasks,deleteFromTasks,updateFromTasks}=useGlobleContext()

    const updateFromTasksInComponent=(eventName)=>{
        navigate("/UpdateTask")
        updateFromTasks(eventName)
    }

    return(
        <div className="container">
                <div className='box'>
                <h1>Task container  {<CiAlarmOn/>}</h1>
                <input type="date" value={sortDate} className="sort-date-input" required></input>
                <div className="card-collection">
                {(tasks!==[])? tasks.map((task)=>{return <><div className="card bg-danger"><div className="two-btn-pos"><div className="close-btn-pos" value={task.eventName} onClick={()=>{console.log(task.eventName); updateFromTasksInComponent(task.eventName)}}><CiEdit size={40}/></div>
                <div className="close-btn-pos" value={task.eventName} onClick={()=>{console.log(task.eventName); deleteFromTasks(task.eventName)}}><IoMdClose size={40}/></div></div>
                                            <h1 className="card-title">{task.eventName}</h1>
                                            <h3 className="card-subtitle">{task.eventDate}</h3>
                                            <h4 className="card-text">{task.eventTime}</h4></div></>}):<h1 className="card-title">No Tasks😁😁</h1>}
                </div>
                <br></br>
                <Link to="/CreateTask"><Button className="add-tasks-btn" variant="danger">Add Tasks</Button></Link>
                </div>
            </div>
    )
}
export default TaskContainer