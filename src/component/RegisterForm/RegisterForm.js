import React from 'react';
import Button from '../Buttons/Button';
import Input from '../Input/Input';
import './RegisterForm.css';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const style = {
    paddingLeft: '1rem',
    backgroundColor: '#FFF',
    color: 'black',
    borderRadius: '10px',
    border: '1px solid #DADADE',
  };
  return (
    <>
      <div className="homepage-form">
        <progress value="50" max="100"></progress>
        <br />
        <div className="homepage-form--register">
          <h2>Basic Information</h2>
          <small>Enter the following Information below</small>

          <div className="homepage-form--container">
            <form className="">
              <div className="homepage-form--name">
                <div className="homepage-form--firstname">
                  <Input placeholder="First Name " style={style} children />
                </div>
                <div className="homepage-form--lastname">
                  <Input placeholder="Last Name" style={style} />
                </div>
              </div>
              <Input placeholder="Company Address" style={style} />
              <Input placeholder="Phone Number" style={style} />
              <Input placeholder="Company Email Address" style={style} />
              <Input placeholder="Password" style={style} />
              <div className="homepage-form--terms">
                <p>
                  By clicking "Next" you agree to our
                  <Link style={{ textDecoration: 'none', color: '#053582' }}>
                    Terms of Service, Privacy <br />
                    Policy
                  </Link>
                  , and to receive marketing communications from Envoy
                </p>
              </div>
              <div className="homepage-form--footer">
                <div className="homepage-form--footer-text">
                  <p>
                    Got an account?{' '}
                    <Link
                      to="/sign-in"
                      style={{ textDecoration: 'none', color: '#053582' }}
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
                <div className="homepage-form--footer-btn">
                  <Button
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--small"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
