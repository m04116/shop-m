import { IconButton, FormControl, Grid, InputLabel, MenuItem, Select, OutlinedInput } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import { useFilterBar } from './hooks';
import { priceSelectorList, priceSelectorValues } from 'helpers/common';

const CustomSelect = ({ name, itemsList, field, handleClick }) => (
  <Grid container gap={1}>
    <InputLabel id={`${name}-select-label`}>{name}</InputLabel>
    <Select labelId={`${name}-select-label`} id={`${name}-select`} label={name} sx={{ flexGrow: 1, textTransform: 'capitalize' }} {...field}>
      {itemsList.map(item => (
        <MenuItem value={item} sx={{ textTransform: 'capitalize' }} key={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
    <IconButton sx={{ width: 58 }} onClick={handleClick} color="info" disabled={!Boolean(field.value)}>
      <HighlightOffIcon />
    </IconButton>
  </Grid>
);

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  itemsList: PropTypes.array.isRequired,
  field: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

const CustomInput = ({ name, field, handleClick }) => (
  <Grid container gap={1}>
    <InputLabel id="price-label">{name}</InputLabel>
    <OutlinedInput id="component-outlined" label={name} type="number" {...field} />
    <IconButton sx={{ width: 58 }} onClick={handleClick} color="info" disabled={!Boolean(field.value)}>
      <HighlightOffIcon />
    </IconButton>
  </Grid>
);

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export const FilterBar = ({ categories }) => {
  const { control, resetValue } = useFilterBar();

  const renderSelect = (name, itemsList) => ({ field }) => <CustomSelect name={name} itemsList={itemsList} field={field} handleClick={resetValue(field.name)} />;
  const renderInput = ({ field }) => <CustomInput name="Price" field={field} handleClick={resetValue('price')} />;

  return (
    <Grid container justifyContent="center" gap={5}>
      <FormControl sx={{ width: 320 }}>
        <Controller name="category" control={control} render={renderSelect('Categories', categories)} />
      </FormControl>
      <FormControl sx={{ width: 230 }}>
        <Controller name="priceSelector" control={control} render={renderSelect('Price Selector', priceSelectorList)} />
      </FormControl>
      <FormControl>
        <Controller name="price" control={control} render={renderInput} />
      </FormControl>
    </Grid>
  );
};
