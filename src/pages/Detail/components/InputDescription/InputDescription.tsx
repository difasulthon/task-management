import React, { ChangeEvent } from "react";

import Constants from "../../../../constants";

import type { ActionType, InputFlagState } from "../../Detail.types";

import Input from "../Input";

type Props = {
  state: InputFlagState;
  dispatch: (action: ActionType) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const {
  INPUT_FLAG_REDUCERS_TYPE: { INPUT_DESCRIPTION },
} = Constants;

const InputDescription = (props: Props) => {
  const { state, dispatch, onChange } = props;

  return (
    <>
      {state.isShowInputDescription ? (
        <div className="mb-12">
          <Input
            isArea={true}
            onChange={onChange}
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
            dolore architecto voluptatem animi nostrum asperiores."
            onCheckClicked={() =>
              dispatch({
                type: INPUT_DESCRIPTION,
                payload: !state.isShowInputDescription,
              })
            }
            onCloseClicked={() =>
              dispatch({
                type: INPUT_DESCRIPTION,
                payload: !state.isShowInputDescription,
              })
            }
          />
        </div>
      ) : (
        <p
          onClick={() =>
            !state.isShowInputTitle &&
            dispatch({
              type: INPUT_DESCRIPTION,
              payload: !state.isShowInputDescription,
            })
          }
          className="font-normal text-base hover:cursor-pointer hover:bg-gray-100"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
          dolore architecto voluptatem animi nostrum asperiores.
        </p>
      )}
    </>
  );
};

export default InputDescription;
