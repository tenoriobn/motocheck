import { atom } from "recoil";

export const stateUserLogin = atom({
  key: 'stateUserLogin',
  default: null
});

export const stateUserDate = atom({
  key: 'stateUserDate',
  default: {}
});

// Ativa e desativa Menu Mobile
export const stateMenuActive = atom({
  key: 'stateMenuActive',
  default: false,
});

// Estados relativos a Gerenciar pessoas
export const statePersonsTableInfo = atom({
  key: 'statePersonsTableInfo',
  default: []
});

// Estados relativos a Gerenciar Usuarios
export const stateUsersTableInfo = atom({
  key: 'stateUsersTableInfo',
  default: []
});

// Estados para manutenções corretivas
export const stateCorrectiveMaintenanceInfoTable = atom({
  key: 'stateAllCorrectiveMaintenances',
  default: []
});

// Estados para manutenções programadas
export const stateScheduledMaintenanceInfoTable = atom({
  key: 'stateAllScheduledMaintenances',
  default: []
});

// Estados para cadastrar veiculo
export const stateVehicleInfoTable = atom({
  key: 'stateVehicleInfoTable',
  default: []
});

// Estados para cadastrar veiculo
export const stateModelInfoTable = atom({
  key: 'stateModelInfoTable',
  default: []
});


// Estados envolvendo modal
export const stateOpenModal = atom({
  key: 'stateOpenModal',
  default: null
});

export const stateModalInfo = atom({
  key: 'stateModalInfo',
  default: null
});


// Estados dos Cargos
export const stateCargos = atom({
  key: 'stateCargos',
  default: null
});