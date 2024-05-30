"use client";

import { Col, Row, Layout, Pagination } from "antd";
import Image from "next/image";
import { useState } from "react";

import {
  useCategoryListQuery,
  useProductListQuery,
} from "@/entities/product/hooks/queries";

const { Sider } = Layout;

const sortStyle: React.CSSProperties = {
  flex: 1,
  padding: "20px",
  boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
};
const PAGESIZE = 8;

const productBoxStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  borderRadius: "5px",
  textAlign: "center",
};

export default function Page() {
  const [nowPage, setNowPage] = useState(1);
  const { data: productList, isSuccess } = useProductListQuery(
    (nowPage - 1) * PAGESIZE,
    nowPage * PAGESIZE - 1
  );
  const { data: categoryList, isSuccess: categoryIsSuccess } =
    useCategoryListQuery();

  if (!isSuccess && !categoryIsSuccess) {
    return <div>Loading</div>;
  }
  console.log("렌더링");
  return (
    <div style={{ padding: "60px 50px 200px" }}>
      <span style={{ fontSize: "14px 0 0" }}>남성가방</span>
      <Layout hasSider style={{ margin: "20px 0 0", backgroundColor: "white" }}>
        <Sider
          theme="light"
          style={{
            overflow: "auto",
            height: "100vh",
            scrollbarWidth: "none",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          {categoryList?.map((category) => (
            <div
              style={{ marginTop: "16px", height: "300px" }}
              key={category.category_id}
            >
              <span style={{ fontSize: "16px" }}>{category.name}</span>
            </div>
          ))}
        </Sider>
        <Layout style={{ flex: 4, backgroundColor: "white" }}>
          <Row gutter={[5, 20]} style={{ justifyContent: "center" }}>
            {productList?.map((product) => (
              <Col
                key={product.product_id}
                xs={{ flex: "100%" }}
                sm={{ flex: "50%" }}
                md={{ flex: "40%" }}
                lg={{ flex: "20%" }}
                xl={{ flex: "10%" }}
                style={{
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  borderRadius: "7px",
                  margin: "5px 0 0",
                }}
              >
                <div>
                  <Image
                    src={product.image ?? ""}
                    alt=""
                    width={200}
                    height={200}
                    style={{
                      borderRadius: "7px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    }}
                  />
                  <h1>{product.name}</h1>
                  <span>{product.description}</span>
                  <p>{product.price}</p>
                </div>
              </Col>
            ))}
            <Pagination
              defaultCurrent={1}
              onChange={(page) => {
                setNowPage(page);
              }}
              showSizeChanger={false}
              total={50}
            />
          </Row>
        </Layout>
      </Layout>
    </div>
  );
}
