import { useContext, useState } from "react";
import { createCategory, deleteCategory, fetchCategories, updateCategory } from "../services/categoryService";
import { CategoryContext } from "../context/CategoryContext";
import { TaskContext } from "../context/TaskContext";

export const useCategory = () => {

    const {setUpdateCategories} = useContext(CategoryContext);
    const {setUpdateTasks} = useContext(TaskContext)
    const [categories,setCategories] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [errorLoadingCategories, setErrorLoadingCategories] = useState(null)
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [errorDelete, setErrorDelete] = useState(null);

    const getCategories = async () => {      
        try {
            setIsLoadingCategories(true);
            const response = await fetchCategories();
            console.log(response.data);
            setCategories(response.data);
        } catch (error) {
            setErrorLoadingCategories(error)
        } finally {
            setIsLoadingCategories(false);
        }
    };

    const addCategory = async (values,setStatus,setDialogOpen) => {
        setStatus(null);
        try {
            const response = await createCategory(values);
            console.log(response.data);
            setUpdateCategories(prev => !prev);
            setDialogOpen(false);
        } catch (error) {
            setStatus('Ocurrió un error.');
        }
    };

    const editCategory = async (id,values,setStatus,setDialogOpen) => {
        setStatus(null);
        try{
            const response = await updateCategory(id,values);
            console.log(response);
            setUpdateCategories(prev => !prev);
            setUpdateTasks(prev => !prev);
            setDialogOpen(false);
        } catch (error) {
            setStatus('Ocurrió un error.');
        }
    
    };

    const removeCategory = async (id,setDialogOpen) => {
        try{
            setLoadingDelete(true)
            const response = await deleteCategory(id);
            console.log(response.data);
            setDialogOpen(false);
            setUpdateCategories( prev => !prev);
            setUpdateTasks(prev => !prev);
        } catch (error) {
            setErrorDelete(error);
        } finally {
            setLoadingDelete(false);
        }
    };

    return {getCategories,addCategory,removeCategory,editCategory,loadingDelete,errorDelete,categories,isLoadingCategories,errorLoadingCategories}
}
