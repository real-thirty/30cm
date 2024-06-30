import { Select } from "antd";

import { SELECTKEY, SelectKeyType } from "@/shared/consts";
import { selectType } from "@/widgets/product/ui";

interface props {
  nowState: selectType;
  selects: { id: number; name: string }[];
  onSelect: (
    value: string,
    label: {
      value: number;
      label: string;
    }
  ) => void;
}

export function ProductDetailSelect({ nowState, selects, onSelect }: props) {
  const selectOptions = selects.map((select) => ({
    value: select.id,
    label: select.name,
  }));

  return (
    <Select
      defaultActiveFirstOption={true}
      value={nowState.id === 0 ? SELECTKEY[nowState.type] : nowState.name}
      size="large"
      dropdownStyle={{
        borderRadius: 0,
      }}
      options={selectOptions}
      onSelect={(value, label) => onSelect(value, label)}
      style={{ position: "relative", width: "100%", marginBottom: "4px" }}
    />
  );
}
