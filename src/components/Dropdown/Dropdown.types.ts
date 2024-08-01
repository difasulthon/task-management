export type DropDownItem = {
  id: number;
  label: string;
};

export type Props = {
  list: Array<DropDownItem>;
  placeholder: string;
  onChange: (item: DropDownItem) => void;
};