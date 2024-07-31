import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

export type Props = {
  type: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const Input = (props: Props): React.JSX.Element => {
  const { type, onChange, value, placeholder } = props;

  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      className={`bg-white border rounded-lg py-2 pl-2 w-80 font-normal text-sm 
        ${isFocused ? "border-custom-primary" : "border-black"}
      `}
      placeholder={placeholder}
    />
  );
};

export default Input;
