import React from "react";

import { listLabel } from "../../../../configs/Options.config";
import type { Task } from "../../../../types/Task.type";
import { getLabelTextColor } from "../../../../utils/Color";

import { getTaskById } from "../../Detail.handler";
import type { ActionType, InputFlagState } from "../../Detail.types";

import DropdownOptions from "../DropdownOptions";

import { handleOnClick, handleOnClickItem } from "./DropdownLabel.handlers";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  editState: InputFormState;
  editDispatch: (action: ActionType) => void;
  id: string;
};

const DropdownLabel = (props: Props) => {
  const { state, dispatch, editState, editDispatch, id } = props;

  const task: Task = getTaskById(id);

  return (
    <>
      <p
        onClick={() => handleOnClick(state, dispatch)}
        className={`font-medium text-sm hover:cursor-pointer hover:bg-gray-100 ${getLabelTextColor(
          task.label.id
        )}`}
      >
        {task.label.label}
      </p>
      <div className="relative">
        {state.isShowDropdownLabel && (
          <DropdownOptions
            list={listLabel}
            value={editState.label || task.label}
            onClick={(item) =>
              handleOnClickItem(item, state, dispatch, editDispatch, task.id)
            }
          />
        )}
      </div>
    </>
  );
};

export default DropdownLabel;
