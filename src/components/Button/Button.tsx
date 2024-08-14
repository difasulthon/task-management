import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLAttributes> & {
  icon: React.JSX.Element;
  label: string;
  onClick: void;
  width?: string;
  color?: string;
};

const Button = (props: Props): React.JSX.Element => {
  const { icon, label, onClick, width, type, color } = props;
  const colorValue = color ? color : "bg-custom-greenPrimary";

  if (icon) {
    return (
      <button
        onClick={onClick}
        className={`flex flex-row items-center rounded-lg px-2 hover:opacity-50 ${colorValue}`}
        type={type}
      >
        {icon}
        <p className="text-sm text-white ml-2 font-semibold">{label}</p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex justify-center rounded-lg px-2 py-2 hover:opacity-50 ${width} ${colorValue}`}
      type={type}
    >
      <p className="text-sm text-white font-semibold">{label}</p>
    </button>
  );
};

export default Button;
