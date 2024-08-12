import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: void;
};

function Card({ children, onClick }: Props): React.JSX.Element {
  return (
    <div
      onClick={onClick}
      className="p-3 bg-white rounded-lg flex flex-col w-72 mb-1 hover:cursor-pointer hover:opacity-75"
    >
      {children}
    </div>
  );
}

export default Card;
