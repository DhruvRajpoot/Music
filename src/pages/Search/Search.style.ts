import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(0.5rem + 1vw);
  gap: 1rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.46551120448179273) 0%,
    rgba(0, 0, 0, 0.6083683473389356) 17%,
    rgba(0, 0, 0, 0.9669117647058824) 100%
  );
  min-height: 100vh;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 50%;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1.1rem;
  color: black;
  background: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    width: 95%;
  }

  ::-webkit-search-cancel-button {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media (max-width: 500px) {
    ::-webkit-search-cancel-button {
      transform: scale(1.8);
    }
  }
`;

export const Heading = styled.h1`
  color: #ccc;
`;

export const SearchResult = styled.div``;

export const Noresult = styled.p`
  color: #ccc;
  font-size: calc(1.1rem + .4vw);
  margin-top: .5rem;
  padding-left: calc(.5rem + .5vw);
`;
