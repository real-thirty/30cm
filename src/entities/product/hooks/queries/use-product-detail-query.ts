import { useQuery } from "@tanstack/react-query"

import useSupabaseBrowser from "@/shared/hooks/use-supabase"

import { ProductService } from "../../apis"



export const useProductDetailQuery = (productId:string)=>{
  const supabase = useSupabaseBrowser()

  return useQuery({
    queryKey: [productId],
    queryFn: ()=> ProductService.getProductById(supabase, productId)
  })
}