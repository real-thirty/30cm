import { Dispatch, SetStateAction } from "react";
import { Layout, Pagination, Row } from "antd";
import Content from "antd/es/layout";

import { ProductCardInList } from "@/entities/product/ui";
import { Tables } from "@/shared/models";

interface props {
  products?: Array<Tables<"products">> | null;
  totalSize?: number | null;
  onChange: Dispatch<SetStateAction<number>>;
  nowPage: number;
}

export const ProductListInCategoryLayout = ({
  products,
  totalSize,
  nowPage,
  onChange,
}: props) => {
  return (
    <Content
      style={{
        backgroundColor: "white",
      }}
    >
      <Row gutter={[5, 20]}>
        {products?.map((product) => (
          <ProductCardInList key={product.product_id} product={product} />
        ))}
      </Row>
      <Layout
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Pagination
          current={nowPage}
          onChange={(page) => {
            onChange(page);
          }}
          showSizeChanger={false}
          total={totalSize ?? 0}
        />
      </Layout>
    </Content>
  );
};
