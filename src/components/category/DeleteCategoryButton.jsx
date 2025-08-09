import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react'
import ConfirmDialog from '../ConfirmDialog';
import { useCategory } from '../../hooks/useCategory';

const DeleteCategoryButton = ({category}) => {

    const {removeCategory,loadingDelete,errorDelete} = useCategory();
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleClose = () => {
      setDialogOpen(false);
    };

    const handleConfirm = () => {
        removeCategory(category.id,setDialogOpen); 
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
            title="Eliminar Categoria"
            content="Estás seguro de que deseas eliminar esta categoria?"
            loading={loadingDelete}
            error={errorDelete}
        />}
    </>
  )
}

export default DeleteCategoryButton