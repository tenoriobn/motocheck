import axios from 'axios';
import Cookies from 'js-cookie';

// Configuração base do Axios
export const apiClient = axios.create({
  baseURL: `http://localhost:8080/api`,
});

apiClient.interceptors.request.use((config) => {
  const userDataInfo = Cookies.get('userDataInfo');
  const parsedData = JSON.parse(userDataInfo);

  if (parsedData.token) {
    config.headers.Authorization = `Bearer ${parsedData.token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Funções para manipulação do token
export const salvarToken = (data) => {
  Cookies.set('userDataInfo', JSON.stringify(data), { expires: 1 });
};

export const removerToken = () => {
  Cookies.remove('userDataInfo');
};