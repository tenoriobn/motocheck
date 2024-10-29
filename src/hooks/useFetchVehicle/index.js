import { useFetchApi } from "src/hooks/api/useFetchApi";
import { toast } from "react-toastify";

function useFetchVehicle() {
  const { fetchData } = useFetchApi();

  const fetchVehicleIdByPlate = async (vehiclePlate) => {
    try {
      const response = await fetchData(`/veiculos/search/placaveiculo/${vehiclePlate}`);
      const idVeiculo = response?.[0]?.idVeiculo;

      if (!response?.length || !idVeiculo) {
        throw new Error('Veículo não encontrado!');
      }

      return idVeiculo;
      
    } catch (error) {
      if (error.message === 'Veículo não encontrado!') {
        toast.error('Veículo não encontrado!');
      }
      
      throw error;
    }
  };

  return { fetchVehicleIdByPlate };
}

export default useFetchVehicle;
