import { useQuery } from "@tanstack/react-query";

import useSupabaseBrowser from "@/shared/hooks/use-supabase";

import { productQueryKey } from "../../constants";
import { ProductService } from "../../apis";

export const useProductListQuery = (from:number, to:number) => {
  const supabase = useSupabaseBrowser();

  return useQuery({
    queryKey: [productQueryKey.product, from , to],
    queryFn: () => ProductService.getProductList(supabase, from, to),
  });
};


