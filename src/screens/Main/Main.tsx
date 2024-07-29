import React from "react";

import StatusLabel from "../../components/StatusLabel";
import CardItem from "../../components/CardItem";

const Main = () => {
  return (
    <>
      <div className="flex justify-center gap-5 mt-24">
        <div className="flex flex-col">
          <StatusLabel status="TO DO" />
          <div className="p-1 mt-7 bg-custom-secondary">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>
        <div className="flex flex-col">
          <StatusLabel status="IN PROGRESS" />
          <div className="p-1 mt-7 bg-custom-secondary">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>
        <div className="flex flex-col">
          <StatusLabel status="FINISH" />
          <div className="p-1 mt-7 bg-custom-secondary">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
