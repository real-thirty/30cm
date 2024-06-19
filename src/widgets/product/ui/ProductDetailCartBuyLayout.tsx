import { ReactNode } from "react";

export function ProductDetailCartBuyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "16px",
      }}
    >
      {children}
    </div>
  );
}
