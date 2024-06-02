import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Layout, Pagination, Row } from "antd";
import Content from "antd/es/layout";

import { Database } from "@/shared/models";

interface props {
  products: Database["public"]["Tables"]["products"]["Row"][];
  totalSize: number | null;
  setNowPage: Dispatch<SetStateAction<number>>;
}

export function ProductListInLayout({
  products,
  totalSize,
  setNowPage,
}: props) {
  return (
    <Content
      style={{
        backgroundColor: "white",
      }}
    >
      <Row gutter={[5, 20]}>
        {products?.map((product) => (
          <Col
            key={product.product_id}
            xs={{ flex: "100%" }}
            sm={{ flex: "60%" }}
            md={{ flex: "40%" }}
            lg={{ flex: "20%" }}
            xl={{ flex: "10%" }}
            style={{
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              borderRadius: "7px",
              margin: "5",
            }}
          >
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
          total={totalSize ?? 0}
        />
      </Layout>
    </Content>
  );
}
