import { Database } from "@/shared/models";
import { SelectedProduct } from "../model";





export const isSameProductInSelected = (
  products: SelectedProduct[],
  option: Database["public"]["CompositeTypes"]["options"]
) => {
  for (var product of products) {
    if (option.color_id === product.colorId && option.size_id === product.sizeId) {
      return true;
    }
  }
  return false;
};