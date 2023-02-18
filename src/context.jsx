import React,{useContext,useState,useEffect} from "react";

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem('taskList')));
    const [task,setTask]=useState({})
    const [dates,setDates]=useState([])
    const [selectedDate,setSelectedDate]=useState();

    const setDate=(date)=>{
        let tasks=JSON.parse(localStorage.getItem('taskList'))
        setSelectedDate(date);
        console.log(date);
        if(date==="default"){
            console.log("hi")
            setTasks(JSON.parse(localStorage.getItem('taskList')))
        }
        else{
            setTasks(tasks.filter((task)=>task.eventDate===date))
        }
    }   

    const getDates=()=>{
        let tasks=JSON.parse(localStorage.getItem('taskList'))
        let updatedDates=[]
        for(let i=0;i<tasks.length;i++){
            if(updatedDates.find((date)=>date===tasks[i].eventDate)){

            }
            else{
                updatedDates=[...updatedDates,tasks[i].eventDate]
            }
        }
        setDates(updatedDates)
    }

    const deleteFromTasks=(eventName)=>{
        const updatedTasks=tasks.filter((task)=>task.eventName!==eventName)
        let sortedTasks =updatedTasks.slice(0).sort((a,b)=>
        a.eventDate.localeCompare(b.eventDate)||a.eventTime.localeCompare(b.eventTime));
        setTasks(sortedTasks)
        localStorage.setItem('taskList',JSON.stringify(sortedTasks))
    }

    const addToTasks=(eventName,eventDate,eventTime)=>{
        const updatedTasks=[...tasks,{eventName:eventName,eventDate:eventDate,eventTime:eventTime}]
        let sortedTasks =updatedTasks.slice(0).sort((a,b)=>
        a.eventDate.localeCompare(b.eventDate)||a.eventTime.localeCompare(b.eventTime));
        setTasks(sortedTasks)
        localStorage.setItem('taskList',JSON.stringify(sortedTasks))
    }

    const updateFromTasks=(eventName)=>{
        const task=tasks.find((task)=>task.eventName===eventName)
        setTask(task)
        deleteFromTasks(task.eventName)
    }

    return <AppContext.Provider value={{tasks,addToTasks,deleteFromTasks,updateFromTasks,task,getDates,dates,setDate}}>
        {children}
    </AppContext.Provider>

}
export const useGlobleContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext}