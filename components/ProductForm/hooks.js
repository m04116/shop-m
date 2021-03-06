import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { productsActions } from 'bus/products/actions';
import routesList from 'helpers/routesList';

export const useProductForm = product => {
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { price, title, description } = product;
  
  const {
    control,
    reset,
    handleSubmit,
    formState: { isDirty },
  } = useForm({ defaultValues: { price, title, description } });

  const toggleEditMode = useCallback(() => setIsEditMode(current => !current), [setIsEditMode]);

  const handleCancel = useCallback(() => {
    reset();
    toggleEditMode();
  }, [reset, toggleEditMode]);

  const submitForm = useCallback(values => {
    const successCallback = () => router.push(routesList.allProducts);
    const updatedProduct = {
      ...product,
      ...values,
    };
    dispatch(productsActions.updateProduct({ product: updatedProduct, successCallback }));
  }, [dispatch, product, router]);

  return {
    isEditMode,
    toggleEditMode,
    handleCancel,
    control,
    onSubmit: handleSubmit(submitForm),
    isDirty,
  };
};
