import { handleActions } from 'redux-actions';

import { productsActions } from './actions';

const initialState = {
  fetchedProducts: [],
  renderedProducts: [],
  categories: [],
  categoryFilter: '',
  priceFilterSelector: null,
  priceFilter: 0,
  singleProduct: null
};

export const productsReducer = handleActions(
  {
    [productsActions.setFetchedProducts]: (state, { payload }) => ({
      ...state,
      fetchedProducts: payload,
    }),
    [productsActions.setRenderedProducts]: (state, { payload }) => ({
      ...state,
      renderedProducts: payload,
    }),
    [productsActions.setCategories]: (state, { payload }) => ({
      ...state,
      categories: payload,
    }),
    [productsActions.setCategoryFilter]: (state, { payload }) => ({
      ...state,
      categoryFilter: payload,
    }),
    [productsActions.setPriceFilterSelector]: (state, { payload }) => ({
      ...state,
      priceFilterSelector: payload.selector,
    }),
    [productsActions.setPriceFilter]: (state, { payload }) => ({
      ...state,
      priceFilter: payload.price
    }),
    [productsActions.setSingleProduct]: (state, { payload }) => ({
      ...state,
      singleProduct: payload
    }),
  },
  initialState
);
