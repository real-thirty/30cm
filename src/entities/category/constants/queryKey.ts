const CATEGORY = "@category"

export const categoryQueryKey = {
  category: [CATEGORY],
  getCategory: (id: string) => [CATEGORY, id],
}