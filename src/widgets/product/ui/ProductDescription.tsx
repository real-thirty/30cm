import { Typography } from "antd";
import Title from "antd/es/typography/Title";

import { Database } from "@/shared/models";

interface props {
  data: Database["public"]["CompositeTypes"]["product_details_type"];
}

export function ProductDescription({ data }: props) {
  return (
    <Typography style={{ padding: "50px 100px", minHeight: "500px" }}>
      <Title level={2}>상품설명</Title>
      {data.description}
    </Typography>
  );
}
