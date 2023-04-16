import React from "react";
import { PlaylistCardContainer, Image, Title, ImageContainer, Number, HoverElement, HoverElementIcon } from "./PlaylistCard.style";
import defaultImg from "../../assets/images/defaultPlaylistImg.jpeg";
import { BsFillPlayFill } from "react-icons/bs";

const PlaylistCard = (props) => {
  const data=props.data;
  console.log(data)

  return (
    <PlaylistCardContainer href="#">
      <ImageContainer><Image src={data.images.length!==0?data.images[0].url:defaultImg} alt="Music Image" /></ImageContainer>
      <Title>{data.name}</Title>
      <Number>{data.tracks.total} songs</Number>
      <HoverElement><HoverElementIcon><BsFillPlayFill/></HoverElementIcon></HoverElement>
    </PlaylistCardContainer>
  );
};

export default PlaylistCard;
