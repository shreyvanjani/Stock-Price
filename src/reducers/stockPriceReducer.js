import {
  FETCH_STOCK_PRICE_REQUEST,
  FETCH_STOCK_PRICE_SUCCESS,
  FETCH_STOCK_PRICE_FAILURE,
} from "../actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const stockPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_PRICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STOCK_PRICE_SUCCESS:
      // console.log(...state);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_STOCK_PRICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stockPriceReducer;
