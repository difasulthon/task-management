import React from "react";

import InputWithLabel from "../../components/InputWithLabel";

const New = (): React.JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-6/12">
        <div className="flex flex-row gap-8 mb-8">
          <InputWithLabel
            type="text"
            label="Title"
            placeholder="Input title"
            onChange={() => {}}
            value=""
          />
          <InputWithLabel
            type="text"
            label="Label"
            placeholder="Input label"
            onChange={() => {}}
            value=""
          />
        </div>
        <InputWithLabel
          type="text"
          label="Priority"
          placeholder="Input priority"
          onChange={() => {}}
          value=""
        />
      </div>
    </div>
  );
};

export default New;
