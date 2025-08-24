import { atom } from "recoil";
export interface Option {
  label: string;
  value: string;
}

export const suggestions = atom<Option[]>({
  key: "suggestionsOptions",
  default: [],
});

export const selectedIndex = atom<number>({
  key: "selectedIndex",
  default: -1,
});

export const currentText = atom<string>({
  key: "currentText",
  default: "",
});