
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
  getProductById: async (client: SupabaseClient, productId: string) => {
    const {data} = await client.rpc('get_product_details', {product_id_input: Number(productId)}).throwOnError()
    
    if(!data){
      throw new Error('NOT FOUND get_product_details')
    }

    return data
  },
  getProductSizeStock: async (client: SupabaseClient, productId: number, colorId: number|null)=>{
    
    if (!colorId){
      return 
    }
    
    return client
    .rpc('get_sizes_and_stock_for_color', {product_id_input: productId, color_id_input: colorId})
    .throwOnError()
    .then(response=>response.data)
  }
};