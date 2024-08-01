import React from "react";

import type { DropDownItem, Props } from "./Dropdown.types";

const Dropdown = (props: Props) => {
  const { list, placeholder, onChange } = props;

  const [isShowList, setIsShowList] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<DropDownItem>({});

  const clickSelectorHandler = () => {
    setIsShowList(!isShowList);
  };

  const clickItemHandler = (item) => {
    setValue(item);
    setIsShowList(!isShowList);
    onChange(item);
  };

  return (
    <>
      <div
        className={`w-80 bg-white border rounded-lg py-2 px-2 flex flex-row justify-between hover:cursor-pointer
          ${isShowList ? "border-custom-primary" : "border-black"}`}
        onClick={clickSelectorHandler}
      >
        <p className="font-normal text-sm">{value.label || placeholder}</p>
        {isShowList ? (
          <box-icon name="chevron-down"></box-icon>
        ) : (
          <box-icon name="chevron-up"></box-icon>
        )}
      </div>
      {isShowList && (
        <ul className="bg-white w-80 rounded-lg py-2 px-2 border border-black mt-1">
          {list.map((item: ListDropDown) => (
            <li
              key={item.id}
              onClick={() => clickItemHandler(item)}
              className={`font-normal text-sm mb-1 border-b border-gray-300 pb-2 hover:opacity-50 hover:cursor-pointer
                ${item.id === value.id ? "bg-custom-secondary" : "bg-white"}
              `}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
