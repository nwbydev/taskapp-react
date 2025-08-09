import { Box, Button, CircularProgress, FormHelperText, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { registerSchema } from '../utils/validationSchema';

const RegisterForm = () => {  
  
    const { handleRegister } = useAuth();
    const navigate = useNavigate();

    const handleClick = async (values,{ setStatus }) => {
      setStatus(null); 
      try {
          const data = await handleRegister(values);
          localStorage.setItem("jwt",data.jwt);
          console.log(data);
          navigate("/");
      } catch (error) {
          setStatus('Ocurrió un error.');
      }
    };


  return (
    <>
      <Formik
           initialValues={{name:'',lastName:'',username: '', password: ''}}
           validationSchema={registerSchema}
           onSubmit={handleClick}
        >
           {({ errors, touched, isSubmitting, status }) => (
          <Form>
            <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  margin:'3rem auto',
                  width: { xs: 250,sm: 300 },
                  p: 2,
                  border: 1,
                  borderColor: 'grey.400',
                  borderRadius: 2,
                  background: 'white' 
            }}>
              <Typography variant="h6" align="center">
                Registrarse
              </Typography>
              {status && (
                <FormHelperText error sx={{ textAlign: 'center', mb: 2 }}>
                    {status}
                </FormHelperText>
              )}
              <Field size="small" disabled={isSubmitting} name="name" as={TextField} label="Nombre:" error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name} />
              <Field size="small" disabled={isSubmitting} name="lastName" as={TextField} label="Apellido:"    error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}/>
              <Field size="small" disabled={isSubmitting} name="username" as={TextField} label="Correo:" error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username} />
              <Field size="small" disabled={isSubmitting} name="password" as={TextField} label="Password:"    error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}/>
              <Button type="submit" disabled={isSubmitting} variant="contained" color="success">
                {isSubmitting ? (
                <CircularProgress size={20} color="inherit" />
                ) : (
                'Registrarse'
                )}
              </Button>
              <Link to="/login">
                  <Button type="button" disabled={isSubmitting} variant="text" color="primary" fullWidth //startIcon={<ArrowBackIcon />}
                  >
                      Ir a login
                  </Button>
              </Link>
            </Box>
          </Form>
          )}
        </Formik>
    </>
  )
}

export default RegisterForm