import React from 'react';
import Article from '../../component/Article/Article';
import Navbar from '../../component/Navbar/Navbar';
import SignIn from '../../component/SignIn/SignIn';
function SigninPage() {
  return (
    <div>
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
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
