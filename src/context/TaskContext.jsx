import { createContext, useState } from "react"

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

    const [updateTasks,setUpdateTasks] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [isLoadingTasks, setIsLoadingTasks] = useState(false);
    const [errorLoadingTasks, setErrorLoadingTasks] = useState(null);

  return (
    <TaskContext.Provider value={{
            updateTasks,setUpdateTasks,
            tasks,setTasks,
            isLoadingTasks, setIsLoadingTasks,
            errorLoadingTasks, setErrorLoadingTasks}}
    >
        {children}
    </TaskContext.Provider>
  );
};
