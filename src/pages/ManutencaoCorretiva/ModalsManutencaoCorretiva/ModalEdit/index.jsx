import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ModalForm } from "src/common/styles/modalsStyles";
import { stateModalInfo } from "src/store/atom";
import { usePutApi } from "src/hooks/api/usePutApi";

export default function ModalEdit() {
  const modalInfo = useRecoilValue(stateModalInfo);
  const [newMaintenanceInfo, setNewMaintenanceInfo] = useState({});
  const { putData } = usePutApi(true)

  useEffect(() => {
    setNewMaintenanceInfo({
      idVeiculo: modalInfo.idVeiculo,
      dataManutencao: modalInfo.dataManutencao,
      descricaoManutencao: modalInfo.descricaoManutencao,
      kmManutencao: modalInfo.kmManutencao
    });
  }, [modalInfo])

  const handleEdit = async (event) => {
    event.preventDefault();

    try {
      // lógica aqui

      const response = await putData('/manutencao/programada/atualizar', newMaintenanceInfo);

      console.log('response', response)

    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <ModalForm id="frmAddPack" onSubmit={handleEdit}>
      <label htmlFor="appointment_date">
        Data de agendamento
        <input
          type="date"
          id="appointment_date"
          placeholder="Ex: 01/01/2024"
          value={newMaintenanceInfo.dataManutencao || ''}
          onChange={(e) => setNewMaintenanceInfo({ ...newMaintenanceInfo, dataManutencao: e.target.value})}
          required
        />
      </label>

      <label htmlFor="km_maintenance">
        Km Manutenção
        <input
          type="number"
          id="km_maintenance"
          placeholder="Ex: 127659"
          value={newMaintenanceInfo.kmManutencao || ''}
          onChange={(e) => setNewMaintenanceInfo({ ...newMaintenanceInfo, kmManutencao: e.target.value})}
          required
        />
      </label>

      <label htmlFor="maintenance_description">
        Descrição
        <input
          type="text"
          id="maintenance_description"
          placeholder="Ex: Troca de óleo e vela..."
          value={newMaintenanceInfo.descricaoManutencao || ''}
          onChange={(e) => setNewMaintenanceInfo({ ...newMaintenanceInfo, descricaoManutencao: e.target.value})}
          required
        />
      </label>

      <button type="submit">Criar</button>
    </ModalForm>
  );
}
