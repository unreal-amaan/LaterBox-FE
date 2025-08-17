import { atom } from "recoil";
import { persistAtom } from "./persistAtom";

export const menuState = atom<boolean>({
    key: "menu",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

