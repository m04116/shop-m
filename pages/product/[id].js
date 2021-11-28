import { Paper } from '@mui/material';

import { useSingleProduct } from './hooks';

import { ProductForm } from 'components/ProductForm';
import { Loader } from 'components/Loader';

export default function ProductDetail() {
  const { product } = useSingleProduct();
  
  if (!product) {
    return <Loader />;
  }

  return (
    <Paper sx={{ p: 8, maxWidth: 920, margin: '80px auto 0' }}>
      <ProductForm product={product} />
    </Paper>
  );
}

