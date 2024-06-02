"use client";

<<<<<<< Updated upstream
import CategoryPage from "@/pages/category/ui/CategoryPage";

export default function Page() {
  return <CategoryPage />;
=======
import { Col, Row, Layout } from "antd";
import Image from "next/image";

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

const productListStyle: React.CSSProperties = {};

const productBoxStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  borderRadius: "5px",
  textAlign: "center",
};

export default function Page() {
  const { data, isSuccess } = useProductListQuery();
  const { data: categoryList, isSuccess: categoryIsSuccess } =
    useCategoryListQuery();

  if (!isSuccess && !categoryIsSuccess) {
    return <div>Loading</div>;
  }

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
          <Row gutter={[5, 20]} style={{}}>
            {data?.map((product) => (
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
                  margin: "5px",
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
          </Row>
        </Layout>
      </Layout>
    </div>
  );
>>>>>>> Stashed changes
}
