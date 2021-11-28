import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

import { useProductForm } from './hooks';

const renderInput =
  ({ disabled, type = 'text', multiline = false }) =>
  ({ field }) =>
    <TextField disabled={disabled} type={type} multiline={multiline} sx={{ flexGrow: 1 }} {...field} />;

export const ProductForm = ({ product }) => {
  const { isEditMode, toggleEditMode, handleCancel, control, onSubmit, isDirty } = useProductForm(product);
  const { image, title, description, price } = product;

  const buttonsJustify = isEditMode ? 'flex-end' : 'flex-start';

  return (
    <form onSubmit={onSubmit}>
      <Grid container gap={10}>
        <Box sx={{ width: 150, flexGrow: 1 }}>
          <img src={image} height={120} alt="product-image" />
        </Box>
        <Box display="flex" alignItems="center" sx={{ width: 560 }}>
          <Typography variant="h5" sx={{ mr: 3 }}>
            Price:
          </Typography>
          <Controller name="price" defaultValue={price} control={control} render={renderInput({ disabled: !isEditMode, type: 'number' })} />
        </Box>
      </Grid>
      <Grid container mt={12} pl={8} gap={4}>
        <Typography variant="h5" sx={{ width: 200, textAlign: 'right' }}>
          Title:
        </Typography>
        <Controller name="title" defaultValue={title} control={control} render={renderInput({ disabled: !isEditMode })} />
      </Grid>

      <Grid container mt={8} pl={8} gap={4}>
        <Typography variant="h5" sx={{ width: 200, textAlign: 'right' }}>
          Description:
        </Typography>
        <Controller name="description" defaultValue={description} control={control} render={renderInput({ disabled: !isEditMode, multiline: true })} />
      </Grid>

      <Grid container mt={15} gap={3} sx={{ justifyContent: buttonsJustify }}>
        {!isEditMode ? (
          <Button onClick={toggleEditMode} variant="contained">
            Edit
          </Button>
        ) : (
          <>
            <Button onClick={handleCancel} color="secondary" variant="contained">
              Cancel
            </Button>
            <Button disabled={!isDirty} type="submit" color="success" variant="contained">
              Save
            </Button>
          </>
        )}
      </Grid>
    </form>
  );
};
