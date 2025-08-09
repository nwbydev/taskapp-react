import { Box, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import TaskForm from './TaskForm';
import { useTask } from '../../hooks/useTask';
import { TaskContext } from '../../context/TaskContext';

const CreateTaskButton = () => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const { addTask } = useTask();
    const {setUpdateTasks} = useContext(TaskContext);

    const onSubmit = async (values,{ setStatus }) => {
      setStatus(null);
      values.dueDate += ':00';
      console.log('Datos enviados desde el formulario:', values);
      try {
        const data = await addTask(values);
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
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" onClick={() => setDialogOpen(true)}>
            Agregar nueva tarea
          </Button>
        </Box>

        {dialogOpen && <TaskForm 
          open={dialogOpen}         
          onClose={()=>setDialogOpen(false)}
          onSubmit={onSubmit} 
          task={null}
        />}
    </>
  )
}

export default CreateTaskButton