import React, { useState, useEffect } from 'react';
import { fetchLivePrice } from '../actions';



const LivePrice = ({ ticker }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const price = await fetchLivePrice(ticker);
      setPrice(price);
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, [ticker]);
  console.log(ticker, price);
  return <span>{price ? `${price}` : 'Loading...'}</span>;
};

export default LivePrice;
