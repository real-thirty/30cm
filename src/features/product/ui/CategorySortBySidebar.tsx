import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Sider from "antd/es/layout/Sider";
import { Divider } from "antd";

import { Database } from "@/shared/models";

interface props {
  categories?: Database["public"]["Tables"]["category"]["Row"][] | null;
  largeSort: string;
  onChange: Dispatch<SetStateAction<string>>;
}

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
            <span style={{ fontSize: "16px" }}>{category.name}</span>
          </Link>
        </div>
      ))}
    </Sider>
  );
}
