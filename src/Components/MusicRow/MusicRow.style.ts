import styled from "styled-components";

export const MusicRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: calc(1rem + 1vw);
`;

export const Title = styled.h5`
  display: flex;
  color: gray;
  letter-spacing: .5px;
  font-size: calc(.9rem + .1vw);
  text-decoration: underline;
  text-underline-offset: .5rem;
`;

export const MusicRowList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(5rem + 3vw), 1fr));
  grid-gap: 1rem;
  grid-row-gap: 2rem;
`;  
