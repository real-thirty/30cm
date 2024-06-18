import {
  Button,
  ConfigProvider,
  Divider,
  InputNumber,
  Space,
  Table,
  Typography,
} from "antd";
import { useCallback, useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

import { formatPrice } from "@/entities/product/lib";
import { CustomDivider, IsHeart } from "@/shared/ui";
import { Database } from "@/shared/models";
import { ProductColorSizeSelects } from "@/entities/product/ui";

import { sumSelectedProducts } from "../lib";
import { SelectedProduct } from "../model";

import { ProductDetailMainLayout } from ".";

interface props {
  data: Database["public"]["CompositeTypes"]["product_details_type"];
}

const { Text, Title } = Typography;

export function ProductDetailMain({ data }: props) {
  // To Do: User 로그인 추가 후 Heart state 수정
  const [isHeart, setIsHeart] = useState(false);

  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );

  console.log(data);

  // To Do: user 로그인 기능 추가 후 heart Click handling 구현
  const handleClickHeart = useCallback(() => {}, []);

  return (
    <ProductDetailMainLayout>
      <CustomDivider token={{ lineWidth: 2, colorSplit: "black" }} />
      <Space>
        <Title level={3} style={{ padding: "24px 24px 24px 0" }}>
          {data.name}
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
      </Space>

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
        <div>
          <ProductColorSizeSelects
            data={data}
            selectedProducts={selectedProducts}
            onSelect={setSelectedProducts}
          />
        </div>
        <Divider style={{ marginBottom: 3 }} />
        {/* // SelectedProductsTable */}
        {selectedProducts.length > 0 && (
          <ConfigProvider
            theme={{
              token: { padding: 10 },
              components: {
                InputNumber: {
                  controlWidth: 70,
                  activeBorderColor: "black",
                  hoverBorderColor: "black",
                  handleHoverColor: "black",
                  paddingBlock: 4,
                  handleVisible: true,
                  activeShadow: "transparent",
                  borderRadius: 3,
                },
              },
            }}
          >
            <Table
              showHeader={false}
              rowHoverable={false}
              columns={[
                {
                  title: "name",
                  key: "name",
                  dataIndex: "name",
                  align: "left",
                  width: 150,
                  render: (value) => <Text strong>{value}</Text>,
                },
                {
                  title: "quantity",
                  key: "quantity",
                  dataIndex: "quantity",
                  align: "center",
                  render: (_, record) => (
                    <InputNumber
                      onChange={(value) => {
                        setSelectedProducts((prev) => {
                          return prev.map((arr) =>
                            arr.key === record.key
                              ? { ...arr, quantity: Number(value) }
                              : arr
                          );
                        });
                      }}
                      min={1}
                      max={record.stock}
                      defaultValue={1}
                    />
                  ),
                },
                {
                  title: "price",
                  key: "price",
                  align: "center",
                  dataIndex: "price",
                },
                {
                  title: "delete",
                  key: "delete",
                  align: "center",
                  render: (_, record, idx) => (
                    <CloseCircleOutlined
                      onClick={() =>
                        setSelectedProducts((prev) => [
                          ...prev.slice(0, idx),
                          ...prev.slice(idx + 1, prev.length),
                        ])
                      }
                      style={{ cursor: "pointer" }}
                    />
                  ),
                },
              ]}
              dataSource={selectedProducts.map((product) => ({
                ...product,
                name: `${product.colorName} & ${product.sizeName}`,
                price: `${formatPrice(product.price)}원`,
              }))}
              pagination={false}
            />
          </ConfigProvider>
        )}
        {/* // TotalPrice */}
        <div style={{ borderTop: "2px solid black", textAlign: "end" }}>
          <Title level={2} style={{ margin: "5px 0" }}>
            {formatPrice(sumSelectedProducts(selectedProducts))}원
          </Title>
        </div>
        {/* // BagBuyWidget */}
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
    </ProductDetailMainLayout>
  );
}
