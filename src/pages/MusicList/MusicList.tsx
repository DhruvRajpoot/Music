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
} from "./MusicList.style";
import logo from "../../assets/images/logo.png";
import MusicRow from "../../Components/MusicRow/MusicRow";
import { BiTime } from "react-icons/bi";

const MusicList = (props) => {
  const data=props.data;

  return (
    <MusicListContainer>
      <TopWrapper>
        <PlaylistImage src={logo} alt="Playlist" />
        <PlaylistInfoWrapper>
          <TopWrapperPara>Playlist</TopWrapperPara>
          <PlaylistName>Liked Songs</PlaylistName>
          <TopWrapperPara>13 songs</TopWrapperPara>
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

export default MusicList;
