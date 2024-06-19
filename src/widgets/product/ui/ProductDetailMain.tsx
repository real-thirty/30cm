import { Button, ConfigProvider, Divider, Space, Typography } from "antd";
import { useState } from "react";

import { CustomDivider } from "@/shared/ui";
import { Database } from "@/shared/models";
import { ProductHeart } from "@/entities/product/ui";

import { SelectedProduct } from "../model";

import {
  ProductColorSizeSelects,
  ProductDetailMainLayout,
  ProductDetailTotalPrice,
  ProductDiscountPrice,
  SelectedProductsTable,
} from ".";
import { ProductDetailCartBuyLayout } from "./ProductDetailCartBuyLayout";

interface props {
  data: Database["public"]["CompositeTypes"]["product_details_type"];
}

const { Title } = Typography;

export function ProductDetailMain({ data }: props) {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );

  console.log(data);

  return (
    <ProductDetailMainLayout>
      <CustomDivider
        token={{ lineWidth: 2, colorSplit: "black" }}
        style={{ margin: 0 }}
      />
      <Space>
        <Title level={3} style={{ padding: "24px 24px 24px 0" }}>
          {data.name}
        </Title>
        <CustomDivider type="vertical" style={{ height: "100px" }} />
        <ProductHeart productId={data.product_id} />
      </Space>
      <CustomDivider />

      <ProductDiscountPrice price={data.price} />
      <ProductColorSizeSelects
        data={data}
        selectedProducts={selectedProducts}
        onSelect={setSelectedProducts}
      />
      <Divider style={{ marginBottom: 3 }} />

      {selectedProducts.length > 0 && (
        <SelectedProductsTable
          selectedProducts={selectedProducts}
          onChange={setSelectedProducts}
        />
      )}
      <ProductDetailTotalPrice selectedProducts={selectedProducts} />

      {/* // BagBuyWidget */}
      <ProductDetailCartBuyLayout>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: "green",
                colorPrimaryHover: "black",
                colorPrimaryActive: "yellow",
              },
            },
          }}
        >
          <Button size="large" style={{ width: "100%", borderRadius: 0 }}>
            장바구니
          </Button>
        </ConfigProvider>
        <Button
          size="large"
          style={{ width: "100%", borderRadius: 0, marginLeft: "5px" }}
        >
          구매하기
        </Button>
      </ProductDetailCartBuyLayout>
    </ProductDetailMainLayout>
  );
}
