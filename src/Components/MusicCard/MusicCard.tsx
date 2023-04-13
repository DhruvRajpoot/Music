import React from "react";
import { MusicCardContainer, Image, Title } from "./MusicCard.style";
import logo from "../../assets/Images/logo.png";

const MusicCard = () => {
  return (
    <MusicCardContainer href="#">
      <Image src={logo} alt="Music Image" />
      <Title>Music Title</Title>
    </MusicCardContainer>
  );
};

export default MusicCard;
