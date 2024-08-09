import React from "react";

import {
  initialInputFlagStates,
  inputFlagReducer,
} from "./reducers/InputFlag.reducer";
import type { ActionType, InputFlagState } from "./Detail.types";
import InputTitle from "./components/InputTitle";
import InputDescription from "./components/InputDescription";
import DropdownStatus from "./components/DropdownStatus";
import DropdownLabel from "./components/DropdownLabel";
import DropdownPriority from "./components/DropdownPriority";

const Detail = (): React.JSX.Element => {
  const [state, dispatch] = React.useReducer<{
    state: InputFlagState;
    action: ActionType;
  }>(inputFlagReducer, initialInputFlagStates);

  return (
    <div className="flex w-12/12 justify-center">
      <div className="flex flex-row gap-3 pt-10 w-7/12">
        <div className="flex flex-col max-w-xl">
          <InputTitle state={state} dispatch={dispatch} onChange={() => {}} />
          <InputDescription
            state={state}
            dispatch={dispatch}
            onChange={() => {}}
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
