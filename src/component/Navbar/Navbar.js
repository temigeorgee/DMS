import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-brand"
            style={{ textDecoration: 'none' }}
          >
            <img src="images/dms-logo.svg" alt="" />
            <h3>DMS</h3>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
