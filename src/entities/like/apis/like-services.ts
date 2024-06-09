import type { SupabaseClient } from "@/shared/hooks/use-supabase";

export const LikeService = {
  insertLikebyUserIdAndProductId: async (client: SupabaseClient, userId: string, productId:string) => {
    return client
      .from("likes")
      .insert(
        {
          user_id: userId,
          product_id: Number(productId)
        },
        
      )
      .select()
      .throwOnError()
      .then((response) =>!!response.data);
  }
};