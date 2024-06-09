import { Button, ConfigProvider, Divider, Select } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";

import { formatPrice } from "@/entities/product/lib";
import { ProductsWithImages } from "@/entities/product/models";
import { IsHeart } from "@/shared/ui";

interface props {
  data?: ProductsWithImages;
}

export function ProductDetailMain({ data }: props) {
  const [isHeart, setIsHeart] = useState(false);

  const productData = data?.data;

  return (
    <div style={{ padding: "0 0 0 45px" }}>
      <ConfigProvider
        theme={{
          token: {
            lineWidth: 2,
            colorSplit: "black",
          },
        }}
      >
        <Divider style={{ margin: 0 }} />
      </ConfigProvider>
      <div
        style={{
          paddingBottom: "16px",
        }}
      >
        <div style={{ boxSizing: "border-box" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title level={3} style={{ padding: "24px 24px 24px 0" }}>
              {productData?.name}
            </Title>
            <Divider type="vertical" style={{ height: "100px" }} />
            <div
              style={{
                display: "flex",
                flexShrink: 0,
                justifyContent: "center",
                alignItems: "center",
                width: "85px",
              }}
            >
              <IsHeart isHeart={isHeart} onChange={setIsHeart} />
            </div>
          </div>
          <div>{formatPrice(productData?.price ?? "0")}</div>
        </div>
      </div>

      <Divider />

      <div
        style={{
          padding: "20px 0",
          boxSizing: "border-box",
        }}
      >
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>나의 가격</p>
          </div>
          <div>
            <p>10,000원</p>
          </div>
        </div>
        <div style={{ lineHeight: "0" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "4px",
            }}
          >
            <Select
              defaultActiveFirstOption={true}
              defaultValue="Size"
              size="large"
              options={[
                { value: "black", label: "Black" },
                { value: "blue", label: "Blue" },
                { value: "red", label: "Red" },
                { value: "white", label: "White" },
              ]}
              dropdownStyle={{
                borderRadius: 0,
              }}
              onChange={(value: string) => {
                console.log(value);
              }}
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <Select
              defaultValue="Size"
              size="large"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "16px",
          }}
        >
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
        </div>
      </div>
    </div>
  );
}
