import { Col } from "antd";
import Image from "next/image";
import Link from "next/link";

import { Tables } from "@/shared/models";

import { formatPrice } from "../lib";

interface props {
  product: Tables<"products">;
}
export function ProductCardInList({ product }: props) {
  return (
    <Col
      key={product.product_id}
      xs={{ flex: "100%" }}
      sm={{ flex: "60%" }}
      md={{ flex: "40%" }}
      lg={{ flex: "20%" }}
      xl={{ flex: "10%" }}
      style={{
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        borderRadius: "7px",
        margin: "5",
      }}
    >
      <Link href={`/product/${product.product_id}`} style={{ color: "black" }}>
        <Image
          src={product.image ?? ""}
          alt=""
          width={200}
          height={200}
          style={{
            borderRadius: "7px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        />
        <h1 style={{ margin: "0px" }}>{product.name}</h1>
        <span>{product.description}</span>
        <p>{formatPrice(product.price ?? "0")}</p>
      </Link>
    </Col>
  );
}
