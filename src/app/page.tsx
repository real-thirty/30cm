"use client";

export default function Home() {
  return (
    <main>
      {isSuccess &&
        data?.map((product) => {
          return (
            <div key={product.product_id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          );
        })}
      <p>1</p>
    </main>
  );
}
