import React from "react";

import { listPriority } from "../../../../configs/Options.config";
import type { Task } from "../../../../types/Task.type";
import { getPriorityTextColor } from "../../../../utils/Color";

import { getTaskById } from "../../Detail.handler";
import type { ActionType, InputFlagState } from "../../Detail.types";

import DropdownOptions from "../DropdownOptions";

import { handleOnClick, handleOnClickItem } from "./DropdownPriority.handlers";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  editState: InputFormState;
  editDispatch: (action: ActionType) => void;
  id: string;
};

const DropdownPriority = (props: Props) => {
  const { state, dispatch, editState, editDispatch, id } = props;

  const task: Task = getTaskById(id);

  return (
    <>
      <p
        onClick={() => handleOnClick(state, dispatch)}
        className={`font-medium text-sm hover:cursor-pointer hover:bg-gray-100 ${getPriorityTextColor(
          task.priority.id
        )}`}
      >
        {task.priority.label}
      </p>
      <div className="relative">
        {state.isShowDropdownPriority && (
          <DropdownOptions
            list={listPriority}
            value={editState.priority || task.priority}
            onClick={(item) =>
              handleOnClickItem(item, state, dispatch, editDispatch, task.id)
            }
          />
        )}
      </div>
    </>
  );
};

export default DropdownPriority;
