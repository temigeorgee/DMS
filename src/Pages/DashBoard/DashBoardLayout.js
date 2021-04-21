import { useState } from 'react';
import ChartCard from '../../component/Chart/ChartCard';
import OrderChart from '../../component/Chart/OrderChart';
import Pool from '../../component/Chart/Pool';
import Header from '../../component/Header/Header';
import Sidebar from '../../component/Sidebar/Sidebar';
import './DashBoardLayout.css';

function DashBoardLayout() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [sidebar] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="dashboard-container">
        <aside className={click ? 'reduced-nav' : 'dashboard-nav'}>
          <Sidebar click={click} sidebar={sidebar} />
        </aside>
        <header className="dashboard-header">
          <Header click={click} handleClick={handleClick} />
        </header>
        <main className="dashboard-content">
          <div className="dashboard-section">
            <div className="dashboard-content--top-section">
              <div className="dashboard-content--top-card">
                <ChartCard
                  imgIcon={'images/ic_round-dashboard (3).svg'}
                  imgGraph={'images/Line 3.svg'}
                  children={'Total Exchange Pool Orders'}
                />
                <br />
                <ChartCard
                  imgIcon={'images/ic_round-dashboard (1).svg'}
                  imgGraph={'images/Line 3.svg'}
                  children={'Total Companies'}
                />
              </div>
              <div className="dashboard-content--top-pool">
                <Pool
                  imgUser={'images/Photo.svg'}
                  imgGraph={'images/Graphic.svg'}
                />
              </div>
              <div className="dashboard-content--top-order">
                <OrderChart />
              </div>
            </div>
            <div className="dashboard-content--bottom-section">
              <div className="dashboard-content--bottom-card">
                <ChartCard
                  imgIcon={'images/ic_round-dashboard.svg'}
                  imgGraph={'images/Line 3.svg'}
                  children={'Total Cancelled Orders'}
                />
                <br />
                <ChartCard
                  imgIcon={'images/ic_round-dashboard (2).svg'}
                  imgGraph={'images/Line 3.svg'}
                  children={'Total Created Orders'}
                />
              </div>
              <div className="dashboard-content--bottom-pool">
                <Pool
                  imgUser={'images/Photo.svg'}
                  imgGraph={'images/Graphic.svg'}
                />
              </div>
              <div className="dashboard-content--bottom-order">
                <OrderChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default DashBoardLayout;
