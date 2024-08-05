import React from "react";

const Detail = (): React.JSX.Element => {
  return (
    <div className="flex w-12/12 justify-center">
      <div className="flex flex-row gap-3 pt-10 w-7/12">
        <div className="flex flex-col max-w-xl">
          <h3 className="font-medium text-2xl mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
            dolore architecto voluptatem animi nostrum asperiores.
          </h3>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
            dolore architecto voluptatem animi nostrum asperiores.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex bg-custom-bluePrimary h-8 items-center px-4 py-3 rounded-md gap-1">
            <p className="text-white text-base">IN PROGRESS</p>
            <box-icon name="chevron-down" color="white" size="sm"></box-icon>
          </div>
          <div className="mt-9 border-2 border-custom-greySecondary py-2 rounded-md">
            <div className="mb-2">
              <p className="text-black font-semibold text-sm ml-2">Details</p>
              <div className="border-b-2 border-custom-greySecondary mt-1"></div>
            </div>
            <div className="mb-3 ml-2">
              <p className="text-black font-normal text-sm">Label</p>
              <p className="text-custom-bluePrimary font-medium text-sm">
                Daily Task
              </p>
            </div>
            <div className="ml-2">
              <p className="text-black font-normal text-sm">Priority</p>
              <p className="text-custom-redPrimary font-medium text-sm">
                High Priority
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
