import { useSuspenseQuery } from "@tanstack/react-query"

import useSupabaseBrowser from "@/shared/hooks/use-supabase"

import { ProductService } from "../../apis"
import { productQueryKey } from "../../constants"



export const useProductDetailQuery = (productId:string)=>{
  const supabase = useSupabaseBrowser()

  return useSuspenseQuery({
    queryKey: productQueryKey.getProduct(productId),
    queryFn: ()=> ProductService.getProductById(supabase, productId)
  })
}