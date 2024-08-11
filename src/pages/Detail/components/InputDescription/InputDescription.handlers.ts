import Constants from "../../../../constants";

import { handleEditDescription } from "../../Detail.handler";

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_DESCRIPTION },
  INPUT_FORM_REDUCERS_TYPE: { DESCRIPTION },
} = Constants;

const handleOnChange = (e, dispatch) => {
  dispatch({
    type: DESCRIPTION,
    payload: e.target.value,
  });
};

const handleOnCheckClicked = (taskId, value, state, dispatch) => {
  handleEditDescription(taskId, value, dispatch);
  dispatch({
    type: INPUT_DESCRIPTION,
    payload: !state.isShowInputDescription,
  });
};

const handleOnCloseClicked = (value, state, flagDispatch, editDispatch) => {
  editDispatch({
    type: DESCRIPTION,
    payload: value,
  });
  flagDispatch({
    type: INPUT_DESCRIPTION,
    payload: !state.isShowInputDescription,
  });
};

const handleOnClickDescription = (state, dispatch) => {
  dispatch({
    type: INPUT_DESCRIPTION,
    payload: !state.isShowInputDescription,
  });
};

export {
  handleOnChange,
  handleOnCheckClicked,
  handleOnCloseClicked,
  handleOnClickDescription
}