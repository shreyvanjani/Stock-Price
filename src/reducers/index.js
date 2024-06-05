import { combineReducers } from 'redux';
import stockPriceReducer from './stockPriceReducer';

export default combineReducers({
  stockPrice: stockPriceReducer
});
