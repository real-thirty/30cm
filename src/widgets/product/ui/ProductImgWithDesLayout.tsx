import { Layout } from "antd";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export function ProductImgWithDesLayout({ children }: props) {
  return (
    <Layout
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {children}
    </Layout>
  );
}
