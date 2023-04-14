import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  width: calc(100vw - 200px);
  min-height: 100vh;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,0.6083683473389356) 2%, rgba(0,0,0,0.9136904761904762) 100%);

  @media (max-width: 768px) {
    width: 100vw;
  }
`;
