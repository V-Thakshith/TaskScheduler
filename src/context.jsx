import React,{useContext,useState,useEffect} from "react";

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem('taskList')));  
    useEffect(()=>{
        if(tasks!==[]){
            let sortedTasks =tasks.slice(0).sort((a,b)=>
            a.eventDate.localeCompare(b.eventDate)||a.eventTime.localeCompare(b.eventTime));
            setTasks(sortedTasks)
        }

        localStorage.setItem('taskList',JSON.stringify(tasks))
    },[])

    const deleteFromTasks=(eventName)=>{
        const updatedTasks=tasks.filter((task)=>task.eventName!==eventName)
        setTasks(updatedTasks)
    }

    const addToTasks=(eventName,eventDate,eventTime)=>{
        const updatedTasks=[...tasks,{eventName:eventName,eventDate:eventDate,eventTime:eventTime}]
        setTasks(updatedTasks)
    }

    return <AppContext.Provider value={{tasks,addToTasks,deleteFromTasks}}>
        {children}
    </AppContext.Provider>

}
export const useGlobleContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext}