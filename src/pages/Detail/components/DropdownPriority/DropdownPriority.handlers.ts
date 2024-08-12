import Constants from "../../../../constants";

import { handleEditPriority } from "../../Detail.handler";

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_PRIORITY },
  INPUT_FORM_REDUCERS_TYPE: { PRIORITY },
} = Constants;

const handleOnClick = (state, dispatch) => {
  dispatch({
    type: INPUT_PRIORITY,
    payload: !state.isShowDropdownPriority,
  })
}

const handleOnClickItem = (item, state, dispatch, editDispatch, taskId) => {
  handleEditPriority(taskId, item);
  editDispatch({
    type: PRIORITY,
    payload: item,
  });
  dispatch({
    type: INPUT_PRIORITY,
    payload: !state.isShowDropdownPriority,
  });
};

export {
  handleOnClick,
  handleOnClickItem,
}