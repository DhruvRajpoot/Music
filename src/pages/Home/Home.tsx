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
import { useState } from "react";
import banner from "../../assets/images/banner.png";
import userDefaultImage from "../../assets/images/user-default-image.png";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../utils/useAxios";
import { useEffect } from "react";
import { getUserDetails } from "../../Redux/reducers/userReducer";
import { getFeaturedPlaylist } from "../../Redux/reducers/playlistReducer";
import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  const username =
    Object.keys(user).length !== 0
      ? user.display_name[0].toUpperCase() +
        user.display_name.slice(1).toLowerCase()
      : null;
  const featuredPlaylist = useSelector(
    (state: any) => state.playlist.featuredPlaylist
  );
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : null);

  const getFeaturedPlaylistFunc = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/browse/featured-playlists`);
      dispatch(getFeaturedPlaylist(res.data));
    } catch (err: any) {
      console.log(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFeaturedPlaylistFunc();
  }, [token]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <HomeContainer>
          <TopBanner>
            <UserContainer>
              <UserImage
                src={
                  Object.keys(user).length !== 0
                    ? user.images[0].url
                    : userDefaultImage
                }
                alt="user"
              />
              <UserName>{username}</UserName>
            </UserContainer>
            <BannerImage src={banner} alt="banner" />
            <BannerContent>
              <BannerHeading>
                Your favorites <Break /> tunes
              </BannerHeading>
              <BannerSubHeading>All day and all night</BannerSubHeading>
            </BannerContent>
          </TopBanner>

          <PlaylistRow
            data={featuredPlaylist.playlists}
            title="Featured Playlists"
          />
        </HomeContainer>
      )}
    </>
  );
};

export default Home;
