import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/Login.css'


const Login = () => {


  return (
    <div className='two-half-container'>
      <div className='login-left-side'>
      </div>
      <div className='right-side'>
        <LoginForm  />
      </div>
    </div>
  );
};

export default Login;