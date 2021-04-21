import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
function Header({ click, handleClick }) {
  return (
    <div className="header-section">
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div className="search">
        <form className="search-form">
          <input type="text" placeholder="Search" />
          <input type="submit" value="&#x2315;" />
        </form>
      </div>
      <div className="info">
        <div className="info-image">
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="info-image--small"
          />
        </div>
        <div className="info-image--online"></div>
        <div className="info-details">
          <h5 className="info-details--name"> Jude Adam</h5>
          <h6 className="info-details--title"> Admin</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
