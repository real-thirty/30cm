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

  const handleConfirmSelect = (
    option: Database["public"]["CompositeTypes"]["options"]
  ) => {
    setSelectedProducts((prev) => [
      ...prev,
      {
        optionId: option.option_id,
        colorId: option.color_id,
        colorName: option.color_name,
        sizeId: option.size_id,
        sizeName: option.size_name,
        stock: option.stock_quantity,
        price: data.price,
        productId: option.product_id,
        quantity: 1,
      },
    ]);
  };

  const hasProductInState = selectedProducts.length > 0;

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
        data={{ colors: data.colors, sizes: data.sizes, options: data.options }}
        selectedProducts={selectedProducts}
        onConfirmSelect={handleConfirmSelect}
      />
      <Divider style={{ marginBottom: 3 }} />

      {hasProductInState && (
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
