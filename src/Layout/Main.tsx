import { useState, useEffect } from "react";
import { MainContainer, MainContent } from "./Main.style";
import Sidebar from "../Components/SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../utils/useAxios";
import { getUserDetails } from "../Redux/reducers/userReducer";

const Main = () => {
  const api = useAxios();
  const dispatch=useDispatch();

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  useEffect(() => {
    const hash = window.location.hash;
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      localStorage.setItem("token", _token);
      setToken(_token);
      window.location.hash = "";
    } else if (!token) {
      window.location.href = "/login";
    }
  }, [token]);

  const updateUserFunc = async () => {
    try{
    const res = await api.get(`/me`);
    dispatch(getUserDetails(res.data));
    }
    catch(err:any){
      if(err.message==="Request failed with status code 401"){
        localStorage.removeItem("token");
        window.location.href="/login";
      }
    }
  };

  useEffect(() => {
    updateUserFunc();
  }, []);

  return (
    <MainContainer>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </MainContainer>
  );
};

export default Main;
