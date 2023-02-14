import React,{useContext,useState,useEffect} from "react";

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem('taskList')));
    const [task,setTask]=useState({})

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

    return <AppContext.Provider value={{tasks,addToTasks,deleteFromTasks,updateFromTasks,task}}>
        {children}
    </AppContext.Provider>

}
export const useGlobleContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext}