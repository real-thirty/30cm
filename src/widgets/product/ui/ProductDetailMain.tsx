import {
  Button,
  ConfigProvider,
  Divider,
  InputNumber,
  Select,
  Table,
  Typography,
} from "antd";
import { useCallback, useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

import { formatPrice } from "@/entities/product/lib";
import { IsHeart } from "@/shared/ui";
import { Database } from "@/shared/models";
import { useProductSizeStock } from "@/entities/product/hooks";

import { checkSameProductInSelected, sumSelectedProducts } from "../lib";
import { SelectedProduct } from "../model";

interface props {
  data: Database["public"]["CompositeTypes"]["product_details_type"];
}

interface ColorSizeState {
  colorId: number;
  colorName: string;
  sizeId: number;
  sizeName: string;
  stock: number;
}

const { Text, Title } = Typography;

const IniColorSizeState = {
  colorId: 0,
  colorName: "",
  sizeId: 0,
  sizeName: "",
  stock: 0,
};

export function ProductDetailMain({ data }: props) {
  // To Do: User 로그인 추가 후 Heart state 수정
  const [isHeart, setIsHeart] = useState(false);
  const [colorSize, setColorSize] = useState<ColorSizeState>(IniColorSizeState);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );

  const { data: sizeStockData } = useProductSizeStock(
    data.product_id,
    colorSize.colorId
  );

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
        <div style={{ display: "flex", justifyContent: "center" }}>
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
        </div>
        <div>{formatPrice(data.price)}</div>
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
              value={!colorSize.colorId ? "Color" : colorSize.colorName}
              size="large"
              options={data.colors?.map((color) => ({
                value: color.color_id,
                label: color.color_name,
              }))}
              dropdownStyle={{
                borderRadius: 0,
              }}
              onSelect={(value, label) => {
                setColorSize((prev) => ({
                  ...prev,
                  colorId: Number(value),
                  colorName: label.label,
                }));
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
              disabled={!colorSize.colorId ?? true}
              value={!colorSize.sizeId ? "Size" : colorSize.sizeName}
              size="large"
              style={{ width: "100%" }}
              onSelect={(sizeId) => {
                if (
                  checkSameProductInSelected(
                    selectedProducts,
                    colorSize.colorId,
                    Number(sizeId)
                  )
                ) {
                  alert("1");
                } else {
                  setSelectedProducts((prev) => {
                    const sizeStock = sizeStockData?.find(
                      (data) => data.size_id === Number(sizeId)
                    );
                    return [
                      ...prev,
                      {
                        key: prev.length,
                        productId: data.product_id,
                        colorId: colorSize.colorId,
                        colorName: colorSize.colorName,
                        sizeId: sizeStock!.size_id,
                        sizeName: sizeStock!.size_name,
                        price: data.price,
                        stock: sizeStock!.stock_quantity,
                        quantity: 1,
                      },
                    ];
                  });
                }
                setColorSize(IniColorSizeState);
              }}
              options={
                colorSize
                  ? sizeStockData?.map((data) => ({
                      value: data.size_id,
                      label: (
                        <option
                          disabled={data.stock_quantity <= 0 ? true : false}
                          value={data.stock_quantity}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            {data.size_name}
                            {data.stock_quantity <= 0
                              ? `  [품절]`
                              : data.stock_quantity <= 5
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
        <Divider style={{ marginBottom: 3 }} />

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
        <div style={{ borderTop: "2px solid black", textAlign: "end" }}>
          <Title level={2} style={{ margin: "5px 0" }}>
            {formatPrice(sumSelectedProducts(selectedProducts))}원
          </Title>
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
