import Constants from "../../../../constants";
import { handleEditStatus } from "../../Detail.handler";

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_STATUS },
  INPUT_FORM_REDUCERS_TYPE: { STATUS },
} = Constants;

const handleOnClick = (state, dispatch) => {
  dispatch({
    type: INPUT_STATUS,
    payload: !state.isShowDropdownStatus,
  })
}

const handleOnClickItem = (item, state, dispatch, editDispatch, taskId) => {
  handleEditStatus(taskId, item);
  editDispatch({
    type: STATUS,
    payload: item,
  });
  dispatch({
    type: INPUT_STATUS,
    payload: !state.isShowDropdownStatus,
  });
};

const getBackgroundColor = (item) => {
  switch(item.id) {
    case 1: {
      return "bg-custom-bluePrimary"
    }
    case 2: {
      return "bg-custom-greenPrimary"
    }
    case 3: {
      return "bg-custom-primary"
    }
    default: {
      return "bg-custom-bluePrimary"
    }
  }
}

export {
  handleOnClick,
  handleOnClickItem,
  getBackgroundColor
}