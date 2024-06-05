import React from 'react';
import LivePrice from './LivePrice';

const StockRow = React.memo(({ row, index, expandedRows, toggleRow }) => {
  const isExpanded = expandedRows.includes(index);

  return (
    <>
      <div className="stock-row" key={index}>
        <div className="stock-overview">
          <span className="company-name">{row[1]}</span>
          <span className="current-price"><LivePrice ticker={row[0]} /></span>
          <button className="toggle-details" onClick={() => toggleRow(index)}>
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="stock-details">
          <p className="price-open">Price Open: ₹{row[3]}</p>
          <p className="todays-high">Today's High: ₹{row[4]}</p>
          <p className="todays-low">Today's Low: ₹{row[5]}</p>
          <p className="volume">Volume: {row[6]}</p>
          <p className="market-cap">Market Capitalization: {row[7]}</p>
          <p className="eps">Earning Per Share: ₹{row[8]}</p>
          <p className="pe-ratio">Price/Earning: {row[9]}</p>
          <p className="high52">Highest Price in 52 weeks: ₹{row[11]}</p>
          <p className="low52">Lowest Price in 52 weeks: ₹{row[12]}</p>
          <p className="change">Net change from previous Day: {row[10]}</p>
        </div>
      )}
    </>
  );
});

export default StockRow;
