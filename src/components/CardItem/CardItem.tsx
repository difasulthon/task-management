import React from "react";

import Card from "../Card/Card";
import CardLabel from "../CardLabel";

const CardItem = (): React.JSX.Element => {
  return (
    <Card>
      <div className="flex flex-col">
        <h3 className="text-xl text-black font-normal mb-8">
          This is a Title of the task
        </h3>
        <div className="flex justify-between">
          <CardLabel label="Daily Task" isSolid />
          <CardLabel label="High Priority" />
        </div>
        <div className="flex mt-6">
          <box-icon name="bookmarks" type="solid" color="#60B158"></box-icon>
          <p className="text-sm font-semibold ml-1">BMTR-1</p>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
