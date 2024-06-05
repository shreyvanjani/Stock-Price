import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockPrice } from "../actions";
import StockRow from "./StockRow";
import "./style.css";

const StockPrice = ({ sheetId, range }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.stockPrice);
  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    dispatch(fetchStockPrice(sheetId, range));
  }, [dispatch, sheetId, range]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchStockPrice(sheetId, range));
    }, 100000); // 10 seconds

    return () => clearInterval(interval);
  }, [dispatch, sheetId, range]);

  const toggleRow = (index) => {
    setExpandedRows((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((rowIndex) => rowIndex !== index);
      } else {
        return [...prevState, index];
      }
    });
  };

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="stock-data">
      <h1 className="stock-data-title">Live Stock Tracking</h1>
      {data.map((row, index) => (
        <StockRow
          key={index}
          row={row}
          index={index}
          expandedRows={expandedRows}
          toggleRow={toggleRow}
        />
      ))}
    </div>
  );
};

export default StockPrice;
