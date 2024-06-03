"use client";

import { ProductDetailPage } from "@/pages/product/ui/ProductDetailPage";

interface props {
  params: {
    product_id: string;
  };
}

export default function Page(props: props) {
  return <ProductDetailPage {...props} />;
}
