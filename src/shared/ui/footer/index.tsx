import { Layout } from "antd";

const { Footer: AntdFooter } = Layout;

export const Footer = () => {
  return (
    <AntdFooter style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </AntdFooter>
  );
};
