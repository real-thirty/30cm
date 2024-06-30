import { Divider, Layout } from "antd";

import { useProductDetailQuery } from "@/entities/product/hooks";
import { ProductDetailCarousel, ProductDetailMain } from "@/widgets/product/ui";
import { ProductDescription } from "@/entities/product/ui";

interface props {
  params: {
    product_id: string;
  };
}

export function ProductDetailPage({ params }: props) {
  const { product_id: productId } = params;
  const { data } = useProductDetailQuery(productId);

  return (
    <Layout
      style={{
        margin: "100px 0 0",
        padding: "40px 50px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ProductDetailCarousel images={data.images} />

        <ProductDetailMain data={data} />
      </div>
      <Divider />
      <ProductDescription data={data} />
    </Layout>
  );
}
