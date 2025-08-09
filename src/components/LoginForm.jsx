import { Box, Button, CircularProgress, FormHelperText, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema } from '../utils/validationSchema';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {

    const {handleLogin} = useAuth();
    const navigate = useNavigate();

    const handleClick = async (values,{ setStatus }) => {
        setStatus(null);
        try {
            const data = await handleLogin(values);
            localStorage.setItem("jwt",data.jwt);
            console.log(data);
            navigate("/", { replace: true });
        } catch (error) {
            setStatus('Ocurrió un error.');
        }
    };

  return (
    <>
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={handleClick}
        >
        {({ errors, touched, isSubmitting, status }) => (
            <Form>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    margin:'3rem auto',
                    width: { xs: 250,sm: 300 },
                    p: 2,
                    border: 1,
                    borderColor: 'grey.400',
                    borderRadius: 2,
                    background: 'white' 
                }}>
                <Typography variant="h6" align="center">
                    Accede a tu cuenta
                </Typography>
                {status && (
                    <FormHelperText error sx={{ textAlign: 'center', mb: 2 }}>
                        {status}
                    </FormHelperText>
                )}                
                <Field size="small" disabled={isSubmitting} name="username" as={TextField} label="Username:" error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username} />
                <Field size="small" disabled={isSubmitting} name="password" as={TextField} label="Password:"    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}/>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                    <CircularProgress size={20} color="inherit" />
                    ) : (
                    'Iniciar sesión'
                    )}
                </Button>
                <Link to="/register">
                    <Button 
                        type="button" 
                        variant="text" 
                        color="primary" 
                        fullWidth
                        disabled={isSubmitting}
                    >
                    Registrarse
                    </Button>
                </Link>
                </Box>
            </Form>
        )}
        </Formik>
    </>

  )
}

export default LoginForm