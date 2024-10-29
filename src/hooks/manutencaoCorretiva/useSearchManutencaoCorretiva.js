import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useFetchApi } from "../api/useFetchApi";
import { stateCorrectiveMaintenanceInfoTable } from "src/store/atom.js";

export const useSearchManutencaoCorretiva = () => {
  const [filtro, setFiltro] = useState({});
  const { data, error, loading, fetchData } = useFetchApi();
  const setCorrectiveMaintenanceInfoTable = useSetRecoilState(stateCorrectiveMaintenanceInfoTable);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    const searchOptions = filtro.searchOption === "plate" ? "placa" : "modelo";
    const endpoint = `/manutencao/corretiva/search/${searchOptions}/${filtro.vehicleIdentifier}`;

    try {
      const response = await fetchData(endpoint);
      setCorrectiveMaintenanceInfoTable(response);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return {
    filtro,
    setFiltro,
    handleSearch,
    loading,
    error,
    data
  };
};
