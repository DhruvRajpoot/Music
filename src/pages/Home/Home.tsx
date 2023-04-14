import {
  BannerContent,
  BannerHeading,
  BannerImage,
  BannerSubHeading,
  Break,
  HomeContainer,
  TopBanner,
  UserContainer,
  UserImage,
  UserName,
} from "./Home.style";
import banner from "../../assets/images/banner.png";
import userDefaultImage from "../../assets/images/user-default-image.png";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../utils/useAxios";
import { useEffect } from "react";
import { getUserDetails } from "../../Redux/reducers/userReducer";
import { getFeaturedPlaylist } from "../../Redux/reducers/playlistReducer";
import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";

const Home = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const featuredPlaylist = useSelector(
    (state: any) => state.playlist.featuredPlaylist
  );
  const RecentPlaylist = useSelector(
    (state: any) => state.playlist.RecentPlaylist
  );

  const getFeaturedPlaylist = async () => {
    const res = await api.get(`/browse/featured-playlists`);
    // dispatch(getFeaturedPlaylist(res.data));
  };

  const getRecentPlaylist = async () => {
    const res = await api.get(`/me/player/recently-played`);
    // dispatch(getRecentPlaylist(res.data));
  };

  useEffect(() => {
    getFeaturedPlaylist();
    getRecentPlaylist();
  }, []);

  return (
    <HomeContainer>
      <TopBanner>
        <UserContainer>
          <UserImage src={userDefaultImage} alt="user" />
          <UserName>Dhruv</UserName>
        </UserContainer>
        <BannerImage src={banner} alt="banner" />
        <BannerContent>
          <BannerHeading>
            Your favorites <Break /> tunes
          </BannerHeading>
          <BannerSubHeading>All day and all night</BannerSubHeading>
        </BannerContent>
      </TopBanner>

      <PlaylistRow data={featuredPlaylist} title='Featured Playlists'/>
      <PlaylistRow data={RecentPlaylist} title='Recently Played'/>
    </HomeContainer>
  );
};

export default Home;
