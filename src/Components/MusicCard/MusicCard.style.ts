import styled from "styled-components";

export const MusicCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const Image = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid black;
`;

export const Title = styled.p`
  font-weight: 600;
`;