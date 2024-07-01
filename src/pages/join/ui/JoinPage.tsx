import {
  JoinAddressWidget,
  JoinIdWidget,
  JoinNameWidget,
  JoinPhoneNumWidget,
  JoinPwWidget,
} from "@/widgets/join/ui";
import { Button, Input, Layout, Progress } from "antd";
import Title from "antd/es/typography/Title";

export const JoinPage = () => {
  return (
    <Layout
      style={{ maxWidth: "450px", margin: "0 auto", padding: "50px 0 200px" }}
    >
      <Title
        style={{ textAlign: "center", fontWeight: 600, marginBottom: "40px" }}
        level={1}
      >
        회원가입
      </Title>
      <Progress
        percent={10}
        strokeColor="black"
        showInfo={false}
        strokeLinecap="butt"
        style={{ paddingBottom: 10 }}
      />
      <JoinIdWidget />
      <JoinPwWidget />
      <JoinNameWidget />
      <JoinPhoneNumWidget />
      <JoinAddressWidget />
    </Layout>
  );
};
