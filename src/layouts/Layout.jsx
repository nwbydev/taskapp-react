import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerContent from '../components/drawer/DrawerContent';
import LogoutButton from '../components/LogoutButton';

const drawerWidth = 200;

const Layout = ({children}) => {
    
    const [openMobile, setOpenMobile] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleDrawerToggle = () => {
      setOpenMobile(!openMobile);
    };

  return (
        <Box sx={{ display: 'flex' }}>

           <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
              <Toolbar>
               {isMobile && (
                 <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                   <MenuIcon />
                 </IconButton>
               )}
               <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                 Mis tareas
               </Typography>
               <LogoutButton />
              </Toolbar>
           </AppBar>
     
  {isMobile ? (
        <Drawer
          variant="temporary"
          open={openMobile}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
        >
          <DrawerContent />
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          open
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              overflowX: 'hidden'
            }
          }}
        >
          <DrawerContent />
        </Drawer>
      )}
     
           {/* Contenido principal */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 1,
              mt: 8,
              width: { md: `calc(100% - ${drawerWidth}px)` },
              ml: { md: `${drawerWidth}px` },
            }}
          >
            {children}
          </Box>

    </Box>

  )
}

export default Layout