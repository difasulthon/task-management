import React from "react";

type DropDownItem = {
  id: number;
  label: string;
};

type Props = {
  list: Array<DropDownItem>;
  onClick: (item: DropDownItem) => void;
  value: DropDownItem;
};

const DropdownOptions = (props: Props) => {
  const { list, onClick, value } = props;

  return (
    <ul className="absolute bg-white w-44 rounded-lg py-2 px-2 border border-black mt-1 z-10">
      {list.map((item: ListDropDown) => (
        <li
          key={item.id}
          onClick={() => onClick(item)}
          className={`font-normal text-sm mb-1 border-b border-gray-300 pb-2 hover:opacity-50 hover:cursor-pointer
            ${item.id === value.id ? "bg-custom-secondary" : "bg-white"}
          `}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default DropdownOptions;
