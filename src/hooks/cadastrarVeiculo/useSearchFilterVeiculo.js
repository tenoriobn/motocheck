import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useFetchApi } from "../api/useFetchApi";
import { stateVehicleInfoTable } from "src/store/atom.js";

export const useSearchFilterVeiculo = () => {
  const [filtro, setFiltro] = useState({});
  const { data, error, loading, fetchData } = useFetchApi();
  const setVehicleInfoTable = useSetRecoilState(stateVehicleInfoTable);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    const searchOptions = filtro.searchOption === "plate" ? "placa" : "modelo";
    const endpoint = `/veiculos/search/${searchOptions}/${filtro.vehicleIdentifier}`;

    try {
      const response = await fetchData(endpoint);
      setVehicleInfoTable(response);
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
