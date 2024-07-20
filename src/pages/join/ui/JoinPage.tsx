import { Form } from "antd";
import Title from "antd/es/typography/Title";
import { useCallback, useState } from "react";
import { useForm } from "antd/es/form/Form";

import { ProgressBar } from "@/shared/ui/footer/progressBar";
import {
  JoinAddressWidget,
  JoinIdWidget,
  JoinNameWidget,
  JoinPhoneNumWidget,
  JoinPwWidget,
} from "@/widgets/join/ui";
import { JoinStepId, JoinStepKey } from "@/widgets/join/consts";

import { JoinPageLayout } from "../layout";

export const JoinPage = () => {
  const [step, setStep] = useState<JoinStepId>(1);
  const [form] = useForm();

  const nextStepHandler = useCallback(() => {
    if (step < 5) {
      setStep((prev) => (prev + 1) as JoinStepId);
      return;
    }
  }, [setStep]);

  const transPercentByStep = (step: JoinStepId): number =>
    step * (100 / Object.keys(JoinStepKey).length);

  return (
    <JoinPageLayout>
      <Title
        style={{ textAlign: "center", fontWeight: 600, marginBottom: "40px" }}
        level={1}
      >
        회원가입
      </Title>
      <ProgressBar percent={transPercentByStep(step)} />
      <Form form={form}>
        <JoinIdWidget name={JoinStepKey[step]} onNext={nextStepHandler} />
        <JoinPwWidget name={JoinStepKey[step]} onNext={nextStepHandler} />
        <JoinNameWidget name={JoinStepKey[step]} />
        <JoinPhoneNumWidget name={JoinStepKey[step]} />
        <JoinAddressWidget name={JoinStepKey[step]} />
      </Form>
    </JoinPageLayout>
  );
};
