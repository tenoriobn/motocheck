/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { stateUserDate } from "src/store/atom.js";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function ProtectedRoute({ element }) {
  const [userData, setUserData] = useRecoilState(stateUserDate);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataInfo = Cookies.get('userDataInfo');
    
    if (userDataInfo) {
      const parsedData = JSON.parse(userDataInfo);
      setUserData(parsedData);
    } else {
      navigate('/', { replace: true });
    }
  }, [setUserData, navigate]);


  if (!userData) {
    return null;
  }

  return element;
}
