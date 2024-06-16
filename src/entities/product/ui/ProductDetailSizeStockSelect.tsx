import { Select } from "antd";
import { Dispatch, SetStateAction } from "react";

import { Database } from "@/shared/models";

import { NowOption } from ".";

interface props {
  data: Database["public"]["CompositeTypes"]["product_details_type"]["options"];
  nowOption: NowOption;
  onSelect: Dispatch<SetStateAction<NowOption>>;
}

export function ProdcutDetailSizeStockSelect({
  data,
  nowOption,
  onSelect,
}: props) {
  const selectOptions = data
    .filter((option) => option.color_id === nowOption.colorId)
    .map((option) => ({
      value: option.size_id,
      label: (
        <option
          disabled={option.stock_quantity <= 0 ? true : false}
          value={option.option_id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            {option.size_name}
            {option.stock_quantity <= 0
              ? `  [품절]`
              : option.stock_quantity <= 5
              ? `  재고: ${option.stock_quantity}`
              : ""}
          </span>
        </option>
      ),
    }));

  const handleSelect = (value: string) => {
    // 수정 필요?
    const option = data.filter((opt) => opt.option_id === Number(value))[0];

    onSelect((prev) => ({
      ...prev,
      sizeId: option.size_id,
      sizeName: option.size_name,
      stock: option.stock_quantity,
    }));
  };

  return (
    <Select
      value={!nowOption.sizeId ? "Size" : nowOption.sizeName}
      size="large"
      style={{
        position: "relative",
        width: "100%",
      }}
      onSelect={handleSelect}
      options={selectOptions}
    />
  );
}
