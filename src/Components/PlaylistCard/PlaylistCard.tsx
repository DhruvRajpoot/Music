import React from "react";
import { PlaylistCardContainer, Image, Title, ImageContainer, Number } from "./PlaylistCard.style";
import defaultImg from "../../assets/images/defaultPlaylistImg.jpeg";

const PlaylistCard = (props) => {
  const data=props.data;
  return (
    <PlaylistCardContainer href="#">
      <ImageContainer><Image src={data.images.length!==0?data.images[0].url:defaultImg} alt="Music Image" /></ImageContainer>
      <Title>{data.name}</Title>
      <Number>{data.tracks.total} songs</Number>
    </PlaylistCardContainer>
  );
};

export default PlaylistCard;
