import { Progress } from "antd";

interface props {
  percent: number;
}

export const ProgressBar = ({ percent }: props) => {
  return (
    <Progress
      percent={percent}
      strokeColor="black"
      showInfo={false}
      strokeLinecap="butt"
      style={{ paddingBottom: 10 }}
    />
  );
};
