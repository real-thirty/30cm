import { useQuery } from "@tanstack/react-query";

import useSupabaseBrowser from "@/shared/hooks/use-supabase";

import { productQueryKey } from "../../constants";
import { ProductService } from "../../apis";

export const useProductListQuery = () => {
  const supabase = useSupabaseBrowser();

  return useQuery({
    queryKey: productQueryKey.product,
    queryFn: () => ProductService.getProductList(supabase),
  });
};


