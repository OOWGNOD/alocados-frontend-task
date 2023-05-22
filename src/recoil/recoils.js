import { atom } from "recoil";

export const UserBalance = atom({
    key: "UserBalance",
    default: { ETH: 2000, SOL: 0, BNB: 0 },
});

export const ChangeHistory = atom({
    key: "ChangHistory",
    default: [],
});
