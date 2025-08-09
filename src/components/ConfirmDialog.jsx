import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDialog = ({open, onClose, onConfirm, title, content,loading,error}) => {
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>
            {title || 'Estás seguro?'}
        </DialogTitle>
        {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
                {typeof error === 'string' ? error : 'Ocurrió un error al eliminar.'}
            </Alert>
        )}
        <DialogContent>
            {content || '¿Deseas continuar con esta acción?'}
        </DialogContent>
        <DialogActions>
            <Button disabled={loading} onClick={onClose} color="primary">
                Cancelar
            </Button>
            <Button disabled={loading} onClick={onConfirm} color="error" autoFocus>
                Confirmar
            </Button>
        </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog