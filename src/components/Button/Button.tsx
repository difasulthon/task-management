import React from "react";

type Props = {
  icon: React.JSX.Element;
  label: string;
  onClick: void;
};

const Button = (props: Props): React.JSX.Element => {
  const { icon, label, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="flex flex-row items-center bg-custom-greenPrimary rounded-lg px-2"
    >
      {icon}
      <p className="text-sm text-white ml-2 font-semibold">{label}</p>
    </button>
  );
};

export default Button;
