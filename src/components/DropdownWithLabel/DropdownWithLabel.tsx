import React from "react";

import Dropdown from "../Dropdown/Dropdown";
import type { Props as DropdownProps } from "../Dropdown/Dropdown.types";

type Props = DropdownProps & {
  label: string;
};

const DropdownWithLabel = (props: Props) => {
  const { placeholder, onChange, list, label } = props;

  return (
    <div className="flex flex-col">
      <p className="font-medium text-md mb-1">{label}</p>
      <Dropdown placeholder={placeholder} onChange={onChange} list={list} />
    </div>
  );
};

export default DropdownWithLabel;
