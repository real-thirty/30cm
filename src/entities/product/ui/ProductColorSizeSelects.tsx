import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Database } from "@/shared/models";
import { SelectedProduct } from "@/widgets/product/model";
import { isSameProductInSelected } from "@/widgets/product/lib";

import { ProdcutDetailSizeStockSelect, ProductDetailColorSelect } from ".";

interface props {
  data: Database["public"]["CompositeTypes"]["product_details_type"];
  selectedProducts: SelectedProduct[];
  onSelect: Dispatch<SetStateAction<SelectedProduct[]>>;
}

export interface NowOption {
  optionId: number;
  colorId: number;
  colorName: string;
  sizeId: number;
  sizeName: string;
  stock: number;
}

const ININOWOPTION = {
  optionId: 0,
  colorId: 0,
  colorName: "",
  sizeId: 0,
  sizeName: "",
  stock: 0,
};

export function ProductColorSizeSelects({
  data,
  selectedProducts,
  onSelect,
}: props) {
  const [nowOption, setNowOption] = useState<NowOption>(ININOWOPTION);

  useEffect(() => {
    if (checkReadyToAddSelect(nowOption, !!data.colors, !!data.sizes)) {
      if (
        !isSameProductInSelected(
          selectedProducts,
          nowOption.colorId,
          nowOption.sizeId
        )
      ) {
        addNowOptionToSelectedProducts(data, nowOption, onSelect);
      } else {
        // 중복 모달 띄우기
      }
      setNowOption(ININOWOPTION);
    }
  }, [nowOption, onSelect, selectedProducts, data]);

  return (
    <>
      {data.colors && (
        <ProductDetailColorSelect
          colors={data.colors}
          nowOption={nowOption}
          onSelect={setNowOption}
        />
      )}
      {data.sizes && (
        <ProdcutDetailSizeStockSelect
          data={data.options}
          nowOption={nowOption}
          onSelect={setNowOption}
        />
      )}
    </>
  );
}

// 수정?
const checkReadyToAddSelect = (
  nowOption: NowOption,
  isColor: boolean,
  isSize: boolean
): boolean => {
  if (!isColor) {
    if (nowOption.sizeId) {
      return true;
    } else {
      return false;
    }
  } else if (!isSize) {
    if (nowOption.colorId) {
      return true;
    } else {
      return false;
    }
  }
  if (nowOption.colorId && nowOption.sizeId) {
    return true;
  }
  return false;
};

const addNowOptionToSelectedProducts = (
  data: Database["public"]["CompositeTypes"]["product_details_type"],
  nowOption: NowOption,
  onSelect: Dispatch<SetStateAction<SelectedProduct[]>>
) => {
  // 수정;;;;;
  const option = data.options.filter(
    (option) =>
      option.color_id === nowOption.colorId &&
      option.size_id === nowOption.sizeId
  )[0];
  onSelect((prev) => [
    ...prev,
    {
      optionId: option.option_id,
      colorId: option.color_id,
      colorName: option.color_name,
      sizeId: option.size_id,
      sizeName: option.size_name,
      stock: option.stock_quantity,
      price: data.price,
      productId: option.product_id,
      quantity: 1,
    },
  ]);
};
