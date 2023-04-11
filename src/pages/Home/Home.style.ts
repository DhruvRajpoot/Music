import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 220px);
`;
export const TopBanner = styled.div`
  width: 100%;
  max-height: 220px;
  background-color: rgb(251 178 163)  ;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BannerImage = styled.img`
  max-height: 220px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  padding-right: 4rem;
  color: white;
`;

export const BannerHeading = styled.h1`
  letter-spacing: 1px;
  font-size: 2.5rem;
`;

export const BannerSubHeading = styled.h2`
  font-size: 2rem;
`;
