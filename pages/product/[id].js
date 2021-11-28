import { Paper } from '@mui/material';

import { useSingleProduct } from 'commonHooks/productsHooks';

import { ProductForm } from 'components/ProductForm';
import { Loader } from 'components/Loader';

export default function ProductDetail() {
  const { product, isLoading } = useSingleProduct();
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Paper sx={{ p: 8, maxWidth: 920, margin: '80px auto 0' }}>
      <ProductForm product={product} />
    </Paper>
  );
}

