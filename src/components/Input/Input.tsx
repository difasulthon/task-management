import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

export type Props = {
  type: HTMLInputTypeAttribute;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  placeholder: string;
  isArea: boolean;
  required: boolean;
  rightIcon: React.ReactNode;
  onClickRightIcon: void;
};

const Input = (props: Props): React.JSX.Element => {
  const {
    type,
    onChange,
    value,
    placeholder,
    isArea,
    required,
    rightIcon,
    onClickRightIcon,
  } = props;

  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  if (isArea) {
    return (
      <textarea
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={`bg-white border rounded-lg py-2 pl-2 w-80 font-normal text-sm h-24
        ${isFocused ? "border-custom-primary" : "border-black"}
      `}
        placeholder={placeholder}
        required={required}
      />
    );
  }

  return (
    <div className="relative">
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
      <div
        className="absolute right-0 top-2 hover:cursor-pointer hover:opacity-50"
        onClick={onClickRightIcon}
      >
        {value && rightIcon}
      </div>
    </div>
  );
};

export default Input;
