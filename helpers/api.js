const baseUrl = 'https://fakestoreapi.com';

const mockApi = process.env.NEXT_PUBLIC_API_URL;
export const getProducts = `${baseUrl}/products`;
export const getSingleProduct = (id) => `${baseUrl}/products/${id}`;
export const getSingleProductMock = (id) => `${mockApi}/product/${id}`;
export const getCategories = `${getProducts}/categories`;

