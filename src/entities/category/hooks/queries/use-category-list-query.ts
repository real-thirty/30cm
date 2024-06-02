import { useQuery } from "@tanstack/react-query";

import useSupabaseBrowser from "@/shared/hooks/use-supabase";


import { CategoryService } from "../../apis";
import { categoryQueryKey } from "../../constants";



export const useCategoryListQuery = () => {
  const supabase = useSupabaseBrowser();

  return useQuery({
    queryKey: categoryQueryKey.category,
    queryFn: () => CategoryService.getCategoryList(supabase ),
  });
};