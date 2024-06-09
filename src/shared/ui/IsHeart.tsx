import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { Dispatch, SetStateAction } from "react";

interface props {
  isHeart: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

export function IsHeart({ isHeart, onChange }: props) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverColor: "red",
            onlyIconSize: 26,
            defaultColor: isHeart ? "red" : "black",
          },
        },
      }}
    >
      <Button
        icon={
          isHeart ? (
            <HeartFilled
              style={{
                cursor: "pointer",
              }}
            />
          ) : (
            <HeartOutlined
              style={{
                cursor: "pointer",
              }}
            />
          )
        }
        onClick={() => onChange(!isHeart)}
        style={{
          border: "0",
          boxShadow: "none",
        }}
      />
    </ConfigProvider>
  );
}
