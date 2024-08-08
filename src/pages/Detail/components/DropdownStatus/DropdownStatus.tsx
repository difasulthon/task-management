import React from "react";
import Constants from "../../../../constants";
import { listStatus } from "../../../../configs/Options.config";
import DropdownOptions from "../DropdownOptions";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_STATUS },
} = Constants;

const DropdownStatus = (props: Props) => {
  const { state, dispatch, onChange } = props;

  const [value, setValue] = React.useState<DropDownItem>({
    id: 2,
    label: "IN PROGRESS",
  });

  const clickItemHandler = (item) => {
    setValue(item);
    onChange(item);
    dispatch({
      type: INPUT_STATUS,
      payload: !state.isShowDropdownStatus,
    });
  };

  return (
    <>
      <div
        onClick={() =>
          dispatch({
            type: INPUT_STATUS,
            payload: !state.isShowDropdownStatus,
          })
        }
        className="flex bg-custom-bluePrimary h-8 w-44 justify-between items-center px-4 py-3 rounded-md gap-1 hover:cursor-pointer"
      >
        <p className="text-white text-base">{value.label}</p>
        <box-icon name="chevron-down" color="white" size="sm"></box-icon>
      </div>
      <div className="relative">
        {state.isShowDropdownStatus && (
          <DropdownOptions
            list={listStatus}
            value={value}
            onClick={(item) => clickItemHandler(item)}
          />
        )}
      </div>
    </>
  );
};

export default DropdownStatus;
