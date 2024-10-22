/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { stateUserLogin } from "../../common/states/atom";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function ProtectedRoute({ element }) {
  const [userLogin, setUserLogin] = useRecoilState(stateUserLogin);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setUserLogin(token);

      console.log('token: ', jwtDecode(token))
    } else {
      navigate('/', { replace: true });
    }
  }, [setUserLogin, navigate]);


  if (!userLogin) {
    return null;
  }

  return element;
}
