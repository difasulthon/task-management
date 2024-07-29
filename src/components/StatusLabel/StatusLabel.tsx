import React from "react";

type Props = {
  status: string;
};

const StatusLabel = (props: Props) => {
  const { status } = props;

  return (
    <div className="flex justify-center p-3 bg-custom-secondary border-l-4 border-custom-primary w-72">
      <p className="text-sm text-custom-primary font-bold">{status}</p>
    </div>
  );
};

export default StatusLabel;
