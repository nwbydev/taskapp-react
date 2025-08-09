import React, { useContext, useEffect, useState } from 'react'
import { useTask } from '../../hooks/useTask'
import { Box, CircularProgress, Divider, IconButton, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import DeleteTaskButton from './DeleteTaskButton';
import UpdateTaskButton from './UpdateTaskButton';
import { TaskContext } from '../../context/TaskContext';
import { translateStatus,translatePriority,formatDate } from '../../utils/translations';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const TaskList = () => {

    const {getTasks} = useTask();
    const {updateTasks,tasks,isLoadingTasks,errorLoadingTasks} = useContext(TaskContext);

    useEffect(()=>{
        getTasks();
    },[updateTasks])

    if (isLoadingTasks) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="20vh">
                <CircularProgress />
            </Box>
        );
    };

    if (errorLoadingTasks) {
        return (
            <Box sx={{ mt: 4,display: 'flex', justifyContent: 'center' }}>
                <Typography>Error: {errorLoadingTasks.message}</Typography>
            </Box>
        );
    };

    if (tasks.length === 0) {
        return (
            <Box sx={{ mt: 4,display: 'flex', justifyContent: 'center' }}>
                <Typography>No se encontraron tareas.</Typography>
            </Box>
        );
    };

  return (
    <>
        <Box sx={{ backgroundColor: 'white',width:'100%',padding: 0,mt: 3,}}>
            <List>
            {tasks.map((task) => (
                <React.Fragment key={task.id}>
                <ListItem
                    secondaryAction={
                    <>
                        <UpdateTaskButton task={task}/>
                        <DeleteTaskButton task={task}/>
                    </>
                    }
                    alignItems="flex-start"
                >

                    <Stack spacing={0.5}>
                   <Stack direction="row" alignItems="center" spacing={1}>
                     {task.status === "COMPLETED" ? (
                    <CheckBoxOutlinedIcon color="success" />
                ) : (
                    <CheckBoxOutlineBlankIcon color="action" />
                )}
                <Typography variant="body1">
                    {task.title}
                </Typography>
                </Stack>


                        <Typography variant="body2" color="text.secondary">
                            {task.description}
                        </Typography>

                        <Stack direction="row" spacing={1}>
                            <Typography variant="caption" color="black"
                                sx={{ 
                                    py: 0.5,                                 
                                    width: 'fit-content',                               
                                }}
                            >
                                Vence: {formatDate(task.dueDate)}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="white"
                                sx={{
                                    display: { xs: 'none', sm: 'inline' },
                                    backgroundColor: task.status === 'PENDING'
                                        ? 'grey.500' : task.status === 'IN_PROGRESS'
                                        ? 'warning.main' : 'success.main',
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    width: 'fit-content',                               
                                }}
                            >
                                {translateStatus(task.status)}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="black"
                                sx={{
                                    display: { xs: 'none', sm: 'inline' },
                                    backgroundColor:'#e3dd23ff',
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    width: 'fit-content',                               
                                }}
                            >
                                PRIORIDAD: {translatePriority(task.priority)}
                            </Typography>
                        </Stack>
                    </Stack>
                </ListItem>
                <Divider />
                </React.Fragment>
            ))}
            </List>
        </Box>
    </>
  )
}

export default TaskList