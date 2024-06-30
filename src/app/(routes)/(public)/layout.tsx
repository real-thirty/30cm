"use client";

import { Header } from "@/shared/ui";
import { ConfigProvider } from "antd";
import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Layout: { colorBgLayout: "white" },
            Input: {
              hoverBorderColor: "black",
              activeBorderColor: "black",
              activeShadow: "black",
            },
          },
        }}
      >
        <Header />
        {children}
      </ConfigProvider>
    </>
  );
}
