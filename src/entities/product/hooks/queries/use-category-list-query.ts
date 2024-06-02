import { useQuery } from "@tanstack/react-query";

import useSupabaseBrowser from "@/shared/hooks/use-supabase";

import { categoryQueryKey } from "../../constants";
import { CategoryService } from "../../apis";



export const useCategoryListQuery = () => {
  const supabase = useSupabaseBrowser();

  return useQuery({
    queryKey: categoryQueryKey.category,
    queryFn: () => CategoryService.getCategoryList(supabase),
  });
};