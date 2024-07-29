import React from "react";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="p-3 bg-white rounded-lg flex flex-col w-72 mb-3">
      {children}
    </div>
  );
}

export default Card;
