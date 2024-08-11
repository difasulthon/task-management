import React from "react";

type Props = {
  label: string;
  isSolid: boolean;
  backgroundSolidColor: string;
  textSolidColor: string;
  borderColor: string;
  textColor: string;
};

const CardLabel = (props: Props): React.JSX.Element => {
  const {
    label,
    isSolid,
    backgroundSolidColor,
    textSolidColor,
    borderColor,
    textColor,
  } = props;

  if (isSolid) {
    return (
      <div
        className={`flex rounded-md px-2 py-1 bg-custom-greySecondary ${backgroundSolidColor}`}
      >
        <p className={`text-xs font-medium ${textSolidColor}`}>{label}</p>
      </div>
    );
  }

  return (
    <div className={`flex rounded-md px-2 py-1 bg-white border ${borderColor}`}>
      <p className={`text-xs ${textColor}`}>{label}</p>
    </div>
  );
};

export default CardLabel;
