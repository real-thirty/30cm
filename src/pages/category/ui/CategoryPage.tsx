"use client";
import { useState } from "react";

import {
  useProductListCountQuery,
  useProductListQuery,
} from "@/entities/product/hooks/queries";
import { useCategoryListQuery } from "@/entities/category/hooks/queries";
import {
  CategoryLayout,
  ProductListInCategoryLayout,
} from "@/widgets/category";
import { CategorySortBySidebar } from "@/features/category";

export default function CategoryPage() {
  const [nowPage, setNowPage] = useState(1);
  const [largeSort, setLargeSort] = useState("All");

  const { data: productList, isSuccess: productListIsSuccess } =
    useProductListQuery(nowPage);
  const { data: categoryList, isSuccess: categoryIsSuccess } =
    useCategoryListQuery();
  const { data: totalSizeData, isSuccess } = useProductListCountQuery();

  if (!productListIsSuccess && !categoryIsSuccess && !isSuccess) {
    return <div>Loading</div>;
  }

  return (
    <div style={{ padding: "60px 50px 200px" }}>
      <CategoryLayout>
        <CategorySortBySidebar
          categories={categoryList}
          largeSort={largeSort}
          onChange={setLargeSort}
        />
        <ProductListInCategoryLayout
          products={productList}
          totalSize={totalSizeData?.count}
          onChange={setNowPage}
          nowPage={nowPage}
        />
      </CategoryLayout>
    </div>
  );
}
