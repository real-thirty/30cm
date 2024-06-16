"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ProductDetailPage } from "@/pages/product/ui/ProductDetailPage";

interface props {
  params: {
    product_id: string;
  };
}

export default function Page(props: props) {
  return (
    <ErrorBoundary fallback={<div>wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetailPage {...props} />;
      </Suspense>
    </ErrorBoundary>
  );
}
