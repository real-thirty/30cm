import { Layout } from "antd";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export default function ProductImgWithDesLayout({ children }: props) {
  return (
    <Layout
      style={{
        backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {children}
    </Layout>
  );
}
