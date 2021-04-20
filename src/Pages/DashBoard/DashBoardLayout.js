import React from 'react';
import Header from '../../component/Header/Header';
import Sidebar from '../../component/Sidebar/Sidebar';
import './DashBoardLayout.css';

function DashBoardLayout() {
  return (
    <>
      <div className="dashboard-container">
        <aside className="dashboard-nav">
          <Sidebar />
        </aside>
        <header className="dashboard-header">
          <Header />
        </header>
        <main className="dashboard-content border">content</main>
      </div>
    </>
  );
}

export default DashBoardLayout;
