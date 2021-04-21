import React from 'react';
import './ChartCard.css';
function Pool({ imgUser, imgGraph }) {
  return (
    <>
      <div className="pool-chart">
        <div className="pool-chart--header">
          <h3 className="pool-chart--title">120</h3>
          <h5 className="pool-chart--sub-title">
            Companies sent orders to delivery pool today.
          </h5>
        </div>
        <div className="pool-img">
          <img src={imgUser} alt="" />
        </div>
        <div className="pool-chart--result">
          <div className="pool-chart--main-result">
            <h2 className="pool-chart--number">+84%</h2>
            <div className="pool-chart--graph">
              <img src={imgGraph} alt="" />
            </div>
          </div>
          <small className="pool-chart--caption">Comapred to yesterday</small>
        </div>
      </div>
    </>
  );
}

export default Pool;
