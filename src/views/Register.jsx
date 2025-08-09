import React, { useEffect } from 'react'
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("jwt");
      if (token) {
        navigate("/");
      }
    }, []);
  return (
    <RegisterForm/>
  )
}

export default Register