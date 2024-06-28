import { Select } from "antd";

import { Database } from "@/shared/models";
import { SELECTKEY, SelectKeyType } from "@/shared/consts";
import { selectType } from "@/widgets/product/ui";

interface props {
  nowState: selectType;
  stocks: Database["public"]["CompositeTypes"]["product_details_type"]["options"];
  totalState: selectType[];
  onSelect: (optionId: number) => void;
}

export function ProductDetailLastSelect({
  nowState,
  totalState,
  stocks,
  onSelect,
}: props) {
  const selectOptions = totalState
    .slice(0, totalState.length - 1)
    .reduce((stocks, state) => {
      if (state.type === "colors") {
        return stocks.filter((stock) => stock.color_id === state.id);
      }

      return stocks.filter((stock) => stock.size_id === state.id);
    }, stocks)
    .map((stock) => ({
      value: stock.option_id,
      label: <ProductDetailLastSelect.Option option={stock} />,
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
      onSelect={(value, label) => {
        onSelect(label.value);
      }}
      style={{ position: "relative", width: "100%", marginBottom: "4px" }}
    />
  );
}

ProductDetailLastSelect.Option = ({
  option,
}: {
  option: Database["public"]["CompositeTypes"]["options"];
}) => {
  return (
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
  );
};
