import React from 'react';
import { FaSortDown } from 'react-icons/fa';
import './ChartCard.css';

function ChartCard({ imgIcon, imgGraph, children }) {
  return (
    <>
      <div className="card-chart">
        <div className="card-chart--header">
          <h3 className="card-chart--title">{children}</h3>
          <img src={imgIcon} alt="" />
        </div>
        <div className="card-chart--result">
          <div className="card-chart--main-result">
            <h2 className="card-chart--number">504</h2>
            <div className="card-chart--graph">
              <img src={imgGraph} alt="" />
            </div>
          </div>
          <small className="card-chart--dropdown">
            Today <FaSortDown />
          </small>
        </div>
      </div>
    </>
  );
}

export default ChartCard;
