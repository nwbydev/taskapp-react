import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react'
import CategoryForm from './CategoryForm';
import { useCategory } from '../../hooks/useCategory';

const UpdateCategoryButton = ({category}) => {

    const {editCategory} = useCategory();
    const [dialogOpen, setDialogOpen] = useState(false);

    const onSubmit = async (values,{ setStatus }) => {
      await editCategory(category.id,values,setStatus,setDialogOpen);
    };

  return (
    <>
        <IconButton onClick={() => {setDialogOpen(true)}} edge="end" aria-label="edit">
            <EditIcon />
        </IconButton>
        {dialogOpen && <CategoryForm 
            open={dialogOpen} 
            onClose={()=>setDialogOpen(false)}
            onSubmit={onSubmit}
            category={category}/>
        }
    </>
  )
}

export default UpdateCategoryButton