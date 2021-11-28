import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { productsActions } from 'bus/products/actions';
import { getProduct } from 'bus/products/selectors';

export const useSingleProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector(getProduct());
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (!product) {
      dispatch(productsActions.fetchSingleProduct(id));
    }
  }, [id, product]);

  return {
    product,
  };
};
