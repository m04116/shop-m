import { combineReducers } from 'redux';

import { productsReducer as products } from 'bus/products/reducer';

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
