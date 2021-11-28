import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { headCells, columnWidth } from './tableStuff';
import routesList from 'helpers/routesList';
import { productsActions } from 'bus/products/actions';
import Image from 'next/image';

const TableHeader = () => {
  return (
    <TableHead sx={{ pl: 1 }}>
      <TableRow>
        {headCells.map((headCell, i) => (
          <TableCell key={headCell.id} align={headCell.numeric ? 'right' : 'left'} sx={{ minWidth: columnWidth[i] }}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const ProductsList = ({ productsList }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const redirectToDetail = id => () => {
    const successCallback = () => router.push(routesList.productDetail(id));
    dispatch(productsActions.setSingleProductById({ id, successCallback }));
  };

  return (
    <TableContainer sx={{ height: 777 }}>
      <Table stickyHeader aria-label="sticky table" size="medium" sx={{ minWidth: 750 }}>
        <TableHeader />
        <TableBody>
          {productsList.map(({ id, image, category, description, price }) => (
            <TableRow onClick={redirectToDetail(id)} hover sx={{ ':hover': { cursor: 'pointer' } }} key={id}>
              <TableCell>
                <Box sx={{ width: 40, height: 70, position: 'relative' }}>
                  <Image src={image} layout="fill" objectFit="contain" alt="product image" />
                </Box>
              </TableCell>
              <TableCell>{category}</TableCell>
              <TableCell sx={{ maxWidth: 400 }}>{description}</TableCell>
              <TableCell align="right">{price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
