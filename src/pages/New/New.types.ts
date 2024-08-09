import Constants from "../../constants";

import { initialInputFormStates } from "./reducers/InputForm.reducer";

export type InputFormType = (typeof Constants.INPUT_FORM_REDUCERS_TYPE)[keyof typeof Constants.INPUT_FORM_REDUCERS_TYPE];

export type ActionType = { 
  type: InputFormType,
  payload: string | number
};

export type InputFormState = typeof initialInputFormStates;