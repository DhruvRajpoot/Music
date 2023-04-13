import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw);
`;

export const TopBanner = styled.div`
  width: 100%;
  height: calc(6rem + 7vw);
  background-color: rgb(251 178 163);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 500px) {
    align-items: end;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 1px 5px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 1rem;
  right: 4vw;
`;

export const UserImage = styled.img`
  width: calc(1rem + 1vw);
  height: calc(1rem + 1vw);
  border-radius: 50%;
`;

export const UserName = styled.h4`
  color: #16364f;
  font-size: calc(0.8rem + 0.3vw);
`;

export const BannerImage = styled.img`
  height: calc(5rem + 7vw);
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1vw;
  padding-right: 4vw;
  color: white;

  @media (max-width: 500px) {
    padding-bottom: 1rem;
  }
`;

export const BannerHeading = styled.h1`
  letter-spacing: 1px;
  font-size: calc(0.8rem + 1.5vw);
  text-align: right;

  @media (max-width: 500px) {
    letter-spacing: 0;
  }
`;

export const Break = styled.br`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const BannerSubHeading = styled.h2`
  font-size: calc(0.6rem + 1vw);
`;
