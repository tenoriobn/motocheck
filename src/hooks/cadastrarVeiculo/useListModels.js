/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFetchApi } from "../api/useFetchApi";

export const useListModels = () => {
  const { fetchData } = useFetchApi();
  const [models, setModels] = useState();

  const handleSearch = async () => {
    try {
      const response = await fetchData('/veiculos/modelos/listar');
      setModels(response);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return {
    models
  };
};
