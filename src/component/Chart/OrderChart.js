import React from 'react';
import { FaSortDown } from 'react-icons/fa';
import './ChartCard.css';
function OrderChart() {
  return (
    <>
      <div className="order">
        <div className="order-chart">
          <div className="order-chart-title">
            <h3>Orders Today</h3>
            <div className="orders-chart--status">
              <div className="orders-chart-status-1">
                <div className="orders-chart-blue"></div>
                <div className="orders-chart-numbers">
                  <small>Delivered</small>
                  <h5>320</h5>
                </div>
              </div>
              <div className="orders-chart-status-2">
                <div className="orders-chart-green"></div>
                <div className="orders-chart-numbers">
                  <small>Delivered</small>
                  <h5>320</h5>
                </div>
              </div>
              <div className="orders-chart-status-3">
                <div className="orders-chart-red"></div>
                <div className="orders-chart-numbers">
                  <small>Delivered</small>
                  <h5>320</h5>
                </div>
              </div>
            </div>
            {/* pie-graph */}
          </div>
        </div>
        <div className="orders-chart-pie-1">
          <img src="images/Frame 1867.svg" alt="" />
        </div>
        <img src="images/Group 2.svg" alt="" className="order-img" />
      </div>
    </>
  );
}

export default OrderChart;
