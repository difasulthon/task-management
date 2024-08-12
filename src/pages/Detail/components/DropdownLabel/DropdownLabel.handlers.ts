import Constants from "../../../../constants";

import { handleEditLabel } from "../../Detail.handler";

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_LABEL },
  INPUT_FORM_REDUCERS_TYPE: { LABEL },
} = Constants;

const handleOnClick = (state, dispatch) => {
  dispatch({
    type: INPUT_LABEL,
    payload: !state.isShowDropdownLabel,
  })
}

const handleOnClickItem = (item, state, dispatch, editDispatch, taskId) => {
  handleEditLabel(taskId, item);
  editDispatch({
    type: LABEL,
    payload: item,
  });
  dispatch({
    type: INPUT_LABEL,
    payload: !state.isShowDropdownLabel,
  });
};

export {
  handleOnClick,
  handleOnClickItem,
}