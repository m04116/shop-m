export const getFetchedProducts = (state) => state.products.fetchedProducts;
export const getRenderedProducts = (state) => state.products.renderedProducts;
export const getCategories = (state) => state.products.categories;
export const getProduct = (id) => (state) => state.products.singleProduct;
