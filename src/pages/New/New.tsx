import React from "react";

import InputWithLabel from "../../components/InputWithLabel";
import Button from "../../components/Button";
import DropdownWithLabel from "../../components/DropdownWithLabel";

import { listLabel, listPriority } from "../../configs/Options.config";

const New = (): React.JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-6/12 items-center">
        <div className="h-16"></div>
        <InputWithLabel
          type="text"
          label="Title"
          placeholder="Input title"
          onChange={() => {}}
          value=""
        />
        <div className="h-5"></div>
        <InputWithLabel
          isArea
          type="text"
          label="Description"
          placeholder="Input description"
          onChange={() => {}}
          value=""
        />
        <div className="h-5"></div>
        <DropdownWithLabel
          label="Label"
          placeholder="Select label"
          list={listLabel}
          onChange={(item) => console.log("item", item)}
        />
        <div className="h-5"></div>
        <DropdownWithLabel
          label="Priority"
          placeholder="Select priority"
          list={listPriority}
          onChange={(item) => console.log("item", item)}
        />
        <div className="h-10"></div>
        <Button label="Submit" onClick={() => {}} width="w-80" />
      </div>
    </div>
  );
};

export default New;
