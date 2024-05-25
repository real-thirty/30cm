"use client";

import { useProductListQuery } from "@/entities/product/hooks/queries";

export default function Home() {
  const { data, isSuccess } = useProductListQuery();
  return (
    <main>
      {isSuccess &&
        data?.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          );
        })}
      <p>1</p>
    </main>
  );
}
