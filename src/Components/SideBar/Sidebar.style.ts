import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 100vh;
  background-color: #574fd8;
  gap: 3rem;
  position: sticky;
  top: 0;

  @media (max-width: 800px) {
    width: 80px;
  }

  @media (max-width: 500px) {
    width: 60px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  position: absolute;
  top: 1rem;
  left: 1.5rem;

  @media (max-width: 800px) {
    justify-content: center;
    left: 0;
  }
`;

export const Logo = styled.img`
  height: 2.5rem;
`;

export const Title = styled.p`
  color: white;
  font-size: 1.5rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Icon = styled.div`
  font-size: calc(2rem - .8vw);
`;

export const CustomLink = styled(NavLink)`
  display: flex;
  gap: 0.7rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
`;

export const LinkTitle= styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;