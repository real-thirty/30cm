import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Sider from "antd/es/layout/Sider";
import { Divider, Typography } from "antd";

import { Tables } from "@/shared/models";

interface props {
  categories?: Array<Tables<"category">>;
  largeSort: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const { Title } = Typography;

export function CategorySortBySidebar({ categories, onChange }: props) {
  return (
    <Sider
      theme="light"
      style={{
        overflow: "auto",
        height: "100vh",
        scrollbarWidth: "none",
        left: 0,
        top: 0,
        bottom: 0,
        margin: "0 10px 0 0",
      }}
    >
      <span style={{ fontSize: "20px" }}>남성가방</span>
      <Divider style={{ margin: "10px 0" }} />

      {categories?.map((category) => (
        <div
          style={{ marginTop: "16px", height: "30px" }}
          key={category.category_id}
        >
          <Link href={`/`} style={{ color: "black" }}>
            <Title level={5}>{category.name}</Title>
          </Link>
        </div>
      ))}
    </Sider>
  );
}
