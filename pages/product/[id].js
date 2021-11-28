import { Paper } from '@mui/material';
import axios from 'axios';

import { getSingleProduct } from 'helpers/api';

import { ProductForm } from 'components/ProductForm';
import { Loader } from 'components/Loader';

export default function ProductDetail({ product }) {
  if (!product) {
    return <Loader />;
  }

  return (
    <Paper sx={{ p: 8, maxWidth: 920, margin: '80px auto 0' }}>
      <ProductForm product={product} />
    </Paper>
  );
}

export async function getStaticPaths() {
  return {
    paths: ['/product/id'],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const productId = context?.params?.id;
  try {
    const { data } = await axios.get(getSingleProduct(productId));

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { product: data },
    };
  } catch (e) {
    console.error('--SSR-fetch-product--', e);
  }
}
