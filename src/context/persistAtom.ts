import { recoilPersist } from "recoil-persist";

export const { persistAtom } = recoilPersist({
    key: "laterbox",
    storage: localStorage,
});