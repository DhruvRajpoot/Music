import React from "react";
import {
  BottomWrapper,
  MusicHeader,
  MusicHeaderItem,
  MusicListContainer,
  PlaylistImage,
  PlaylistInfoWrapper,
  PlaylistName,
  TopWrapper,
  TopWrapperPara,
  WebViewHeaderItem,
} from "./FavouriteList.style";
import likedsong from "../../../assets/images/likedsong.png";
import MusicRow from "../../../Components/MusicRow/MusicRow";
import { BiTime } from "react-icons/bi";

const FavouriteList = (props:any) => {
  const data=props.data;

  return (
    <MusicListContainer>
      <TopWrapper>
        <PlaylistImage src={likedsong} alt="Playlist" />
        <PlaylistInfoWrapper>
          <TopWrapperPara>Playlist</TopWrapperPara>
          <PlaylistName>Liked Songs</PlaylistName>
          <TopWrapperPara>{data.length} songs</TopWrapperPara>
        </PlaylistInfoWrapper>
      </TopWrapper>

      <BottomWrapper>
        <MusicHeader>
          <MusicHeaderItem>#</MusicHeaderItem>
          <MusicHeaderItem>Title</MusicHeaderItem>
          <WebViewHeaderItem>Album</WebViewHeaderItem>
          <WebViewHeaderItem>Date added</WebViewHeaderItem>
          <MusicHeaderItem>Likes</MusicHeaderItem>
          <WebViewHeaderItem><BiTime/></WebViewHeaderItem>
        </MusicHeader>

        {(data.length!==0?data:[]).map((item,index) => (
          <MusicRow data={item} key={index} index={index} />
        ))}
      </BottomWrapper>
    </MusicListContainer>
  );
};

export default FavouriteList;
