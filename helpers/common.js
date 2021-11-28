export const priceSelectorList = ['Less than', 'Equal', 'Greater than'];

export const priceSelectorValues = {
  'Less than': 'lt',
  Equal: 'eq',
  'Greater than': 'gt',
};

export const filterPriceCallback = {
  gt: value => ({ price }) => price > value,
  lt: value => ({ price }) => price < value,
  eq: value => ({ price }) => price == value,
};

export const getLayoutTitle = (route = '') => {
  if (route.includes('product')) {
    return 'Product Detail Page'
  }
  
  return 'Products Page'
}
