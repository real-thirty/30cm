import { useQuery } from "@tanstack/react-query"

import useSupabaseBrowser from "@/shared/hooks/use-supabase"

import { LikeService } from "../../apis"



export const useInsertLikeQuery = (userId:string, productId:string)=>{
  const supabase = useSupabaseBrowser()

  return useQuery({
    queryKey: [productId],
    queryFn: ()=> LikeService.insertLikebyUserIdAndProductId(supabase, userId, productId)
  })
}