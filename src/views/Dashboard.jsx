import React from 'react'
import CreateTaskButton from '../components/task/CreateTaskButton'
import TaskList from '../components/task/TaskList'
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Dashboard = () => {

  return (
    <>
      <CreateTaskButton />
      <TaskList />
    </>
  )
}

export default Dashboard