import { Container, Paper } from '@mui/material';

import { useFetchProducts, useProducts } from 'commonHooks/productsHooks';

import { FilterBar } from 'components/FilterBar';
import { ProductsList } from 'components/ProductsList';
import { Loader } from 'components/Loader';

import styles from 'styles/Home.module.scss';

export default function Products() {
  useFetchProducts();
  const { categories, products } = useProducts();
  
  if (!categories.length || !products.length) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <Container sx={{ mt: 5 }}>
        <Paper sx={{ height: 90, display: 'flex', alignItems: 'center' }}>
          <FilterBar categories={categories} />
        </Paper>

        <Paper sx={{ mt: 3, p: 3, width: '100%', overflow: 'hidden' }}>
          <ProductsList productsList={products} />
        </Paper>
      </Container>
    </div>
  );
}
