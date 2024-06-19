import { CloseCircleOutlined } from "@ant-design/icons";
import { ConfigProvider, InputNumber, Table, Typography } from "antd";
import { Dispatch, SetStateAction, useCallback } from "react";

import { formatPrice } from "@/entities/product/lib";

import { SelectedProduct } from "../model";

const { Text, Title } = Typography;

interface props {
  selectedProducts: SelectedProduct[];
  onChange: Dispatch<SetStateAction<SelectedProduct[]>>;
}

export function SelectedProductsTable({ selectedProducts, onChange }: props) {
  const deleteHandler = useCallback(
    (optionId: React.Key) => {
      const newData = selectedProducts.filter(
        (product) => product.optionId !== optionId
      );
      onChange(newData);
    },
    [onChange, selectedProducts]
  );

  const amountHandler = useCallback(
    (optionId: number, value: number | null) => {
      onChange((prev) => {
        return prev.map((arr) =>
          arr.optionId === optionId ? { ...arr, quantity: Number(value) } : arr
        );
      });
    },
    [onChange]
  );

  return (
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
                onChange={(value) => amountHandler(record.optionId, value)}
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
            render: (_, record) => (
              <CloseCircleOutlined
                onClick={() => deleteHandler(record.optionId)}
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
  );
}
