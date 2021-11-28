import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { productsActions } from 'bus/products/actions';
import {getRenderedProducts, getCategories} from 'bus/products/selectors';

export const useFetchProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.fetchCategories());
    dispatch(productsActions.fetchProducts());
  }, []);
};

export const useProducts = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const products = useSelector(getRenderedProducts);
  
  return {
    categories,
    products
  }
};
