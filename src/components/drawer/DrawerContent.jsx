import { Box, Collapse, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useContext, useState } from 'react'
import CreateCategoryButton from '../category/CreateCategoryButton';
import { useTask } from '../../hooks/useTask';
import CategoryList from '../category/CategoryList';
import { TaskContext } from '../../context/TaskContext';

const drawerWidth = 200;

const DrawerContent = () => {

    const {getTasksByStatus,getTasksByPriority} = useTask();
    const {setUpdateTasks} = useContext(TaskContext);
    const [openStatus, setOpenStatus] = useState(false);
    const [openPriorities, setOpenPriorities] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);

    const toggleStatus = () => {
      setOpenStatus(prev => !prev);
    };
    const togglePriorities = () => {
      setOpenPriorities(prev => !prev);
    };
    const toggleCategories = () => {
      setOpenCategories(prev => !prev);
    };

  return (
    <Box sx={{ width: drawerWidth }}>
      <Toolbar />
      <List sx={{ py: 0 }}>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setUpdateTasks(prev => !prev)}>
            <ListItemText primary="Todas las tareas" />
          </ListItemButton>
        </ListItem>

        <ListItem  
          component="button"
          onClick={toggleStatus} 
          sx={{ background: 'green', color: 'white','&:hover': { backgroundColor: 'darkgreen' } }}>
          <ListItemText 
            primary={<Typography fontWeight="bold">
              ESTADOS
            </Typography>} />
          {openStatus ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={openStatus} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem disablePadding>
              <ListItemButton onClick={() => getTasksByStatus("PENDING")} sx={{ pl: 4 }}>
                <ListItemText primary="Pendiente" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => getTasksByStatus("IN_PROGRESS")} sx={{ pl: 4 }}>
                <ListItemText primary="En proceso" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => getTasksByStatus("COMPLETED")} sx={{ pl: 4 }}>
                <ListItemText primary="Completado" />
              </ListItemButton>
            </ListItem>

          </List>
        </Collapse>

        <ListItem  
          component="button"
          onClick={togglePriorities} 
          sx={{ background: 'green', color: 'white','&:hover': { backgroundColor: 'darkgreen' } }}>
          <ListItemText 
            primary={<Typography fontWeight="bold">
              PRIORIDAD
            </Typography>} />
          {openPriorities ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={openPriorities} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            
            <ListItem disablePadding>
              <ListItemButton onClick={() => getTasksByPriority("LOW")} sx={{ pl: 4 }}>
                <ListItemText primary="Baja" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => getTasksByPriority("MEDIUM")} sx={{ pl: 4 }}>
                <ListItemText primary="Media" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => getTasksByPriority("HIGH")} sx={{ pl: 4 }}>
                <ListItemText primary="Alta" />
              </ListItemButton>
            </ListItem>

          </List>
        </Collapse>

        <ListItem  
          component="button"
          onClick={toggleCategories} 
          sx={{ background: 'green', color: 'white','&:hover': { backgroundColor: 'darkgreen' } }}>
          <ListItemText 
            primary={<Typography fontWeight="bold">
              CATEGORIAS
            </Typography>} />
          {openCategories ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={openCategories} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <CreateCategoryButton />
            <CategoryList />

          </List>
        </Collapse>
      </List>
    </Box>
  )
}

export default DrawerContent