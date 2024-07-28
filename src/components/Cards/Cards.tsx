import React from "react";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function Cards({ children, style }: Props) {
  return (
    <div style={style} className="flex p-3 bg-white rounded-lg">
      {children}
    </div>
  );
}

export default Cards;
