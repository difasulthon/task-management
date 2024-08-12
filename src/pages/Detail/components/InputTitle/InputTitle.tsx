import React from "react";

import type { Task } from "../../../../types/Task.type";

import { getTaskById } from "../../Detail.handler";
import type {
  InputFlagState,
  ActionType,
  InputFormState,
} from "../../Detail.types";

import Input from "../Input";

import {
  handleOnChange,
  handleOnCheckClicked,
  handleOnClickTitle,
  handleOnCloseClicked,
} from "./InputTitle.handlers";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  value: string;
  editState: InputFormState;
  editDispatch: (action: ActionType) => void;
  id: string;
};

const InputTitle = (props: Props) => {
  const { state, dispatch, value, editState, editDispatch, id } = props;

  const task: Task = getTaskById(id);

  return (
    <>
      {state.isShowInputTitle ? (
        <div className="mb-12">
          <Input
            onChange={(e) => handleOnChange(e, editDispatch)}
            value={editState.title || task.title}
            onCheckClicked={() =>
              handleOnCheckClicked(task.id, value, state, dispatch)
            }
            onCloseClicked={() =>
              handleOnCloseClicked(task.title, state, dispatch, editDispatch)
            }
          />
        </div>
      ) : (
        <h3
          onClick={() =>
            !state.isShowInputDescription && handleOnClickTitle(state, dispatch)
          }
          className="font-medium text-2xl mb-12 hover:cursor-pointer w-11/12 hover:bg-gray-100"
        >
          {task.title}
        </h3>
      )}
    </>
  );
};

export default InputTitle;
