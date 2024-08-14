import React from "react";

import type { Task } from "../../../../types/Task.type";

import type { ActionType, InputFlagState } from "../../Detail.types";

import Input from "../Input";
import {
  handleOnChange,
  handleOnCheckClicked,
  handleOnClickDescription,
  handleOnCloseClicked,
} from "./InputDescription.handlers";
import { getTaskById } from "../../Detail.handler";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  value: string;
  editState: InputFormState;
  editDispatch: (action: ActionType) => void;
  id: string;
};

const InputDescription = (props: Props) => {
  const { state, dispatch, value, editState, editDispatch, id } = props;

  const task: Task = getTaskById(id);

  return (
    <>
      <p className="text-sm font-bold mb-2">Description</p>
      {state.isShowInputDescription ? (
        <div className="mb-12">
          <Input
            isArea={true}
            onChange={(e) => handleOnChange(e, editDispatch)}
            value={editState.description || task.description}
            onCheckClicked={() =>
              handleOnCheckClicked(task.id, value, state, dispatch)
            }
            onCloseClicked={() =>
              handleOnCloseClicked(
                task.description,
                state,
                dispatch,
                editDispatch
              )
            }
          />
        </div>
      ) : (
        <p
          onClick={() =>
            !state.isShowInputTitle && handleOnClickDescription(state, dispatch)
          }
          className="font-normal text-justify text-base hover:cursor-pointer w-11/12 hover:bg-gray-100"
        >
          {task.description}
        </p>
      )}
    </>
  );
};

export default InputDescription;
