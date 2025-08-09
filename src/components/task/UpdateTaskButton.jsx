import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react'
import TaskForm from './TaskForm';
import { useTask } from '../../hooks/useTask';
import { TaskContext } from '../../context/TaskContext';

const UpdateTaskButton = ({task}) => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const { editTask } = useTask();
    const {setUpdateTasks} = useContext(TaskContext);

    const onSubmit = async (values,{ setStatus }) => {
      setStatus(null);
      values.dueDate += ':00';
      console.log('Datos enviados desde el formulario:', values);
      try {
        const data = await editTask(task.id,values);
        console.log(data);
        setUpdateTasks(prev => !prev);
        setDialogOpen(false);
      } catch (error) {
        setStatus('Ocurrió un error.');
        if (values.dueDate.endsWith(':00')) {
          values.dueDate = values.dueDate.slice(0, -3);
        }
      }
    };

  return (
    <>
        <IconButton onClick={() => {setDialogOpen(true)}} edge="end" aria-label="edit">
            <EditIcon />
        </IconButton>
        {dialogOpen && <TaskForm 
          open={dialogOpen}         
          onClose={() => setDialogOpen(false)}
          onSubmit={onSubmit} 
          task={task}
        />}
    </>
  )
}

export default UpdateTaskButton