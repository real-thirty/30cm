import { useQuery } from "@tanstack/react-query";

import useSupabaseBrowser from "@/shared/hooks/use-supabase";

import { productQueryKey } from "../../constants";
import { ProductService } from "../../apis";
import { getRangeIdxFromPage } from "../../lib";


export const useProductListQuery = (nowPage: number) => {
  const supabase = useSupabaseBrowser();
  const [from, to] = getRangeIdxFromPage(nowPage)

  return useQuery({
    queryKey:  productQueryKey.getProductList(from, to),
    queryFn: () => ProductService.getProductList(supabase, from, to),
  });
};

export const useProductListCountQuery = () => {
  const supabase = useSupabaseBrowser()

  return useQuery({
    queryKey: [productQueryKey.product],
    queryFn: () => ProductService.getProductListCount(supabase)
  })
}


