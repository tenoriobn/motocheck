import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { stateUserDate } from 'src/store/atom.js';
import { usePostApi } from '../api/usePostApi';
import { salvarToken } from 'src/http/http';

export const useLogin = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const setUserData = useSetRecoilState(stateUserDate);
  const { postData, loading } = usePostApi(true);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await postData('/usuarios/authenticate', { login, senha });

      if (response && response.token) {
        salvarToken(response);
        setUserData(response);
        navigate('/dashboard');
      } else {
        throw new Error('Token não encontrado na resposta.');
      }
    } catch (error) {
      toast.error(error?.response?.data?.response || 'Erro ao fazer login');
    }
  };

  return {
    login,
    setLogin,
    senha,
    setSenha,
    handleLogin,
    loading
  };
};
