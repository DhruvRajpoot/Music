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
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
`;

export const Logo = styled.img`
  height: 2.5rem;
`;

export const Title = styled.p`
  color: white;
  font-size: 1.5rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Icon = styled.div`
  font-size: 1.3rem;
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
