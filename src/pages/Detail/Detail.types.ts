import Constants from "../../constants";

import { initialEditFormStates } from "./reducers/EditForm.reducer";
import { initialInputFlagStates } from "./reducers/InputFlag.reducer";

export type InputFlagType = (typeof Constants.INPUT_FLAG_REDUCERS_TYPE)[keyof typeof Constants.INPUT_FLAG_REDUCERS_TYPE];
export type InputFlagType = (typeof Constants.INPUT_FORM_REDUCERS_TYPE)[keyof typeof Constants.INPUT_FORM_REDUCERS_TYPE];

export type ActionType = { 
  type: InputFlagType,
  payload: boolean
};

export type InputFlagState = typeof initialInputFlagStates;
export type InputFormState = typeof initialEditFormStates;