import { useQuery } from "@tanstack/react-query"

import useSupabaseBrowser from "@/shared/hooks/use-supabase"

import { productQueryKey } from "../../constants"
import { ProductService } from "../../apis"


export const useProductSizeStock = (productId:number, colorId: number|null)=>{
  const supabase = useSupabaseBrowser()

  return useQuery({
    queryKey: productQueryKey.getProductSizeStock(productId, colorId),
    queryFn: ()=>ProductService.getProductSizeStock(supabase, productId, colorId),
    enabled: !!colorId
  })
}