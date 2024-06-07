import { useQuery } from "@tanstack/react-query";

import useSupabaseBrowser from "@/shared/hooks/use-supabase";
import { productQueryKey } from "@/entities/product/constants";

import { ImageService } from "../../api";



export const useImagesQuery = (productId: string) => {
  const supabase = useSupabaseBrowser();

  return useQuery({
    queryKey: productQueryKey.getProductImages(productId),
    queryFn: () => ImageService.getImageByProductId(supabase, productId),
  });
};