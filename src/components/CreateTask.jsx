import { useState,useEffect } from "react";
import { Button } from "react-bootstrap"
import { TiArrowBackOutline } from "react-icons/ti";
import { Link,useNavigate } from "react-router-dom";
import { useGlobleContext } from "../context";

const CreateTask=()=>{
    const navigate=useNavigate()
    const {addToTasks}=useGlobleContext()
    const [eventName,setEventName]=useState('')
    const [eventDate,setEventDate]=useState('')
    const [eventTime,setEventTime]=useState('')

    const handleNameChange=(e)=>{ 
        setEventName(e.target.value)
    }

    const handleDateChange=(e)=>{ 
        setEventDate(e.target.value)
    }

    const handleTimeChange=(e)=>{ 
        setEventTime(e.target.value)
    }

    const handleSubmit=()=>{
        addToTasks(eventName,eventDate,eventTime)
        navigate("/")
    }

    return(
        <div className="container">
                <form onSubmit={handleSubmit} className="box">
                <div className="back-btn-class">
                <Link to="/"><TiArrowBackOutline className="back-btn" size={50}/></Link>
                </div>
                <div className='create-box'>
                <h3>Event Name:  </h3> <input type="text" value={eventName} onChange={handleNameChange} className="create-event-input"></input>
                <h3>Event Date:  </h3> <input type="date" value={eventDate} onChange={handleDateChange} className="create-event-input"></input>
                <h3>Event Time:  </h3> <input type="time" value={eventTime} onChange={handleTimeChange} className="create-event-input"></input>
                </div>
                <div className="add-btn-div">
                <Button type="submit" className="btn-add-tasks" variant="danger">Create Task</Button>
                </div>
                </form>
            </div>
    )
}
export default CreateTask