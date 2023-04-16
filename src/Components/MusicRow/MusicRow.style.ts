import styled from "styled-components";

export const MusicContainer = styled.div`
  display: grid;
  grid-template-columns: 0.18fr 2.5fr 1.2fr 1fr 0.3fr 0.3fr;
  grid-column-gap: 1rem;
  color: #ccc;
  padding: 0.5rem;
  margin: .5rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 0.15fr 2fr 0.15fr;
  } ;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  gap: calc(.3rem + .7vw);
  font-size: 0.9rem;
`;

export const WebOnlyColumn = styled(Column)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  text-shadow: 1px 0 1px #ccc;
  color: white;
  letter-spacing: 1px;
`;

export const Artist = styled.p`
  font-size: 0.9rem;
`;

export const Icon = styled.button`
  font-size: 1.3rem;
  color: #1ed760;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
