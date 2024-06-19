import { SelectedProduct } from "@/widgets/product/model";
import { Button } from "antd";
import { useCallback } from "react";

interface props {
  products: SelectedProduct[];
}

export function BuyButton({ products }: props) {
  const handleClick = useCallback(() => {}, []);
  return (
    <Button
      size="large"
      style={{ width: "100%", borderRadius: 0, marginLeft: "5px" }}
      onClick={handleClick}
    >
      구매하기
    </Button>
  );
}
