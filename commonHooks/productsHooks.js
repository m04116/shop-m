import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { productsActions } from 'bus/products/actions';
import {getRenderedProducts, getCategories, getFetchedProducts} from 'bus/products/selectors';

export const useFetchProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.fetchCategories());
    dispatch(productsActions.fetchProducts());
  }, []);
};

export const useProducts = () => {
  const categories = useSelector(getCategories);
  const products = useSelector(getRenderedProducts);
  const fetchedProducts = useSelector(getFetchedProducts);
  
  const isLoading = !categories.length || !fetchedProducts.length;
  
  return {
    categories,
    products,
    isLoading
  }
};
