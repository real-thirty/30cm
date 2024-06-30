import { useCallback, useState } from "react";

import { Database } from "@/shared/models";
import { SelectedProduct } from "@/widgets/product/model";
import { isSameProductInSelected } from "@/widgets/product/lib";

import {
  ProductDetailLastSelect,
  ProductDetailSelect,
} from "@/entities/product/ui";
import { SelectKeyType } from "@/shared/consts";

interface props {
  data: Pick<
    Database["public"]["CompositeTypes"]["product_details_type"],
    "colors" | "sizes" | "options"
  >;
  selectedProducts: SelectedProduct[];
  onConfirmSelect: (
    option: Database["public"]["CompositeTypes"]["options"]
  ) => void;
}

export interface selectType {
  type: SelectKeyType;
  id: number;
  name: string;
}

export function ProductColorSizeSelects({
  data,
  selectedProducts,
  onConfirmSelect,
}: props) {
  // useForm
  const [selectsState, setSelectsState] = useState<selectType[]>(
    getInitialState(data)
  );

  const handleLastSelect = useCallback(
    (optionId: number) => {
      const option = data.options.find(
        (option) => option.option_id === optionId
      );
      if (!option) {
        return;
      }
      if (!isSameProductInSelected(selectedProducts, option)) {
        onConfirmSelect(option);
      } else {
        // 중복된다는 모달 띄우기
      }
      setSelectsState(getInitialState(data));
    },
    [onConfirmSelect, setSelectsState, data, selectedProducts]
  );

  const handleSelects = useCallback(
    (selectIdx: number) => {
      return (value: string, label: { value: number; label: string }) => {
        setSelectsState((prevSelects) =>
          prevSelects.map((select, idx) =>
            idx === selectIdx
              ? { ...select, id: Number(value), name: label.label }
              : select
          )
        );
      };
    },
    [setSelectsState]
  );

  return (
    <>
      {selectsState.map((select, idx) => {
        if (idx === selectsState.length - 1) {
          return (
            <ProductDetailLastSelect
              nowState={select}
              totalState={selectsState}
              stocks={data.options}
              onSelect={handleLastSelect}
            />
          );
        }

        return (
          <ProductDetailSelect
            nowState={select}
            selects={data[select.type]}
            onSelect={handleSelects(idx)}
          />
        );
      })}
    </>
  );
}

const getInitialState = (
  data: Pick<
    Database["public"]["CompositeTypes"]["product_details_type"],
    "colors" | "sizes" | "options"
  >
) => {
  const initialState: selectType[] = [];
  if (data.colors) {
    initialState.push({ type: "colors", id: 0, name: "" });
  }
  if (data.sizes) {
    initialState.push({ type: "sizes", id: 0, name: "" });
  }
  return initialState;
};
