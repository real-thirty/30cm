import { Select } from "antd";
import { Dispatch, SetStateAction } from "react";

import { Tables } from "@/shared/models";

import { NowOption } from ".";

interface props {
  colors: Tables<"colors">[];
  nowOption: NowOption;
  onSelect: Dispatch<SetStateAction<NowOption>>;
}

export function ProductDetailColorSelect({
  colors,
  nowOption,
  onSelect,
}: props) {
  const selectOptions = colors.map((color) => ({
    value: color.color_id,
    label: color.color_name,
  }));

  const selectHandler = (
    value: string,
    label: { value: number; label: string }
  ) => {
    onSelect((prev) => ({
      ...prev,
      colorId: Number(value),
      colorName: label.label,
    }));
  };

  return (
    <Select
      defaultActiveFirstOption={true}
      value={!nowOption.colorId ? "Color" : nowOption.colorName}
      size="large"
      dropdownStyle={{
        borderRadius: 0,
      }}
      options={selectOptions}
      onSelect={selectHandler}
      style={{ position: "relative", width: "100%", marginBottom: "4px" }}
    />
  );
}
