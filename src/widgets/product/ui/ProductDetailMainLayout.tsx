import { ReactNode } from "react";

export function ProductDetailMainLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: "0 0 0 45px",
        width: "100%",
        margin: "0 auto",
        height: "auto",
        maxWidth: "650px",
      }}
    >
      {children}
    </div>
  );
}
