import React, { useState, useEffect } from 'react';
import axios from 'axios';
const cheerio = require('cheerio');

const fetchLivePrice = async (ticker) => {
  const tik = ticker;
  const exchange = 'NSE';
  const url = `/api/finance/quote/${tik}:${exchange}?hl=en`;
  console.log(url);


  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const price = $('div.YMlKec.fxKbKc').text();
    return price;
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
};

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
