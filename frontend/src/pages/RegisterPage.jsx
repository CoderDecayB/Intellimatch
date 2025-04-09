// src/pages/RegisterPage.js
import React from 'react';
import RegisterForm from '../components/registerForm';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Create an Account</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;