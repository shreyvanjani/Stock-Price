import axios from 'axios';
const cheerio = require('cheerio');

export const FETCH_STOCK_PRICE_REQUEST = 'FETCH_STOCK_PRICE_REQUEST';
export const FETCH_STOCK_PRICE_SUCCESS = 'FETCH_STOCK_PRICE_SUCCESS';
export const FETCH_STOCK_PRICE_FAILURE = 'FETCH_STOCK_PRICE_FAILURE';

const fetchStockPriceRequest = () => ({
  type: FETCH_STOCK_PRICE_REQUEST
});

const fetchStockPriceSuccess = (data) => ({
  type: FETCH_STOCK_PRICE_SUCCESS,
  payload: data
});

const fetchStockPriceFailure = (error) => ({
  type: FETCH_STOCK_PRICE_FAILURE,
  payload: error
});

export const fetchStockPrice = (sheetId, range) => {
  return async (dispatch) => {
    dispatch(fetchStockPriceRequest());
    try {
      const apiKey = 'AIzaSyCKn6P4uWzsOyyHcrhy3x1piWYyGlMi5jg';
      const url = `/sheets/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
      const response = await axios.get(url);
      dispatch(fetchStockPriceSuccess(response.data.values));
      // console.log(response.data)
    } catch (error) {
      dispatch(fetchStockPriceFailure(error.message));
    }
  };
};

export const fetchLivePrice = async (ticker) => {
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