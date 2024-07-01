import { JoinStepId, JoinStepKey } from "@/widgets/join/consts";
import {
  JoinAddressWidget,
  JoinIdWidget,
  JoinNameWidget,
  JoinPhoneNumWidget,
  JoinPwWidget,
} from "@/widgets/join/ui";
import { Form, Layout, Progress } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const JoinPage = () => {
  const [step, setStep] = useState<JoinStepId>(1);
  const {} = useForm();
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
        // step에 따라 percent 변경
        percent={10}
        strokeColor="black"
        showInfo={false}
        strokeLinecap="butt"
        style={{ paddingBottom: 10 }}
      />
      <Form>
        <JoinIdWidget name={JoinStepKey[step]} />
        <JoinPwWidget name={JoinStepKey[step]} />
        <JoinNameWidget name={JoinStepKey[step]} />
        <JoinPhoneNumWidget name={JoinStepKey[step]} />
        <JoinAddressWidget name={JoinStepKey[step]} />
      </Form>
    </Layout>
  );
};
