import {
  ProductDetailMainLayout,
  ProductImgWithDesLayout,
} from "@/widgets/product";

interface props {
  params: {
    product_id: string;
  };
}

export function ProductDetailPage({ params }: props) {
  return (
    <ProductDetailMainLayout>
      <ProductImgWithDesLayout>
        <div>123123</div>
      </ProductImgWithDesLayout>
    </ProductDetailMainLayout>
  );
}
