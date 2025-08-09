import { IconButton, ListItem } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useState } from 'react'
import CategoryForm from './CategoryForm';
import { useCategory } from '../../hooks/useCategory';

const CreateCategoryButton = () => {
    
    const {addCategory} = useCategory();
    const [dialogOpen, setDialogOpen] = useState(false);

    const onSubmit = async (values,{ setStatus }) => {
       await addCategory(values,setStatus,setDialogOpen);
    };

  return (
    <>
        <ListItem sx={{ justifyContent: 'center', pt: 1 }}>
            <IconButton
                onClick={()=>setDialogOpen(true)}
                color="primary"
                sx={{ p: 0 }}
            >
                <AddCircleIcon fontSize="large" />
            </IconButton>
        </ListItem>
        {dialogOpen && <CategoryForm 
            open={dialogOpen} 
            onClose={()=>setDialogOpen(false)}
            onSubmit={onSubmit}
            category={null}/>
        }
    </>
  )
}

export default CreateCategoryButton