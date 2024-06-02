"use client";

import { useState } from "react";

import {
  useProductListCountQuery,
  useProductListQuery,
} from "@/entities/product/hooks/queries";
import { useCategoryListQuery } from "@/entities/category/hooks/queries";
import {
  CategoryLayout,
  CategorySidebar,
  ProductListInLayout,
} from "@/widgets/category";

const SIZEOFPAGE = 8;

export default function CategoryPage() {
  const [nowPage, setNowPage] = useState(1);
  const { data: productList, isSuccess: productListIsSuccess } =
    useProductListQuery((nowPage - 1) * SIZEOFPAGE, nowPage * SIZEOFPAGE - 1);
  const { data: categoryList, isSuccess: categoryIsSuccess } =
    useCategoryListQuery();
  const { data: totalSizeData, isSuccess } = useProductListCountQuery();

  if (!productListIsSuccess && !categoryIsSuccess && !isSuccess) {
    return <div>Loading</div>;
  }

  if (!productList || !categoryList || !totalSizeData) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ padding: "60px 50px 200px" }}>
      <CategoryLayout>
        <CategorySidebar categories={categoryList} />
        <ProductListInLayout
          products={productList}
          totalSize={totalSizeData.count}
          setNowPage={setNowPage}
        />
      </CategoryLayout>
    </div>
  );
}
