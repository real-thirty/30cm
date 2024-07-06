import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";

import { JoinStepType } from "../consts";
import { usePwValidate } from "../hooks";

interface props {
  name: JoinStepType;
  onNext: () => void;
}

export const JoinPwWidget = ({ name, onNext }: props) => {
  const {
    pwLenValidate,
    pwIncludeNumValidate,
    pwIncludeSpecialValidate,
    pwIncludeUpperLowerEngValidate,
    confimrPwValidate,
    canNext,
  } = usePwValidate();

  if (name !== JoinStepType["PASSWORD"]) {
    return null;
  }

  return (
    <div>
      <Title level={4} style={{ marginBottom: "50px" }}>
        로그인에 사용할 비밀번호를 입력해주세요.
      </Title>
      <div style={{ marginBottom: "30px" }}>
        {/* 유효성검사 하단에 미리표시 */}
        <Form.Item
          name="PASSWORD"
          dependencies={["CONFIRMPASSWORD"]}
          rules={[
            {
              validator: pwLenValidate,
            },
            {
              validator: pwIncludeNumValidate,
            },
            {
              validator: pwIncludeSpecialValidate,
            },
            {
              validator: pwIncludeUpperLowerEngValidate,
            },
          ]}
        >
          <Input.Password
            size="large"
            placeholder="비밀번호 입력"
            style={{ borderRadius: 0 }}
          />
        </Form.Item>
      </div>
      <div style={{ marginBottom: "30px" }}>
        {/* 유효성검사 하단에 미리표시 */}
        <Form.Item
          name="CONFIRMPASSWORD"
          dependencies={["PASSWORD"]}
          rules={[{ validator: confimrPwValidate }]}
        >
          <Input.Password
            size="large"
            placeholder="비밀번호 확인"
            style={{ borderRadius: 0 }}
          />
        </Form.Item>
      </div>
      <Button
        disabled={!canNext}
        onClick={onNext}
        block
        size="large"
        style={{ borderRadius: 0 }}
      >
        다음
      </Button>
    </div>
  );
};
