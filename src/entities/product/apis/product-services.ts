import type { SupabaseClient } from "@/shared/hooks/use-supabase";

export const ProductService = {
  getProductList: async (client: SupabaseClient, from: number, to:number) => {
    return client
      .from("products")
      .select("*")
      .range(from, to)
      .throwOnError()
      .then((response) =>response.data);
  },
  getProductListCount: async(client: SupabaseClient)=>{
    return client
      .from("products")
      .select("*", {count: 'exact', head: true}) 
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
