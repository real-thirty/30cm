import { Typography } from "antd";

import { formatPrice } from "@/entities/product/lib";

import { sumSelectedProducts } from "../lib";
import { SelectedProduct } from "../model";

const { Title } = Typography;

interface props {
  selectedProducts: SelectedProduct[];
}

export function ProductDetailTotalPrice({ selectedProducts }: props) {
  return (
    <div style={{ borderTop: "2px solid black", textAlign: "end" }}>
      <Title level={2} style={{ margin: "5px 0" }}>
        {formatPrice(sumSelectedProducts(selectedProducts))}원
      </Title>
    </div>
  );
}
