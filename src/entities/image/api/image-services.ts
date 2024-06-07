import { SupabaseClient } from "@supabase/supabase-js";


export const ImageService = {
  getImageByProductId: async (client: SupabaseClient, productId: string) => {
    return client
    .from('images')
    .select('*')
    .eq('product_id', productId)
    .throwOnError()
    .then((response) => response.data)

  }
}




