const PRODUCT = "@product";
const CATEGORY = "@category"

export const productQueryKey = {
  product: [PRODUCT],
  getProduct: (id: string) => [PRODUCT, id],
};

