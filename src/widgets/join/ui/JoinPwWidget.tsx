import { Button, Input } from "antd";
import Title from "antd/es/typography/Title";

export const JoinPwWidget = () => {
  return (
    <div>
      <Title level={4} style={{ marginBottom: "50px" }}>
        로그인에 사용할 비밀번호를 입력해주세요.
      </Title>
      <div style={{ marginBottom: "30px" }}>
        <Input.Password
          // validation 추가 후 수정
          status={`${false ? "error" : ""}`}
          size="large"
          placeholder="비밀번호 입력"
          style={{ borderRadius: 0 }}
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Input.Password
          // validation 추가 후 수정
          status={`${false ? "error" : ""}`}
          size="large"
          placeholder="비밀번호 확인"
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
