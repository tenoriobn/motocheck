import { useState } from "react";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { useFetchApi } from "src/hooks/api/useFetchApi";
import { usePostApi } from "src/hooks/api/usePostApi";
import { stateOpenModal } from "../../store/atom";

function useRegisterManutencaoCadastrada() {
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [newMaintenanceInfo, setNewMaintenanceInfo] = useState({});
  const setOpenModal = useSetRecoilState(stateOpenModal);
  const { fetchData } = useFetchApi();
  const { postData } = usePostApi(true);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const vehicleSearchResponse = await fetchData(`/veiculos/search/placaveiculo/${vehiclePlate}`);

      const idVeiculo = vehicleSearchResponse?.[0]?.idVeiculo;
      if (!vehicleSearchResponse?.length || !idVeiculo) throw new Error('Veículo não encontrado!');

      await postData('/manutencao/programada/cadastrar', { ...newMaintenanceInfo, idVeiculo });
      toast.success('Cadastrado com sucesso!');

      setOpenModal(false)

    } catch (error) {
      if (error.message === 'Veículo não encontrado!') {
        toast.error(error.message);
      } else {
        console.error("Erro ao enviar dados:", error);
        toast.error('Erro ao enviar dados');
      }
    }
  };

  return {
    vehiclePlate,
    setVehiclePlate,
    newMaintenanceInfo,
    setNewMaintenanceInfo,
    handleCreate,
  };
}

export default useRegisterManutencaoCadastrada;
