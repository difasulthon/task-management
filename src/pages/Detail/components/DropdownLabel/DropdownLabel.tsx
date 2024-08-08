import React, { ChangeEvent } from "react";

import Constants from "../../../../constants";
import { listLabel } from "../../../../configs/Options.config";

import type { ActionType, InputFlagState } from "../../Detail.types";

import DropdownOptions from "../DropdownOptions";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_LABEL },
} = Constants;

const DropdownLabel = (props: Props) => {
  const { state, dispatch, onChange } = props;

  const [value, setValue] = React.useState<DropDownItem>(listLabel[0]);

  const clickItemHandler = (item) => {
    setValue(item);
    onChange(item);
    dispatch({
      type: INPUT_LABEL,
      payload: !state.isShowDropdownLabel,
    });
  };

  return (
    <>
      <p
        onClick={() =>
          dispatch({
            type: INPUT_LABEL,
            payload: !state.isShowDropdownLabel,
          })
        }
        className="text-custom-bluePrimary font-medium text-sm hover:cursor-pointer hover:bg-gray-100"
      >
        {value.label}
      </p>
      <div className="relative">
        {state.isShowDropdownLabel && (
          <DropdownOptions
            list={listLabel}
            value={value}
            onClick={(item) => clickItemHandler(item)}
          />
        )}
      </div>
    </>
  );
};

export default DropdownLabel;
