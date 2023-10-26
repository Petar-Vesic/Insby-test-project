// Register.js
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../styles/Register.css';



const Register = () => {
  return (
    <div className="register-container">
      <div className="left-side">
      </div>
      <div className="right-side">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
