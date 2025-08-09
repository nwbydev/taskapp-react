import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, FormControlLabel, FormHelperText, FormLabel, IconButton, MenuItem, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { FastField, Field, Form, Formik } from 'formik';
import { taskSchema } from '../../utils/validationSchema';
import CloseIcon from '@mui/icons-material/Close';
import { useCategory } from '../../hooks/useCategory';
import React, { useEffect } from 'react'

const TaskForm = ({ open, onClose, onSubmit, task}) => {

  const {getCategories,isLoadingCategories,categories} = useCategory();

  useEffect(()=>{
    getCategories();
  },[])

  return (
    <>
    <Dialog open={open} onClose={onClose} slotProps={{
        paper: { sx: { width: '350px', maxWidth: 'none', minWidth: '350px'},},
      }}>
        <Formik 
            initialValues={{title: task?.title || '',
                            description: task?.description || '',
                            priority: task?.priority || 'LOW',
                            status: task?.status || 'PENDING',
                            dueDate: task?.dueDate ? task.dueDate.slice(0, 16) : '',
                            category: task?.category?.name || ' '}}
            validationSchema={taskSchema}
            onSubmit={onSubmit}
        >

             {({ values, handleChange, touched, errors, isSubmitting, status }) => (
            <Form>
              <Typography variant="h6" component="h2" sx={{ textAlign: 'center', mt: 2, mb: 0.5}}>
                {task ? 'Editar' : 'Agregar'} tarea
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

              <DialogContent sx={{py:1,px:2}}>
                <Stack spacing={1.5}>
                  <Field size="small" disabled={isSubmitting} name="title" as={TextField} label="Tí­tulo" error={touched.title && Boolean(errors.title)} helperText={touched.title && errors.title} />
                  <Field size="small" disabled={isSubmitting} name="description" as={TextField} label="Descripción" />

              <FormLabel sx={{ textAlign: 'center'}}>Prioridad</FormLabel>
              <RadioGroup row name="priority"   sx={{
                justifyContent: 'space-evenly',
        
              }}>
                <FormControlLabel
                  sx={{m:0}}
                  control={
                    <Field sx={{p:0}} size="small" type="radio" name="priority" value="LOW" disabled={isSubmitting} as={Radio} />
                  }
                  label="Baja"
                />
                <FormControlLabel
                  sx={{m:0}}
                  control={
                    <Field sx={{p:0}} size="small" type="radio" name="priority" value="MEDIUM" disabled={isSubmitting} as={Radio} />
                  }
                  label="Media"
                />
                <FormControlLabel
                  sx={{m:0}}
                  control={
                    <Field sx={{p:0}} size="small" type="radio" name="priority" value="HIGH" disabled={isSubmitting} as={Radio} />
                  }
                  label="Alta"
                />
              </RadioGroup>

              <FormLabel sx={{ textAlign: 'center'}}>Estado</FormLabel>
              <RadioGroup row name="status" sx={{justifyContent: 'center',pb:1}}>
                <FormControlLabel sx={{m:0}}
                  control={
                    <Field sx={{p:0}}  type="radio" size="small" name="status" value="PENDING" disabled={isSubmitting} as={Radio} />
                  }
                  label="Pendiente"
                />
                <FormControlLabel sx={{m:0}}
                  control={
                    <Field sx={{p:0}} type="radio" size="small" name="status" value="IN_PROGRESS" disabled={isSubmitting} as={Radio} />
                  }
                  label="En progreso"
                />
                <FormControlLabel sx={{m:0}}
                  control={
                    <Field sx={{p:0}} type="radio" size="small" name="status" value="COMPLETED" disabled={isSubmitting} as={Radio} />
                  }
                  label="Completado"
                />
              </RadioGroup>

                  <Field
                    size="small"
                    as={TextField}
                    name="dueDate"
                    disabled={isSubmitting}
                    type="datetime-local"
                    label="Fecha y hora de vencimiento"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    error={touched.dueDate && Boolean(errors.dueDate)}
                    helperText={touched.dueDate && errors.dueDate}
                  />

                  {isLoadingCategories? (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                      <CircularProgress size={24}/>
                    </div>
                  ) : (
                    <Field
                      size="small"
                      as={TextField}
                      select
                      label="Categoria"
                      name="category"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                      //error={touched.opcion && Boolean(errors.opcion)}
                      //helperText={touched.opcion && errors.opcion}
                    >
                      <MenuItem value=" ">-- Sin categoria --</MenuItem>
                      {categories.map(element => (
                        <MenuItem key={element.id} value={element.name}>{element.name}</MenuItem>
                      ))}
                    </Field>
                  )}              
                </Stack>
              </DialogContent>

              <DialogActions sx={{ p: 2, pt: 0  }}>
                <Button
                  type="submit"
                  variant="contained"
                  color={task ? 'warning' : 'primary'}
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    task ? 'Editar' : 'Agregar'
                  )}
                </Button>
              </DialogActions>
            </Form>
             )}
        </Formik>
      </Dialog>
    </>
  )
}

export default TaskForm