import Constants from "../../../constants";

import { ActionType } from "../New.types";

const {
  INPUT_FORM_REDUCERS_TYPE: {
    TITLE,
    DESCRIPTION,
    LABEL,
    PRIORITY
  }
} = Constants;

const initialInputFormStates = {
  title: '',
  description: '',
  label: null,
  priority: null
};

const inputFormReducer = (state: typeof initialInputFormStates, action: ActionType) => {
  switch (action.type) {
    case TITLE: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case DESCRIPTION: {
      return {
        ...state,
        description: action.payload,
      };
    }
    case LABEL: {
      return {
        ...state,
        label: action.payload,
      };
    }
    case PRIORITY: {
      return {
        ...state,
        priority: action.payload,
      };
    }
    default: () => {};
  }
}

export {
  initialInputFormStates,
  inputFormReducer
}