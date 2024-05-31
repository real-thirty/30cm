"use client";

import { Col, Row, Layout, Pagination, Divider } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  useCategoryListQuery,
  useProductListCountQuery,
  useProductListQuery,
} from "@/entities/product/hooks/queries";

const { Sider, Content } = Layout;

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
  const { data: productList, isSuccess: productListIsSuccess } =
    useProductListQuery((nowPage - 1) * PAGESIZE, nowPage * PAGESIZE - 1);
  const { data: categoryList, isSuccess: categoryIsSuccess } =
    useCategoryListQuery();
  const { data, isSuccess } = useProductListCountQuery();

  if (!productListIsSuccess && !categoryIsSuccess && !isSuccess) {
    return <div>Loading</div>;
  }

  return (
    <div style={{ padding: "60px 50px 200px" }}>
      <Layout
        hasSider
        style={{ margin: "100px 0 0", backgroundColor: "white" }}
      >
        <Sider
          theme="light"
          style={{
            overflow: "auto",
            height: "100vh",
            scrollbarWidth: "none",
            left: 0,
            top: 0,
            bottom: 0,
            margin: "0 10px 0 0",
          }}
        >
          <div></div>
          <span style={{ fontSize: "20px" }}>남성가방</span>
          <Divider style={{ margin: "10px 0" }} />

          {categoryList?.map((category) => (
            <div
              style={{ marginTop: "16px", height: "30px" }}
              key={category.category_id}
            >
              <Link href={`/`} style={{ color: "black" }}>
                <span style={{ fontSize: "16px" }}>{category.name}</span>
              </Link>
            </div>
          ))}
        </Sider>
        <Content
          style={{
            backgroundColor: "white",
          }}
        >
          <Row gutter={[5, 20]}>
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
                  margin: "5",
                }}
              >
                <div>
                  <Link
                    href={`/product/${product.product_id}`}
                    style={{ color: "black" }}
                  >
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
                    <h1 style={{ margin: "0px" }}>{product.name}</h1>
                    <span>{product.description}</span>
                    <p>{product.price}</p>
                  </Link>
                </div>
              </Col>
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
              defaultCurrent={1}
              onChange={(page) => {
                setNowPage(page);
              }}
              showSizeChanger={false}
              total={data?.count ?? 0}
            />
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}
