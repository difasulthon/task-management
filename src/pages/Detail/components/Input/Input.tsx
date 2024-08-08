import React from "react";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isArea: boolean;
  onCheckClicked: () => void;
  onCloseClicked: () => void;
};

const renderButton = (onCheckClicked, onCloseClicked) => (
  <div className="mt-2 flex flex-row">
    <div
      onClick={onCheckClicked}
      className="border border-black rounded-md w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:opacity-30"
    >
      <box-icon name="check"></box-icon>
    </div>
    <div
      onClick={onCloseClicked}
      className="ml-1 border border-black rounded-md w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:opacity-30"
    >
      <box-icon name="x"></box-icon>
    </div>
  </div>
);

const Input = (props: Props) => {
  const { onChange, value, isArea, onCheckClicked, onCloseClicked } = props;
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  if (isArea) {
    return (
      <div className="flex flex-col">
        <textarea
          type="text"
          onChange={onChange}
          value={value}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          className={`bg-white border rounded-lg py-2 pl-2 w-11/12 h-48 font-normal text-base 
            ${isFocused ? "border-custom-primary" : "border-black"}
          `}
        />
        {renderButton(onCheckClicked, onCloseClicked)}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <input
        type="text"
        onChange={onChange}
        value={value}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={`bg-white border rounded-lg py-2 pl-2 w-11/12 h-16 font-normal text-base 
          ${isFocused ? "border-custom-primary" : "border-black"}
        `}
      />
      {renderButton(onCheckClicked, onCloseClicked)}
    </div>
  );
};

export default Input;
