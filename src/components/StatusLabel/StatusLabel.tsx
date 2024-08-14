import React from "react";

type Props = {
  status: string;
};

const StatusLabel = (props: Props): React.JSX.Element => {
  const { status } = props;

  return (
    <div className="flex justify-center py-4 bg-custom-greySecondary border-l-4 border-custom-greyPrimary w-12/12 rounded-r-md">
      <p className="text-sm text-custom-greyPrimary font-bold">{status}</p>
    </div>
  );
};

export default StatusLabel;
