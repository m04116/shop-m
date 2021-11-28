import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { filter } from 'lodash-es';

import { productsActions } from 'bus/products/actions';
import { getCategories, getProducts, getSingleProduct } from 'helpers/api';
import { ProductsDto } from 'dto/products.dto';
import { getFetchedProducts } from './selectors';
import { priceSelectorValues, filterPriceCallback } from 'helpers/common';

function* fetchCategories() {
  try {
    const { data } = yield call([axios, 'get'], getCategories);
    yield put(productsActions.setCategories(data));
  } catch (e) {
    console.error('-saga-fetch-categories-', e.message);
  }
}

function* fetchProducts() {
  try {
    const { data } = yield call([axios, 'get'], getProducts);
    const normalizedProductsList = data.map(product => new ProductsDto(product));
    yield put(productsActions.setFetchedProducts(normalizedProductsList));
    yield put(productsActions.setRenderedProducts(normalizedProductsList));
  } catch (e) {
    console.error('-saga-fetch-categories-', e.message);
  }
}

function* sortProducts({ payload }) {
  const { category, priceSelector, price } = payload;
  const products = yield select(getFetchedProducts);

  if (!category && !priceSelector && !price) {
    yield put(productsActions.setRenderedProducts(products));

    return;
  }

  let filteredProducts = [];
  // let filteredProducts = products; // further filter method will return new array
  if (category) {
    filteredProducts = filter(products, product => product.category === category);

    yield put(productsActions.setRenderedProducts(filteredProducts));
  }

  if (priceSelector && price) {
    const selectorValue = priceSelectorValues[priceSelector];
    const filterCallback = filterPriceCallback[selectorValue];
    const sourceProductsList = category ? filteredProducts : products;
    filteredProducts = filter(sourceProductsList, filterCallback(price));

    yield put(productsActions.setRenderedProducts(filteredProducts));
  }
}

function* fetchSingleProduct({ payload: productId }) {
  try {
    const { data } = yield call([axios, 'get'], getSingleProduct(productId));

    const normalizedProduct = new ProductsDto(data);
    yield put(productsActions.setSingleProduct(normalizedProduct));
  } catch (e) {
    console.error('-saga-fetch-categories-', e.message);
  }
}

function* setSingleProductById({ payload }) {
  const { id: productId, successCallback } = payload;
  const products = yield select(getFetchedProducts);
  const singleProduct = products.find(product => product.id == productId);

  yield put(productsActions.setSingleProduct(singleProduct));
  yield call(successCallback);
}

function* updateProduct({ payload }) {
  const { product, successCallback } = payload;
  try {
    const { status } = yield call([axios, 'put'], getSingleProduct(product.id), product);

    if (status === 200) {
      yield call(successCallback);
    }
  } catch (e) {
    console.error('--update-product--', e);
  }
}

export default [
  takeLatest(productsActions.fetchProducts, fetchProducts),
  takeLatest(productsActions.fetchCategories, fetchCategories),
  takeLatest(productsActions.setProductsFilter, sortProducts),
  takeLatest(productsActions.fetchSingleProduct, fetchSingleProduct),
  takeLatest(productsActions.setSingleProductById, setSingleProductById),
  takeLatest(productsActions.updateProduct, updateProduct),
];
