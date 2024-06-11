import { Button, ConfigProvider, Divider, Select } from "antd";
import Title from "antd/es/typography/Title";
import { useCallback, useState } from "react";

import { formatPrice } from "@/entities/product/lib";
import { IsHeart } from "@/shared/ui";
import { Database } from "@/shared/models";
import { useProductSizeStock } from "@/entities/product/hooks";

interface props {
  data: Database["public"]["CompositeTypes"]["product_details_type"];
}

export function ProductDetailMain({ data }: props) {
  const [isHeart, setIsHeart] = useState(false);
  const [colorId, setColorId] = useState<number | null>(null);
  const { data: sizeStockData } = useProductSizeStock(data.product_id, colorId);

  // To Do: user 로그인 기능 추가 후 heart Click handling 구현
  const handleClickHeart = useCallback(() => {}, []);

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
              {data?.name}
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
          <div>{formatPrice(data?.price ?? 0)}</div>
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
            {/* To Do: 할인율 추가 후 변경 */}
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
              defaultValue="Color"
              size="large"
              options={data.colors?.map((color) => ({
                value: color.color_id,
                label: color.color_name,
              }))}
              dropdownStyle={{
                borderRadius: 0,
              }}
              onSelect={(value) => {
                setColorId(Number(value));
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
              disabled={!colorId ?? true}
              defaultValue="Size"
              size="large"
              style={{ width: "100%" }}
              onSelect={(a, b) => {
                console.log(a, b);
              }}
              onChange={(a, b) => {
                console.log(a, b);
              }}
              options={
                colorId
                  ? sizeStockData?.map((data) => ({
                      value: data.size_id,
                      label: (
                        <option
                          disabled={data.stock_quantity <= 0 ? true : false}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            {data.size_name}
                            {data.stock_quantity <= 5
                              ? `  재고: ${data.stock_quantity}`
                              : ""}
                          </span>
                        </option>
                      ),
                    }))
                  : []
              }
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
