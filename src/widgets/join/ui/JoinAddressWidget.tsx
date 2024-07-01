import { Button, Input } from "antd";
import Title from "antd/es/typography/Title";
import { JoinStepType } from "../consts";

interface props {
  name: JoinStepType;
}

export const JoinAddressWidget = ({ name }: props) => {
  if (name !== JoinStepType["ADDRESS"]) {
    return null;
  }
  return (
    <div>
      <Title level={4} style={{ marginBottom: "50px" }}>
        주소를 선택해주세요.
      </Title>
      <div style={{ marginBottom: "30px" }}>
        <Input
          // validation 추가 후 수정
          status={`${false ? "error" : ""}`}
          size="large"
          placeholder="주소 선택"
          style={{ borderRadius: 0 }}
        />
        {/* // 주소검색 API, useTransition사용해서 글자 완성하면 api받아서 주소 보여주는 형식 사용할 것 */}
        <Button>주소 검색</Button>
      </div>
      <Input
        // validation 추가 후 수정
        status={`${false ? "error" : ""}`}
        size="large"
        style={{ borderRadius: 0 }}
      />{" "}
      <Input
        // validation 추가 후 수정
        status={`${false ? "error" : ""}`}
        size="large"
        style={{ borderRadius: 0 }}
      />
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
