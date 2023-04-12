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
  display: flex;
  flex-wrap: wrap;
  gap: calc(1rem + .5vw);
  padding-bottom:1rem ;
`;  
