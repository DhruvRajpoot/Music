import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 220px);

  @media (max-width: 800px) {
    width: calc(100vw - 80px);  
  }

  @media (max-width: 500px) {
    width: calc(100vw - 60px);
  }
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

  @media (max-width: 800px) {
    max-height: 150px;
  }

  @media (max-width: 500px) {
    max-height: 100px;
    /* padding: 1rem 0; */
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  padding-right: 4vw;
  color: white;
`;

export const BannerHeading = styled.h1`
  letter-spacing: 1px;
  font-size: calc(.8rem + 1.5vw);
  text-align: right;

  @media (max-width:500px){
    letter-spacing: 0;
  }
`;

export const BannerSubHeading = styled.h2`
  font-size: calc(.6rem + 1vw);
`;
