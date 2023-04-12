import {
  BannerContent,
  BannerHeading,
  BannerImage,
  BannerSubHeading,
  HomeContainer,
  TopBanner,
} from "./Home.style";
import banner from "../../assets/images/banner.png";
import MusicRow from "../../Components/MusicRow/MusicRow";

const Home = () => {
  return (
    <HomeContainer>
      <TopBanner>
        <BannerImage src={banner} alt="banner" />
        <BannerContent>
          <BannerHeading>Your favorites tunes</BannerHeading>
          <BannerSubHeading>All day and all night</BannerSubHeading>
        </BannerContent>
      </TopBanner>

      <MusicRow />
    </HomeContainer>
  );
};

export default Home;
