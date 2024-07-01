import { Button, Input } from "antd";
import Title from "antd/es/typography/Title";
import { JoinStepType } from "../consts";

interface props {
  name: JoinStepType;
}

export const JoinPhoneNumWidget = ({ name }: props) => {
  if (name !== JoinStepType["PHONENUMBER"]) {
    return null;
  }
  return (
    <div>
      <Title level={4} style={{ marginBottom: "50px" }}>
        전화번호를 입력해주세요.
      </Title>
      <div style={{ marginBottom: "30px" }}>
        <Input
          // validation 추가 후 수정
          status={`${false ? "error" : ""}`}
          size="large"
          placeholder="전화번호 입력"
          style={{ borderRadius: 0 }}
        />
      </div>
      <Button
        // input 값 채우지 않으면 비활성화
        disabled={false}
        // onClick handler함수 넣을 것
        onClick={() => {}}
        block
        size="large"
        style={{ borderRadius: 0 }}
      >
        다음
      </Button>
    </div>
  );
};
