"use client";

import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { supabase } from "./init-supabase";

interface SupbaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupbaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() => supabase);

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
