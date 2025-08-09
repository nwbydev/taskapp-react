import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        setTimeout(() => {
          navigate('/login');
        }, 300); 
    }

  return (
    <Button size="small" variant="contained" color="error" onClick={handleLogout}>
        Cerrar sesión
    </Button>
  )
}

export default LogoutButton