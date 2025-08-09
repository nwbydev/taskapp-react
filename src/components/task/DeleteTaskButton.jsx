import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useState } from 'react'
import ConfirmDialog from '../ConfirmDialog';
import { useTask } from '../../hooks/useTask';
import { TaskContext } from '../../context/TaskContext';

const DeleteTaskButton = ({task}) => {

    const {removeTask} = useTask();
    const {setUpdateTasks} = useContext(TaskContext);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleConfirm = async () => {
      try {
            await removeTask(task.id);
            console.log('borrado');
            setUpdateTasks(prev => !prev);
            handleClose();
        } catch (error) {
            //setError(error)
        } finally {
           // setLoading(false);
        }
    };

    const handleClose = () => {
      setDialogOpen(false);
    };

  return (
    <>
        <IconButton onClick={() => setDialogOpen(true)} edge="end" aria-label="delete">
            <DeleteIcon />
        </IconButton>
        {dialogOpen && <ConfirmDialog
            open={dialogOpen}
            onClose={handleClose}
            onConfirm={handleConfirm}
            title="Eliminar Tarea"
            content="Estás seguro de que deseas eliminar esta tarea?"
        />}
    </>
  )
}

export default DeleteTaskButton