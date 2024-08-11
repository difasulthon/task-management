import Constants from "../../../constants";

import type { ActionType } from "../Detail.types";

const {
  INPUT_FORM_REDUCERS_TYPE: {
    TITLE,
    DESCRIPTION,
    STATUS,
    LABEL,
    PRIORITY,
    FULL_DATA
  }
} = Constants

const initialEditFormStates = {
  title: '',
  description: '',
  status: null,
  label: null,
  priority: null,
  fullData: null
};

const editFormReducer = (state: typeof initialEditFormStates, action: ActionType) => {
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
    case STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case LABEL: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case PRIORITY: {
      return {
        ...state,
        priority: action.payload,
      };
    }
    case FULL_DATA: {
      return {
        ...state,
        fullData: action.payload,
      };
    }
    default: () => {};
  }
}

export {
  initialEditFormStates,
  editFormReducer
}