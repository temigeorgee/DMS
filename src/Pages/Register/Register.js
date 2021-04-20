import React from 'react';
import Article from '../../component/Article/Article';
import Navbar from '../../component/Navbar/Navbar';
import RegisterForm from '../../component/RegisterForm/RegisterForm';
import './Register.css';

function Register() {
  return (
    <>
      <div className="register">
        <div className="register-container">
          <div className="register-container--navbar">
            <Navbar />
          </div>
          <div className="register-content">
            <div className="register-container--article">
              <Article />
            </div>
            <div className="register-container--form">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
