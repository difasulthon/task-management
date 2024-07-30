import React from "react";

type Props = {
  label: string;
  isSolid: boolean;
};

const CardLabel = (props: Props): React.JSX.Element => {
  const { label, isSolid } = props;

  if (isSolid) {
    return (
      <div className="flex rounded-md px-2 py-1 bg-custom-greySecondary">
        <p className="text-custom-greyPrimary text-xs">{label}</p>
      </div>
    );
  }

  return (
    <div className="flex rounded-md px-2 py-1 bg-white border border-custom-redPrimary">
      <p className="text-custom-redPrimary text-xs">{label}</p>
    </div>
  );
};

export default CardLabel;
