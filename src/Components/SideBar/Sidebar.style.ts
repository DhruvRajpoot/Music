import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 100vh;
  background: rgb(5, 1, 68);
  background: linear-gradient(
    180deg,
    rgba(5, 1, 68, 1) 100%,
    rgba(45, 45, 45, 0.6251750700280112) 100%
  );
  gap: 3rem;
  z-index: 99;
  position: sticky;
  top: 0;

  @media (max-width: 756px) {
    position: fixed;
    bottom: 0;
    top: calc(100vh - 4rem);
    width: calc(2.5rem + 1vw);
    height: 4rem;
    width: 100vw;
    flex-direction: row;
    background: rgb(6, 2, 67);
    background: linear-gradient(
      180deg,
      rgba(6, 2, 67, 0.6811974789915967) 0%,
      rgba(6, 2, 67, 0.7792366946778712) 17%,
      rgba(5, 1, 68, 1) 100%
    );
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  text-decoration: none;

  @media (max-width: 756px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: calc(2rem + 0.5vw);
`;

export const Title = styled.p`
  color: white;
  font-size: 1.5rem;

  @media (max-width: 756px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 756px) {
    flex-direction: row;
    justify-content: space-around;
    width: 90vw;
  }
`;

export const Icon = styled.div`
  font-size: calc(2rem - 0.7vw);
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

export const LinkTitle = styled.p`
  @media (max-width: 756px) {
    display: none;
  }
`;
