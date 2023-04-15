import styled from "styled-components";

export const PlaylistRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: calc(.5rem + 1.5vw);
  color: white;
`;

export const Title = styled.h5`
  display: flex;
  letter-spacing: 0.5px;
  font-size: 1.3rem;
  text-underline-offset: 0.5rem;
`;

export const PlaylistRowList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem,12rem));
  grid-gap: calc(.3rem + 1.7vw);

  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(7rem,.6fr));
  }
`;
