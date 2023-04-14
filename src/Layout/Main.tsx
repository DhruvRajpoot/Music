import { useState, useEffect } from "react";
import { MainContainer, MainContent } from "./Main.style";
import Sidebar from "../Components/SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
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
