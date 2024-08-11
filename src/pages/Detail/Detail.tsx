import React from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import {
  initialInputFlagStates,
  inputFlagReducer,
} from "./reducers/InputFlag.reducer";
import type {
  ActionType,
  InputFlagState,
  InputFormState,
} from "./Detail.types";
import InputTitle from "./components/InputTitle";
import InputDescription from "./components/InputDescription";
import DropdownStatus from "./components/DropdownStatus";
import DropdownLabel from "./components/DropdownLabel";
import DropdownPriority from "./components/DropdownPriority";
import { getTaskById } from "./Detail.handler";
import {
  editFormReducer,
  initialEditFormStates,
} from "./reducers/EditForm.reducer";

export async function loader({ params }: LoaderFunctionArgs) {
  const task = getTaskById(params.taskId);

  return { task };
}

const Detail = (): React.JSX.Element => {
  const [state, dispatch] = React.useReducer<{
    state: InputFlagState;
    action: ActionType;
  }>(inputFlagReducer, initialInputFlagStates);
  const [editState, editDispatch] = React.useReducer<{
    state: InputFormState;
    action: ActionType;
  }>(editFormReducer, initialEditFormStates);

  const { task } = useLoaderData();

  return (
    <div className="flex w-12/12 justify-center">
      <div className="flex flex-row gap-3 pt-10 w-7/12">
        <div className="flex flex-col w-8/12">
          <InputTitle
            state={state}
            editState={editState}
            dispatch={dispatch}
            editDispatch={editDispatch}
            value={editState.title || task.title}
            id={task.id}
          />
          <InputDescription
            state={state}
            editState={editState}
            dispatch={dispatch}
            editDispatch={editDispatch}
            value={editState.description || task.description}
            id={task.id}
          />
        </div>
        <div className="flex flex-col">
          <DropdownStatus
            state={state}
            dispatch={dispatch}
            onChange={() => {}}
          />
          <div className="mt-9 border-2 border-custom-greySecondary py-2 rounded-md pr-2">
            <div className="mb-2">
              <p className="text-black font-semibold text-sm ml-2">Details</p>
              <div className="border-b-2 border-custom-greySecondary mt-1"></div>
            </div>
            <div className="mb-3 ml-2">
              <p className="text-black font-normal text-sm">Label</p>
              <DropdownLabel
                state={state}
                dispatch={dispatch}
                onChange={() => {}}
              />
            </div>
            <div className="mb-3 ml-2">
              <p className="text-black font-normal text-sm">Priority</p>
              <DropdownPriority
                state={state}
                dispatch={dispatch}
                onChange={() => {}}
              />
            </div>
            <div className="mb-3 ml-2">
              <p className="text-black font-normal text-sm">Created at</p>
              <p className="text-gray-500 font-medium text-sm">
                August 07, 2024
              </p>
            </div>
            <div className="ml-2">
              <p className="text-black font-normal text-sm">Last modified</p>
              <p className="text-gray-500 font-medium text-sm">
                August 07, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
