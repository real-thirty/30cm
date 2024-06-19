import { SelectedProduct } from "@/widgets/product/model";
import { Button, ConfigProvider } from "antd";

interface props {
  products: SelectedProduct[];
}

export function AddToCartButton({ products }: props) {
  return (
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
  );
}
