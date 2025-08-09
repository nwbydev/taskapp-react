import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormHelperText, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { categorySchema } from '../../utils/validationSchema';
import CloseIcon from '@mui/icons-material/Close';

const CategoryForm = ({open, onClose, onSubmit, category}) => {
  return (
    <Dialog open={open} onClose={onClose} slotProps={{
        paper: { sx: { width: '350px', maxWidth: 'none', minWidth: '320px'},},
      }}>
        <Formik 
            initialValues={{name: category?.name || ''}}
            validationSchema={categorySchema}
            onSubmit={onSubmit}
        >

             {({ values, handleChange, touched, errors, isSubmitting, status }) => (
            <Form>
              <fieldset disabled={isSubmitting} style={{ border: 'none', padding: 0, margin: 0 }}>
                <Typography variant="h6" component="h2" sx={{ textAlign: 'center', mt: 2, mb: 0.5}}>
                 {category ? 'Editar' : 'Agregar'} categoria
                  <IconButton
                    aria-label="cerrar"
                    onClick={onClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500]
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Typography>
                {status && (
                            <FormHelperText error sx={{ textAlign: 'center', mb: 2 }}>
                              {status}
                            </FormHelperText>
                      )}
              <DialogContent sx={{p:2}}>
                <Stack spacing={2}>
                  <Field disabled={isSubmitting} size="small" name="name" as={TextField} label="Nombre" error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} />          
                </Stack>
              </DialogContent>
            
              <DialogActions sx={{ p: 2, pt: 0  }}>
                <Button
                  type="submit"
                  variant="contained"
                  color={category ? 'warning' : 'primary'}
                  fullWidth
                  disabled={isSubmitting ? true : false}
                >
                  {isSubmitting ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : ( 
                    category ? 'Editar' : 'Agregar'
                  )}
                </Button>
              </DialogActions>
              </fieldset>
            </Form>
             )}
        </Formik>
    </Dialog>
  )
}

export default CategoryForm