import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  Column,
  Image,
  Artist,
  Title,
  TitleWrapper,
  WebOnlyColumn,
  Icon,
} from "../MusicRow/MusicRow.style";
import { MusicWrapper } from "./SearchResultMusic.style";
import useAxios from "../../utils/useAxios";

const SearchResultMusic = (props:any) => {
  const data = props.data;
  const artist = data.artists.map((artist) => artist.name).join(", ");
  const durationMin = Math.floor(data.duration_ms / 60000);
  const durationSec = Math.floor((data.duration_ms % 60000) / 1000);
  const id = data.id;
  const api = useAxios();
  const [liked, setLiked] = useState(false);

  const checkLiked = async () => {
    try {
      const res = await api.get(`/me/tracks/contains?ids=${id}`);
      setLiked(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

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

  useEffect(() => {
    checkLiked();
  }, [liked]);

  return (
    <MusicWrapper>
      <Column>
        <Image src={data.album.images[0].url} alt="Music Image" />
        <TitleWrapper>
          <Title>{data.name}</Title>
          <Artist>{artist}</Artist>
        </TitleWrapper>
      </Column>
      <WebOnlyColumn>{data.album.name}</WebOnlyColumn>
      <Column>
        <Icon onClick={handleLike}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </Icon>
      </Column>
      <WebOnlyColumn>
        0{durationMin}: {durationSec > 9 ? durationSec : `0${durationSec}`}
      </WebOnlyColumn>
    </MusicWrapper>
  );
};

export default SearchResultMusic;
