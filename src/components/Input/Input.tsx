import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

type Props = {
  type: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = (props: Props): React.JSX.Element => {
  const { type, onChange, value } = props;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="border-black bg-white border rounded-lg py-2 pl-2 w-80 font-normal text-sm"
      placeholder="Search task"
    />
  );
};

export default Input;
