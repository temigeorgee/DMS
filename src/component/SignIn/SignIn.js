import React from 'react';
import Button from '../Buttons/Button';
import Input from '../Input/Input';
import { Link } from 'react-router-dom';
function SignIn() {
  const style = {
    paddingLeft: '1rem',
    backgroundColor: '#FFF',
    color: '#DADADE',
    borderRadius: '10px',
    border: '1px solid #DADADE',
  };
  return (
    <div>
      <>
        <div className="homepage-form">
          <div className="homepage-form--register">
            <h2>You’re Welcome Back!</h2>
            <small>Enter the following Information below</small>

            <div className="homepage-form--container">
              <form className="">
                <Input placeholder="Email Address" style={style} />
                <Input placeholder="Password" style={style} />
                <div className="homepage-form--terms ">
                  <Link style={{ textDecoration: 'none', color: '#053582' }}>
                    <p className="homepage-form--password">Forgot Password?</p>
                  </Link>
                </div>
                <div className="homepage-form--footer">
                  <div className="homepage-form--footer-text">
                    <p>
                      Just joining us here?
                      <Link
                        to="/"
                        style={{ textDecoration: 'none', color: '#053582' }}
                      >
                        Register Now
                      </Link>
                    </p>
                  </div>
                  <div className="homepage-form--footer-btn">
                    <Button
                      buttonStyle="btn--primary--solid"
                      buttonSize="btn--smallest"
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default SignIn;
