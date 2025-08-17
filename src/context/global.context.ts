import { atom } from "recoil";
import { persistAtom } from "./persistAtom";

export const themeState = atom({
  key: "theme",
  default: "dark",
  effects_UNSTABLE: [persistAtom],
});

export const isLoadingState = atom<boolean>({
  key: "isLoading",
  default: true,
});

export const authState = atom<boolean | null>({
  key: "auth",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
