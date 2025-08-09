import { useContext, useState } from "react";
import { createTask, deleteTask, fetchTasks, fetchTasksByCategory, fetchTasksByPriority, fetchTasksByStatus, updateTask } from "../services/taskService";
import { TaskContext } from "../context/TaskContext";

export const useTask = () => {

    const {setTasks,setIsLoadingTasks,setErrorLoadingTasks} = useContext(TaskContext);
    
    const getTasks = async () => {      
        try {
            setIsLoadingTasks(true);
            const response = await fetchTasks();
            console.log(response.data);
            setTasks(response.data);
        } catch (error) {
            setErrorLoadingTasks(error)
        } finally {
            setIsLoadingTasks(false);
        }
    };

    const addTask = async (values) => {
        const response = await createTask(values);
        return response.data;
    };

    const editTask = async (id,data) => {
        const response = await updateTask(id,data);
        return response.data;
    };

    const removeTask = async (id) => {
        const response = await deleteTask(id);
        return response.data;
    };

    const getTasksByStatus = async (status) => {
        try {
            setErrorLoadingTasks(null);
            setIsLoadingTasks(true);
            const response = await fetchTasksByStatus(status);
            setTasks(response.data);
        } catch (error) {
            setErrorLoadingTasks(error)
        } finally {
            setIsLoadingTasks(false);
        }
    };

    const getTasksByPriority = async (priority) => {
        try {
            setErrorLoadingTasks(null);
            setIsLoadingTasks(true);
            const response = await fetchTasksByPriority(priority);
            setTasks(response.data);
        } catch (error) {
            setErrorLoadingTasks(error)
        } finally {
            setIsLoadingTasks(false);
        }
    };

    const getTasksByCategory = async (idCategory) => {
        try{
            setIsLoadingTasks(true);
            const response = await fetchTasksByCategory(idCategory);
            console.log(response.data);
            setTasks(response.data);
        } catch (error) {
            setErrorLoadingTasks(error);
        } finally {
            setIsLoadingTasks(false);
        }     
    };

    return {
        addTask,getTasks,editTask,removeTask,
        getTasksByStatus,
        getTasksByPriority,
        getTasksByCategory
    }
}