const PRODUCT = "@product";

export const productQueryKey = {
  product: [PRODUCT],
  getProduct: (id: string) => [PRODUCT, id],
  getProductList: (from:number, to:number) => [PRODUCT, from, to]
};

