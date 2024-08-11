import React from "react";

import type { Task } from "../../types/Task.type";

import Card from "../Card/Card";
import CardLabel from "../CardLabel";

import {
  getLabelBackgroundColor,
  getLabelTextColor,
  getPriorityBorderColor,
  getPriorityTextColor,
} from "./CardItem.handlers";

type Props = {
  onClick: void;
  data: Task;
};

const CardItem = (props: Props): React.JSX.Element => {
  const { onClick, data } = props;

  const backgroundColorLabel = getLabelBackgroundColor(data.label.id);
  const textColorLabel = getLabelTextColor(data.label.id);
  const borderColorPriority = getPriorityBorderColor(data.priority.id);
  console.log("borderColorPriority", borderColorPriority);
  const textColorPriority = getPriorityTextColor(data.priority.id);

  return (
    <Card onClick={onClick}>
      <div className="flex flex-col">
        <h3 className="text-xl text-black font-normal mb-8">{data.title}</h3>
        <div className="flex justify-between">
          <CardLabel
            label={data.label.label}
            isSolid
            backgroundSolidColor={backgroundColorLabel}
            textSolidColor={textColorLabel}
          />
          <CardLabel
            label={data.priority.label}
            borderColor={borderColorPriority}
            textColor={textColorPriority}
          />
        </div>
        <div className="flex mt-6">
          <box-icon name="bookmarks" type="solid" color="#60B158"></box-icon>
          <p className="text-sm font-semibold ml-1">{data.taskNumber}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
