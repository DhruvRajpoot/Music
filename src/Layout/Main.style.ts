import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  width: calc(100vw - 240px);
  min-height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6811974789915967) 0%,
    rgba(0, 0, 0, 0.7792366946778712) 40%,
    rgba(0, 0, 0, 1) 100%
  );

  @media (max-width: 768px) {
    width: 100vw;
  }
`;
