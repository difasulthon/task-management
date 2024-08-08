import React, { ChangeEvent } from "react";

import Constants from "../../../../constants";

import { InputFlagState, ActionType } from "../../Detail.types";

import Input from "../Input";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_TITLE },
} = Constants;

const InputTitle = (props: Props) => {
  const { state, dispatch, onChange } = props;

  return (
    <>
      {state.isShowInputTitle ? (
        <div className="mb-12">
          <Input
            onChange={onChange}
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              optio dolore architecto voluptatem animi nostrum asperiores."
            onCheckClicked={() =>
              dispatch({
                type: INPUT_TITLE,
                payload: !state.isShowInputTitle,
              })
            }
            onCloseClicked={() =>
              dispatch({
                type: INPUT_TITLE,
                payload: !state.isShowInputTitle,
              })
            }
          />
        </div>
      ) : (
        <h3
          onClick={() =>
            dispatch({
              type: INPUT_TITLE,
              payload: !state.isShowInputTitle,
            })
          }
          className="font-medium text-2xl mb-12 hover:cursor-pointer hover:bg-gray-100"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
          dolore architecto voluptatem animi nostrum asperiores.
        </h3>
      )}
    </>
  );
};

export default InputTitle;
