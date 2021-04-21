import React from 'react';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar({ click }) {
  return (
    <>
      <div className="sidebar-logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="images/dms-logo.svg" alt="" />
        </Link>
        <hr className="sidebar-logo--hr" />
      </div>
      <div className="sidebar">
        <ul className="sidebar-list">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="list-items"
                id={window.location.pathname === val.link ? 'active' : ''}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title" className={click ? 'show-title' : 'title'}>
                  {val.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
