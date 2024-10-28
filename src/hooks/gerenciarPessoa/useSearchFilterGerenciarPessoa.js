import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useFetchApi } from "../api/useFetchApi";
import { statePersonsTableInfo } from "src/store/atom.js";

export const useSearchFilterGerenciarPessoa = () => {
  const [filtro, setFiltro] = useState({});
  const { data, error, loading, fetchData } = useFetchApi();
  const setPersonsTableInfo = useSetRecoilState(statePersonsTableInfo);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    const searchOptions = filtro.searchOption === "name" ? "nome" : "cpf";
    const endpoint = `/pessoas/search/${searchOptions}/like/${filtro.identifier}`;

    try {
      const response = await fetchData(endpoint);

      console.log(response)
      setPersonsTableInfo(response);
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
