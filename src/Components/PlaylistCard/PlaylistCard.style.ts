import styled from "styled-components";

export const HoverElement = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: white;
  opacity: 0;
  z-index: 10;
  width: 85%;
  height: 30%;
`;

export const HoverElementIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 255, 0, 0.5);
  border-radius: 50%;
`;

export const PlaylistCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  border-radius: calc(0.7rem + 0.5vw);
  background-color: rgba(0, 0, 0, 0.8);
  padding: calc(0.6rem + 0.2vw) calc(0.7rem + 0.3vw);
  position: relative;
  cursor: pointer;
  transition: background 0.25s linear;
  z-index: 1;

  &:hover {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8136904761904762) 0%,
      rgba(0, 0, 0, 0.6583683473389356) 100%
    );
  }

  &:hover ${HoverElement} {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: calc(0.8rem + .2vw);
`;

export const Number = styled.p`
  font-size: 0.7rem;
`;
