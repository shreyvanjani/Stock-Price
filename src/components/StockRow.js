import React, { useState, useEffect } from "react";

const StockRow = React.memo(({ row, index, expandedRows, toggleRow }) => {
  return (
    <div className="stock-row" key={index}>
      <div className="stock-overview">
        <span className="company-name">{row[1]}</span> {/* Company Name */}
        <span className="current-price">{row[2]}</span> {/* Current Price */}
        <button className="toggle-details" onClick={() => toggleRow(index)}>
          {expandedRows.includes(index) ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {expandedRows.includes(index) && (
        <div className="stock-details">
          {/* Display additional details */}
          <p className="price-open">Price Open: {row[3]}</p>
          <p className="todays-high">Today's High: {row[4]}</p>
          <p className="todays-low">Today's Low: {row[5]}</p>
          <p className="volume">Volume: {row[6]}</p>
          <p className="market-cap">Market Capitalization: {row[7]}</p>
          <p className="eps">Earning Per Share: {row[8]}</p>
          <p className="pe-ratio">Price/Earning: {row[9]}</p>
          <p className="high52">Highest Price in 52 weeks: {row[11]}</p>
          <p className="low52">Lowest Price in 52 weeks: {row[12]}</p>
          <p className="change">Net change from previous Day {row[10]}</p>
        </div>
      )}
    </div>
  );
});

export default StockRow;
