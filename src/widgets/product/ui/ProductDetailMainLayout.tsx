import { Layout } from "antd";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export function ProductDetailMainLayout({ children }: props) {
  return (
    <Layout
      style={{
        margin: "100px 0 0",
        padding: "40px 50px 0",
        backgroundColor: "white",
      }}
    >
      {children}
    </Layout>
  );
}
