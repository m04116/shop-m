import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { headCells, columnWidth } from './tableStuff';
import routesList from 'helpers/routesList';
import { productsActions } from "bus/products/actions";

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
    dispatch(productsActions.setSingleProductById(id))
    router.push(routesList.productDetail(id));
  };

  return (
    <TableContainer sx={{ height: 777 }}>
      <Table stickyHeader aria-label="sticky table" size="medium" sx={{ minWidth: 750 }}>
        <TableHeader />
        <TableBody>
          {productsList.map(({ id, image, category, description, price }) => (
            <TableRow onClick={redirectToDetail(id)} hover sx={{ ':hover': { cursor: 'pointer' } }} key={id}>
              <TableCell>
                <img src={image} width={40} alt="product image" />
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
