import Constants from "../../../../constants";

import { handleEditTitle } from "../../Detail.handler";

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_TITLE },
  INPUT_FORM_REDUCERS_TYPE: { TITLE },
} = Constants;

const handleOnChange = (e, dispatch) => {
  dispatch({
    type: TITLE,
    payload: e.target.value,
  });
};

const handleOnCheckClicked = (taskId, value, state, dispatch) => {
  handleEditTitle(taskId, value, dispatch);
  dispatch({
    type: INPUT_TITLE,
    payload: !state.isShowInputTitle,
  });
};

const handleOnCloseClicked = (value, state, flagDispatch, editDispatch) => {
  editDispatch({
    type: TITLE,
    payload: value,
  });
  flagDispatch({
    type: INPUT_TITLE,
    payload: !state.isShowInputTitle,
  });
};

const handleOnClickTitle = (state, dispatch) => {
  dispatch({
    type: INPUT_TITLE,
    payload: !state.isShowInputTitle,
  });
};

export {
  handleOnChange,
  handleOnCheckClicked,
  handleOnCloseClicked,
  handleOnClickTitle
}