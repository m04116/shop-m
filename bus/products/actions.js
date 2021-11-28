import { createActions } from 'redux-actions';

export const productsActions = createActions(
  {
    FETCH_PRODUCTS: undefined,
    SET_RENDERED_PRODUCTS: products => products,
    SET_FETCHED_PRODUCTS: products => products,

    FETCH_SINGLE_PRODUCT: productId => productId,
    SET_SINGLE_PRODUCT_BY_ID: productId => productId,
    SET_SINGLE_PRODUCT: product => product,
    UPDATE_PRODUCT: ({ product, successCallback }) => ({ product, successCallback }),

    FETCH_CATEGORIES: undefined,
    SET_CATEGORIES: categories => categories,

    SET_CATEGORY_FILTER: (category, type) => category,
    SET_PRICE_SELECTOR_FILTER: (selector, type) => selector,
    SET_PRICE_FILTER: (price, type) => price,

    SET_PRODUCTS_FILTER: filterParameters => filterParameters,
  },
  {
    prefix: 'products',
    namespace: '.',
  }
);
