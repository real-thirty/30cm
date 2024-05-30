import type { SupabaseClient } from "@/shared/hooks/use-supabase";

export const CategoryService = {
  getCategoryList: async (client: SupabaseClient) => {
    return client
      .from("category")
      .select("*")
      .throwOnError()
      .then((response) => response.data)
  }
};