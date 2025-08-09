import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <LoginForm />
  )
}

export default Login