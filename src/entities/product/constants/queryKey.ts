const PRODUCT = "@product";
const IMAGE = "@image"
export const productQueryKey = {
  product: [PRODUCT],
  getProduct: (id: string) => [PRODUCT, id],
  getProductList: (from:number, to:number) => [PRODUCT, from, to],
  getProductImages: (productId: string) => [IMAGE, productId],
  getProductSizeStock: (productId: number, colorId:number|null) => [PRODUCT, productId, colorId]

};

