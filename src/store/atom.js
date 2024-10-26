import { atom } from "recoil";

export const stateUserLogin = atom({
  key: 'userLogin',
  default: null
});

export const stateUserDate = atom({
  key: 'stateUserDate',
  default: {}
})

// Ativa e desativa Menu Mobile
export const stateMenuActive = atom({
  key: 'menuActive',
  default: false,
});

// Estados para manutenções corretivas
export const stateAllCorrectiveMaintenances = atom({
  key: 'allCorrectiveMaintenances',
  default: []
})

// Estados envolvendo modal
export const stateOpenModal = atom({
  key: 'openModal',
  default: null
})