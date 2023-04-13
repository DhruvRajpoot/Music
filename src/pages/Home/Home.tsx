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
import MusicRow from "../../Components/MusicRow/MusicRow";
import userDefaultImage from "../../assets/images/user-default-image.png";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../utils/useAxios";
import { useEffect } from "react";
import { getUserDetails } from "../../Redux/reducers/userReducer";

const Home = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const updateUserFunc = async () => {
    const res = await api.get(`/me`);
    dispatch(getUserDetails(res.data));
  };

  useEffect(() => {
    updateUserFunc();
  }, []);

  return (
    <HomeContainer>
      <TopBanner>
        <UserContainer>
          <UserImage src={userDefaultImage} alt="user"/>
          <UserName>Dhruv</UserName>
        </UserContainer>
        <BannerImage src={banner} alt="banner" />
        <BannerContent>
          <BannerHeading>Your favorites <Break/> tunes</BannerHeading>
          <BannerSubHeading>All day and all night</BannerSubHeading>
        </BannerContent>
      </TopBanner>

      <MusicRow />
    </HomeContainer>
  );
};

export default Home;
