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
  bottom: 0;

  @media (max-width: 756px) {
    position: fixed;
    width: calc(2.5rem + 1vw);
    height: 4rem;
    width: 100vw;
    flex-direction: row;
    background: rgb(87, 79, 216);
    background: linear-gradient(
      180deg,
      rgba(87, 79, 216, 0.44030112044817926) 0%,
      rgba(87, 79, 216, 0.7512254901960784) 60%,
      rgba(87, 79, 216, 0.8800770308123249) 98%
    );
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
