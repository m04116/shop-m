import { getProduct } from 'helpers/common';

export default function handler(req, res) {
  const productId = req.query.id;
  const product = getProduct(productId);
  
  res.status(200).json(product);
}
