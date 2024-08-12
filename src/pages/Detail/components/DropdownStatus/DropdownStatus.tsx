import React from "react";

import { listStatus } from "../../../../configs/Options.config";

import { getTaskById } from "../../Detail.handler";

import DropdownOptions from "../DropdownOptions";

import {
  getBackgroundColor,
  handleOnClick,
  handleOnClickItem,
} from "./DropdownStatus.handlers";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  editState: InputFormState;
  editDispatch: (action: ActionType) => void;
  id: string;
};

const DropdownStatus = (props: Props) => {
  const { state, dispatch, editState, editDispatch, id } = props;

  const task: Task = getTaskById(id);

  return (
    <>
      <div
        onClick={() => handleOnClick(state, dispatch)}
        className={`flex h-8 w-44 justify-between items-center px-4 py-3 rounded-md gap-1 hover:cursor-pointer ${getBackgroundColor(
          task.status
        )}`}
      >
        <p className="text-white text-base">{task.status.label}</p>
        <box-icon name="chevron-down" color="white" size="sm"></box-icon>
      </div>
      <div className="relative">
        {state.isShowDropdownStatus && (
          <DropdownOptions
            list={listStatus}
            value={editState.status || task.status}
            onClick={(item) =>
              handleOnClickItem(item, state, dispatch, editDispatch, task.id)
            }
          />
        )}
      </div>
    </>
  );
};

export default DropdownStatus;
