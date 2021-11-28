const baseUrl = 'https://fakestoreapi.com';

export const getProducts = `${baseUrl}/products`;
export const getSingleProduct = (id) => `${baseUrl}/products/${id}`;
export const getCategories = `${getProducts}/categories`;

