import { useMemo } from "react";
import { SupabaseClient as SupabaseClientType } from "@supabase/supabase-js";

import { supabase } from "../../app/providers/supabase/init-supabase";

import { Database } from "../models";

export type SupabaseClient = SupabaseClientType<Database>;

let client: SupabaseClient | undefined;

function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  client = supabase;
  return client;
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabaseBrowser;
