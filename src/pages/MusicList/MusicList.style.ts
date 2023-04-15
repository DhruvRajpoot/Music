import styled from "styled-components";

export const MusicListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: calc(1rem + 3vw) calc(1rem + 1vw) calc(1rem + 1vw) calc(1rem + 1vw);
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PlaylistImage = styled.img`
  width: calc(7rem + 6vw);
  height: calc(7rem + 6vw);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  background: rgb(26, 26, 26);
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.8884803921568627) 30%,
    rgba(24, 24, 24, 0.6896008403361344) 59%,
    rgba(45, 45, 45, 0.6251750700280112) 94%
  );
`;

export const PlaylistInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const TopWrapperPara = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
`;

export const PlaylistName = styled.h1`
  font: 700 6rem "Roboto", sans-serif;
  letter-spacing: -5px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 0;
  }
`;

export const BottomWrapper = styled.div`
  padding: calc(0.5rem + 1.5vw);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.46551120448179273) 0%,
    rgba(0, 0, 0, 0.7792366946778712) 85%,
    rgba(0, 0, 0, 0.9669117647058824) 100%
  );

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const MusicHeader = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2.5fr 1fr 1fr 0.35fr 0.28fr;
  color: #ccc;
  padding: 0.5rem;
  border-bottom: 1px solid #505050;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    grid-template-columns: 0.15fr 2fr 0.2fr;
  } ;
`;

export const MusicHeaderItem = styled.p``;

export const WebViewHeaderItem = styled(MusicHeaderItem)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Para = styled.p`
  font-size: 0.9rem;
`;
