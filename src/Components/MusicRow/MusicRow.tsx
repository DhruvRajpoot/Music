import React, { useState, useEffect } from "react";
import {
  Column,
  Image,
  MusicContainer,
  Artist,
  Title,
  TitleWrapper,
  WebOnlyColumn,
  Icon,
} from "./MusicRow.style";
import logo from "../../assets/images/logo.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useAxios from "../../utils/useAxios";

const MusicRow = (props) => {
  const date = new Date(`${props.data.added_at}`);
  const month = date.toLocaleString("default", { month: "short" });
  const data = props.data.track;
  const artist = data.artists.map((artist) => artist.name).join(", ");
  const durationMin = Math.floor(data.duration_ms / 60000);
  const durationSec = Math.floor((data.duration_ms % 60000) / 1000);
  const id = data.id;
  const api = useAxios();
  const [liked, setLiked] = useState(true);

  const checkLiked = async () => {
    try {
      const res = await api.get(`/me/tracks/contains?ids=${id}`);
      setLiked(res.data[0]);
    } catch (err:any) {
      if (err.response.status !== 429) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    checkLiked();
  }, [liked]);

  const handleLike = async () => {
    if (liked) {
      try {
        await api.delete(`/me/tracks?ids=${id}`);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await api.put(`/me/tracks?ids=${id}`);
      } catch (err) {
        console.log(err);
      }
    }
    setLiked(!liked);
  };

  return (
    <MusicContainer>
      <Column>{props.index + 1}</Column>
      <Column>
        <Image src={data.album.images[0].url} alt="Music Image" />
        <TitleWrapper>
          <Title>{data.name}</Title>
          <Artist>{artist}</Artist>
        </TitleWrapper>
      </Column>
      <WebOnlyColumn>{data.album.name}</WebOnlyColumn>
      <WebOnlyColumn>
        {month} {date.getDate()}, {date.getFullYear()}
      </WebOnlyColumn>
      <Column>
        <Icon onClick={handleLike}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </Icon>
      </Column>
      <WebOnlyColumn>
        0{durationMin}: {durationSec > 9 ? durationSec : `0${durationSec}`}
      </WebOnlyColumn>
    </MusicContainer>
  );
};

export default MusicRow;
