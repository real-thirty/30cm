import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import { JoinStepType } from "../consts";
import { useCallback, useState } from "react";
import { RuleObject } from "antd/es/form";

interface props {
  name: JoinStepType;
  onNext: () => void;
}

export const JoinIdWidget = ({ name, onNext }: props) => {
  if (name !== JoinStepType["ID"]) {
    return null;
  }
  const [canNext, setCanNext] = useState(false);

  const emailValidate = useCallback(
    (_: RuleObject, value: string): Promise<void> => {
      if (new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(value)) {
        setCanNext(true);
        return Promise.resolve();
      }
      setCanNext(false);
      return Promise.reject(new Error("이메일 양식으로 작성해주세요."));
    },
    [setCanNext]
  );

  return (
    <>
      <Title level={4} style={{ marginBottom: "50px" }}>
        로그인에 사용할 이메일을 입력해주세요.
      </Title>
      <div style={{ marginBottom: "40px" }}>
        <Form.Item
          name="id"
          validateDebounce={500}
          rules={[
            {
              validator: emailValidate,
            },
          ]}
        >
          <Input
            size="large"
            placeholder="이메일 입력"
            style={{ borderRadius: 0 }}
          />
        </Form.Item>
      </div>

      <Button
        disabled={canNext === false}
        onClick={onNext}
        block
        size="large"
        style={{ borderRadius: 0 }}
      >
        다음
      </Button>
    </>
  );
};
