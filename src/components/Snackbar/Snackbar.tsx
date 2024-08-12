import React from "react";

type Props = {
  message: string;
};

const Snackbar = (props: Props): React.JSX.Element => {
  const { message } = props;

  return (
    <div className="bg-custom-redPrimary flex flex-row px-3 py-3 h-14 w-72 justify-center items-center rounded-md absolute top-4 z-10">
      <p className="font-medium text-white mr-2">{message}</p>
    </div>
  );
};

export default Snackbar;
