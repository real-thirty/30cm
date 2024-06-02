import { Layout } from "antd";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export function CategoryLayout({ children }: props) {
  return (
    <Layout hasSider style={{ margin: "100px 0 0", backgroundColor: "white" }}>
      {children}
    </Layout>
  );
}
