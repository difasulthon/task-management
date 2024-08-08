import React, { ChangeEvent } from "react";

import Constants from "../../../../constants";
import { listPriority } from "../../../../configs/Options.config";

import type { ActionType, InputFlagState } from "../../Detail.types";

import DropdownOptions from "../DropdownOptions";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_PRIORITY },
} = Constants;

const DropdownPriority = (props: Props) => {
  const { state, dispatch, onChange } = props;

  const [value, setValue] = React.useState<DropDownItem>(listPriority[0]);

  const clickItemHandler = (item) => {
    setValue(item);
    onChange(item);
    dispatch({
      type: INPUT_PRIORITY,
      payload: !state.isShowDropdownPriority,
    });
  };

  return (
    <>
      <p
        onClick={() =>
          dispatch({
            type: INPUT_PRIORITY,
            payload: !state.isShowDropdownPriority,
          })
        }
        className="text-custom-redPrimary font-medium text-sm hover:cursor-pointer hover:bg-gray-100"
      >
        {value.label}
      </p>
      <div className="relative">
        {state.isShowDropdownPriority && (
          <DropdownOptions
            list={listPriority}
            value={value}
            onClick={(item) => clickItemHandler(item)}
          />
        )}
      </div>
    </>
  );
};

export default DropdownPriority;
