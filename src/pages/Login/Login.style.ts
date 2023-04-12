import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100vw;
  height: 100vh;
  background-color: rgb(251 178 163);
  color: rgb(255 255 255 / 80%);
`;
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  height: calc(3rem + 2vw);
`;
export const Heading = styled.h1`
  font-size: calc(3rem + 2vw);
`;

export const Para = styled.p`
  font-size: calc(1.2rem + .3vw);
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 50px;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  border: none;
  outline: none;
  background-color: aquamarine;

  &:hover {
    box-shadow: inset 0 0 4px 3px aliceblue;
  }
  &:active {
    transform: scale(0.95);
  }
`;
