import type { SupabaseClient } from "@/shared/hooks/use-supabase";

export const ProductService = {
  getProductList: async (client: SupabaseClient) => {
    return client
      .from("products")
      .select("*")
      .throwOnError()
      .then((response) => response.data);
  },
  getProductById: async (client: SupabaseClient, id: number) => {
    return client
      .from("products")
      .select("*")
      .eq("product_id", id)
      .throwOnError()
      .single();
  },
};
