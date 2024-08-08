import { initialInputFlagStates } from "./reducers/InputFlagReducer";

export type InputFlagType = (typeof Constants.INPUT_FLAG_REDUCERS_TYPE)[keyof typeof Constants.INPUT_FLAG_REDUCERS_TYPE];

export type ActionType = { 
  type: InputFlagType,
  payload: boolean
};

export type InputFlagState = typeof initialInputFlagStates;