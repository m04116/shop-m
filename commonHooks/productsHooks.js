import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { productsActions } from 'bus/products/actions';
import { getRenderedProducts, getCategories, getFetchedProducts, getProduct } from 'bus/products/selectors';

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
    isLoading,
  };
};

export const useSingleProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector(getProduct());
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (!product && id) {
      dispatch(productsActions.fetchSingleProduct(id));
    }
  }, [dispatch, id, product]);

  const isLoading = !product || !id;

  return {
    product,
    isLoading,
  };
};
