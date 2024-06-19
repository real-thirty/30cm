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
import { AddToCartButton, BuyButton } from "@/features/product/ui";

interface props {
  data: Database["public"]["CompositeTypes"]["product_details_type"];
}

const { Title } = Typography;

export function ProductDetailMain({ data }: props) {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );

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

      <ProductDetailCartBuyLayout>
        <AddToCartButton products={selectedProducts} />
        <BuyButton products={selectedProducts} />
      </ProductDetailCartBuyLayout>
    </ProductDetailMainLayout>
  );
}
