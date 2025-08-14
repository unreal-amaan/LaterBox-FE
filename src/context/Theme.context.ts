import { atom } from "recoil";
import { persistAtom } from "./persistAtom";

export const themeState = atom({
    key: "theme",
    default: "dark",
    effects_UNSTABLE: [persistAtom],
});
