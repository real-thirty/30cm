import { Divider, Layout, Typography } from "antd";

import { useProductDetailQuery } from "@/entities/product/hooks";
import { ProductsWithImages } from "@/entities/product/models";
import { ProductDetailCarousel, ProductDetailMain } from "@/widgets/product/ui";

interface props {
  params: {
    product_id: string;
  };
}

const { Text, Title } = Typography;

export function ProductDetailPage({ params }: props) {
  const { product_id: productId } = params;
  const { data, isSuccess } = useProductDetailQuery(productId);
  const productImgData: ProductsWithImages = data;
  const imgs = productImgData?.data?.images;

  if (!isSuccess || !productImgData?.data?.images) {
    return <div>loading</div>;
  }
  return (
    <Layout
      style={{
        margin: "100px 0 0",
        padding: "40px 50px 0",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ProductDetailCarousel images={imgs} />
        <ProductDetailMain data={productImgData} />

        {/* <div style={{ padding: "0 0 0 45px" }}>
          <div
            style={{
              borderTop: "2px solid rgb(0, 0, 0)",
              borderBottom: "1px solid rgb(244, 244, 244)",
              paddingBottom: "16px",
            }}
          >
            <div style={{ boxSizing: "border-box" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Title level={3} style={{ padding: "24px 24px 24px 0" }}>
                  {productImgData.data?.name}
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexShrink: 0,
                    justifyContent: "center",
                    alignContent: "center",
                    width: "85px",
                    borderLeft: "1px solid rgb(228, 228, 228)",
                  }}
                >
                  <HeartOutlined
                    twoToneColor="pink"
                    style={{
                      cursor: "pointer",
                      fontSize: "26px",
                    }}
                  />
                </div>
              </div>
              <div>{formatPrice(productImgData.data?.price ?? "0")}</div>
            </div>
          </div>
          <div
            style={{
              padding: "20px 0",
              borderTop: "1px solid rgb(244, 244, 244)",
              boxSizing: "border-box",
            }}
          >
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
        </div> */}
      </div>
      <Divider />
    </Layout>
  );
}
