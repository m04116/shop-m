import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { productsActions } from 'bus/products/actions';

export const useFilterBar = () => {
  const savedFilterParameters = useRef(JSON.parse(localStorage.getItem('filterParameters')));
  const dispatch = useDispatch();
  const { control, watch, setValue } = useForm({
    defaultValues: {
      category: savedFilterParameters.current?.category ?? '',
      priceSelector: savedFilterParameters.current?.priceSelector ?? '',
      price: savedFilterParameters.current?.price ?? '',
    },
  });
  const categoryWatch = watch('category');
  const priceSelectorWatch = watch('priceSelector');
  const priceWatch = watch('price');

  useEffect(
    () => dispatch(productsActions.setProductsFilter({ category: categoryWatch, priceSelector: priceSelectorWatch, price: priceWatch })),
    [categoryWatch, dispatch, priceSelectorWatch, priceWatch]
  );

  const resetValue = useCallback(name => () => {
    setValue(name, '');
    localStorage.setItem('filterParameters', JSON.stringify({
      ...savedFilterParameters.current,
      [name]: ''
    }));
  }, [setValue]);

  return {
    control,
    resetValue,
  };
};
