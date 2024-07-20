"use client";
import { useState } from "react";
import { Layout } from "antd";

import {
  useProductListCountQuery,
  useProductListQuery,
} from "@/entities/product/hooks/queries";
import { useCategoryListQuery } from "@/entities/category/hooks/queries";
import { CategorySortBySidebar } from "@/features/category/ui";
import { ProductListInCategoryLayout } from "@/widgets/category";

export default function CategoryPage() {
  const [nowPage, setNowPage] = useState(1);
  const [largeSort, setLargeSort] = useState("All");

  const { data: productList, isSuccess: productListIsSuccess } =
    useProductListQuery(nowPage);
  const { data: categoryList, isSuccess: categoryIsSuccess } =
    useCategoryListQuery();
  const { data: totalSizeData, isSuccess } = useProductListCountQuery();

  // To Do: skeleton component
  if (!productList || !categoryList || !totalSizeData?.count) {
    return <div>Loading</div>;
  }

  return (
    <div style={{ padding: "60px 50px 200px" }}>
      <Layout hasSider style={{ margin: "100px 0 0" }}>
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
      </Layout>
    </div>
  );
}
