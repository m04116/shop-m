import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { productsActions } from 'bus/products/actions';

export const useFilterBar = () => {
  const dispatch = useDispatch();
  const { control, watch, register, setValue } = useForm({ defaultValues: { category: '', priceSelector: '', price: '' } });
  const categoryWatch = watch('category');
  const priceSelectorWatch = watch('priceSelector');
  const priceWatch = watch('price');

  useEffect(
    () => dispatch(productsActions.setProductsFilter({ category: categoryWatch, priceSelector: priceSelectorWatch, price: priceWatch })),
    [categoryWatch, dispatch, priceSelectorWatch, priceWatch]
  );

  const resetValue = useCallback(name => () => setValue(name, ''), [setValue]);

  return {
    control,
    resetValue,
  };
};
