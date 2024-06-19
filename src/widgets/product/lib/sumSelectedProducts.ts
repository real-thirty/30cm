import { SelectedProduct } from "../model";






export const sumSelectedProducts = (products: SelectedProduct[]) => {
  return products.reduce(
    (ini, product) => ini + product.quantity * product.price,
    0
  );
};