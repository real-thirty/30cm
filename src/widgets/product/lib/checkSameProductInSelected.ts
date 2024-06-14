import { SelectedProduct } from "../model";





export const checkSameProductInSelected = (
  products: SelectedProduct[],
  colorId: number,
  sizedId: number
) => {
  for (var product of products) {
    if (colorId === product.colorId && sizedId === product.sizeId) {
      return true;
    }
  }
  return false;
};