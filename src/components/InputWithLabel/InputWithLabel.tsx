import React from "react";
import Input, { Props as InputProps } from "../Input/Input";

type Props = InputProps & {
  label: string;
};

const InputWithLabel = (props: Props) => {
  const { label, type, onChange, placeholder, value, isArea } = props;

  return (
    <div className="flex flex-col">
      <p className="font-medium text-md mb-1">{label}</p>
      <Input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        isArea={isArea}
      />
    </div>
  );
};

export default InputWithLabel;
