import React from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { formatDate } from "../../utils/Date";
import type { Task } from "../../types/Task.type";
import Constants from "../../constants";

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

const {
  DATE: { FORMAT },
} = Constants;

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

  const { task }: { task: Task } = useLoaderData();
  const detailTask: Task = getTaskById(task.id);

  return (
    <div className="flex w-12/12 justify-center">
      <div className="flex flex-row gap-3 pt-10 w-7/12">
        <div className="flex flex-col w-8/12">
          <div className="flex flex-row">
            <box-icon
              name="bookmarks"
              type="solid"
              color="#60B158"
              size="xs"
            ></box-icon>
            <p className="text-xs font-normal ml-1 mt-1 text-custom-greyPrimary">
              TMON-{task.taskNumber}
            </p>
          </div>
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
            editState={editState}
            dispatch={dispatch}
            editDispatch={editDispatch}
            value={editState.status || task.status}
            id={task.id}
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
                editState={editState}
                dispatch={dispatch}
                editDispatch={editDispatch}
                value={editState.label || task.label}
                id={task.id}
              />
            </div>
            <div className="mb-3 ml-2">
              <p className="text-black font-normal text-sm">Priority</p>
              <DropdownPriority
                state={state}
                editState={editState}
                dispatch={dispatch}
                editDispatch={editDispatch}
                value={editState.status || task.status}
                id={task.id}
              />
            </div>
            <div className="mb-3 ml-2">
              <p className="text-black font-normal text-sm">Created at</p>
              <p className="text-gray-500 font-medium text-sm">
                {formatDate(detailTask.createdAt, FORMAT)}
              </p>
            </div>
            <div className="ml-2">
              <p className="text-black font-normal text-sm">Last modified</p>
              <p className="text-gray-500 font-medium text-sm">
                {formatDate(detailTask.lastModified, FORMAT)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
