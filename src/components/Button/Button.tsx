import React from "react";

type Props = {
  icon: React.JSX.Element;
  label: string;
  onClick: void;
  width?: string;
};

const Button = (props: Props): React.JSX.Element => {
  const { icon, label, onClick, width } = props;

  if (icon) {
    return (
      <button
        onClick={onClick}
        className="flex flex-row items-center bg-custom-greenPrimary rounded-lg px-2 hover:opacity-50"
      >
        {icon}
        <p className="text-sm text-white ml-2 font-semibold">{label}</p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex justify-center bg-custom-greenPrimary rounded-lg px-2 py-2 hover:opacity-50 ${width}`}
    >
      <p className="text-sm text-white font-semibold">{label}</p>
    </button>
  );
};

export default Button;
