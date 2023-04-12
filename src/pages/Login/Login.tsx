import {
  Button,
  Heading,
  HeadingContainer,
  LoginContainer,
  Logo,
  Para,
} from "./Login.style";
import { FaSpotify } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import LoginFunction from "../../utils/LoginFunction";
import { useEffect } from "react";

const Login = () => {
  const token = localStorage.getItem("token");
  useEffect(()=>{
    if(token){
      window.location.href = "/"
    }
  },[token])
  return (
        <LoginContainer>
          <HeadingContainer>
            <Logo src={logo} alt="logo" />
            <Heading>Music</Heading>
          </HeadingContainer>
          <Para>Please login with your Spotify account to continue</Para>
          <Button onClick={LoginFunction}>
            <FaSpotify />
            Login
          </Button>
        </LoginContainer>
  );
};

export default Login;
