import { useState, useEffect } from "react";
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
} from "../Favourites/FavouriteList/FavouriteList.style";
import defaultimg from "../../assets/images/defaultPlaylistImg.jpeg";
import MusicRow from "../../Components/MusicRow/MusicRow";
import { BiTime } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import useAxios from "../../utils/useAxios";
import Loader from "../../Components/Loader/Loader";

const MusicList = (props: any) => {
  const api = useAxios();
  const location = useLocation();
  const playlistdata = location.state.data;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPlaylistData = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/playlists/${playlistdata.id}/tracks`);
      setData(response.data.items);
    } catch (err: any) {
      if (err.response.status !== 429) {
        console.log(err.message);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getPlaylistData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MusicListContainer>
          <TopWrapper>
            <PlaylistImage src={playlistdata.images.length!==0?playlistdata.images[0].url:defaultimg} alt="Playlist" />
            <PlaylistInfoWrapper>
              <TopWrapperPara>Playlist</TopWrapperPara>
              <PlaylistName>{playlistdata.name}</PlaylistName>
              <TopWrapperPara>{playlistdata.tracks.total} songs</TopWrapperPara>
            </PlaylistInfoWrapper>
          </TopWrapper>

          <BottomWrapper>
            <MusicHeader>
              <MusicHeaderItem>#</MusicHeaderItem>
              <MusicHeaderItem>Title</MusicHeaderItem>
              <WebViewHeaderItem>Album</WebViewHeaderItem>
              <WebViewHeaderItem>Date added</WebViewHeaderItem>
              <MusicHeaderItem>Likes</MusicHeaderItem>
              <WebViewHeaderItem>
                <BiTime />
              </WebViewHeaderItem>
            </MusicHeader>

            {(data.length !== 0 ? data : []).map((item, index) => (
              <MusicRow data={item} key={index} index={index} />
            ))}
          </BottomWrapper>
        </MusicListContainer>
      )}
    </>
  );
};

export default MusicList;
