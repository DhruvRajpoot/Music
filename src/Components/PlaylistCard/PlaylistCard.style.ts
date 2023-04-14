import styled from "styled-components";

export const PlaylistCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  border-radius: calc(.7rem + .5vw);
  background-color: rgba(0, 0, 0, 0.7);
  padding: calc(.6rem + .2vw) calc(.7rem + .3vw);
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
`;

export const Number = styled.p`
  font-size: 0.7rem;
`;
