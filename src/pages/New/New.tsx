import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputWithLabel from "../../components/InputWithLabel";
import Button from "../../components/Button";
import DropdownWithLabel from "../../components/DropdownWithLabel";

import { listLabel, listPriority } from "../../configs/Options.config";
import Constants from "../../constants";

import {
  initialInputFormStates,
  inputFormReducer,
} from "./reducers/InputForm.reducer";
import { handleInput, handleSelect, handleSubmit } from "./New.handlers";
import type { ActionType, InputFormState } from "./New.types";
import Snackbar from "../../components/Snackbar";

const {
  INPUT_FORM_REDUCERS_TYPE: { TITLE, DESCRIPTION, LABEL, PRIORITY },
} = Constants;

const New = (): React.JSX.Element => {
  const [state, dispatch] = useReducer<{
    state: InputFormState;
    action: ActionType;
  }>(inputFormReducer, initialInputFormStates);

  const [error, setError] = useState<boolean>(false);
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const errorStates = { error, setError, setIsShowError };

  useEffect(() => {
    if (isShowError) {
      setTimeout(() => {
        setIsShowError(false);
      }, 3000);
    }
  }, [error]);

  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      {error && isShowError && <Snackbar message={error} />}
      <div className="flex flex-col w-6/12 items-center">
        <div className="h-16"></div>
        <form action="" method="get">
          <InputWithLabel
            type="text"
            label="Title"
            placeholder="Input title"
            onChange={(e) => handleInput(e, dispatch, TITLE)}
            value={state.title}
            required
          />
          <div className="h-5"></div>
          <InputWithLabel
            isArea
            type="text"
            label="Description"
            placeholder="Input description"
            onChange={(e) => handleInput(e, dispatch, DESCRIPTION)}
            value={state.description}
          />
          <div className="h-5"></div>
          <DropdownWithLabel
            label="Label"
            placeholder="Select label"
            list={listLabel}
            onChange={(item) => handleSelect(item, dispatch, LABEL)}
          />
          <div className="h-5"></div>
          <DropdownWithLabel
            label="Priority"
            placeholder="Select priority"
            list={listPriority}
            onChange={(item) => handleSelect(item, dispatch, PRIORITY)}
          />
          <div className="h-10"></div>
          <Button
            label="Submit"
            type="submit"
            onClick={(e) => handleSubmit(e, state, navigate, errorStates)}
            width="w-80"
          />
        </form>
      </div>
    </div>
  );
};

export default New;
