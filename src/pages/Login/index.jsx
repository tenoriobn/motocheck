import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { postApi, salvarToken } from '../../common/http/http';
import { stateUserLogin } from '../../common/states/atom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const LeftSide = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  justify-content: center;
  align-items: center;
  width: 60%;

  img {
    max-width: 300px
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white}!important;
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 1.875rem;

  h1 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.75rem;
    margin-bottom: 1.875rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  label {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
  }

  input {
    outline: none;
    border: .125rem solid ${({ theme }) => theme.colors.lightBlue};
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-radius: .625rem;
    font-size: .875rem;
    margin-top: .25rem;
    padding: 1.15rem;
    width: 100%;
    box-sizing: border-box;
    transition: all .3s ease-in-out;

    &:focus {
      border: .125rem solid ${({ theme }) => theme.colors.darkGreen};
    }
  }

  button {
    border: none;
    border-radius: .625rem;
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    width: 100%;
    padding: 1.25rem;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGreen};
    }
  }

  @media (min-width: 992px) {
    button {
      max-width: 200px;
      padding: .75rem;
    }
  }
`;

export default function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const setUserLogin = useSetRecoilState(stateUserLogin);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await postApi('/usuarios/authenticate', {login, senha});

      if (response && response.token) {
        salvarToken(response.token);
        setUserLogin(response.token);
        navigate('/dashboard');
      } else {
        throw new Error('Token não encontrado na resposta.');
      }
    } catch (error) {
      toast.error(error.response.data.response || 'Erro ao fazer login');
    }
  }

  return (
    <LoginContainer>
      <LeftSide>
        <img src="" alt="" />
      </LeftSide>

      <RightSide>
        <FormContainer >
          <center><h1>Motocheck</h1></center>

          <Form onSubmit={handleLogin}>
            <label htmlFor="login">
              Usuário
              <input
                type="login"
                name="login"
                value={login || ''}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </label>
            
            <label htmlFor="senha">
              Senha
              <input
                type="password"
                name="senha"
                value={senha || ''}
                onChange={(e) => setSenha(e.target.value)}
              />
            </label>

            <button type="submit">Acessar</button>
          </Form>

          <ToastContainer />
        </FormContainer>
      </RightSide>
    </LoginContainer>
  );
}
