import { Layout } from "antd";
import React from "react";

export const JoinPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout
      style={{ maxWidth: "450px", margin: "0 auto", padding: "50px 0 200px" }}
    >
      {children}
    </Layout>
  );
};
