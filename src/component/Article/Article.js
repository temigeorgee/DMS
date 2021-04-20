import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import './Article.css';
const style = {};
function Article() {
  return (
    <>
      <div className="article-container">
        <img src="images/Delivery Service With Man On Scooter 1.svg" alt="" />
        <h2>
          Lets help you manage your <br /> riders and delivery systems.
        </h2>
        <br />
        <p>
          Every logistics company whether it’s a multi-national branding <br />
          corporation or a regular local deserves the basic standard necessities
          <br />
          in achieving a high service delivery
        </p>
        <br />
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <Button buttonStyle="btn--primary--solid" buttonSize="btn--small">
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Article;
