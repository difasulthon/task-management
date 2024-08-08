import Constants from "../../../constants";

import type { ActionType } from "../Detail.types";

const {
  INPUT_FLAG_REDUCERS_TYPE: {
    INPUT_TITLE,
    INPUT_DESCRIPTION,
    INPUT_STATUS,
    INPUT_LABEL,
    INPUT_PRIORITY
  }
} = Constants

const initialInputFlagStates = {
  isShowInputTitle: false,
  isShowInputDescription: false,
  isShowDropdownStatus: false,
  isShowDropdownLabel: false,
  isShowDropdownPriority: false
};

const inputFlagReducer = (state: typeof initialCountState, action: ActionType) => {
  switch (action.type) {
    case INPUT_TITLE: {
      return {
        ...state,
        isShowInputTitle: action.payload,
      };
    }
    case INPUT_DESCRIPTION: {
      return {
        ...state,
        isShowInputDescription: action.payload,
      };
    }
    case INPUT_STATUS: {
      return {
        ...state,
        isShowDropdownStatus: action.payload,
      };
    }
    case INPUT_LABEL: {
      return {
        ...state,
        isShowDropdownLabel: action.payload,
      };
    }
    case INPUT_PRIORITY: {
      return {
        ...state,
        isShowDropdownPriority: action.payload,
      };
    }
    default: () => {};
  }
}

export {
  initialInputFlagStates,
  inputFlagReducer
}