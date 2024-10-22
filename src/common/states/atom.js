import { atom } from "recoil";

export const stateUserLogin = atom({
  key: 'userLogin',
  default: null
});

export const stateUserDate = atom({
  key: 'stateUserDate',
  default: {}
})

export const stateMenuActive = atom({
  key: 'menuActive',
  default: false,
});