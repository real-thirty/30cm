"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider, createCache } from "@ant-design/cssinjs";
import SupabaseProvider from "./providers/supabase/supabase-provider";
import { UserContextProvider } from "./providers/supabase/user-provider";
import { QueryProvider } from "./providers/tanstack-query/query-provider";

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cache = createCache();
  return (
    <AntdRegistry>
      <StyleProvider>
        <SupabaseProvider>
          <UserContextProvider>
            <QueryProvider>{children}</QueryProvider>
          </UserContextProvider>
        </SupabaseProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
