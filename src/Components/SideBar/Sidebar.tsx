import React from "react";
import {
  CustomLink,
  Icon,
  Logo,
  LogoContainer,
  MenuContainer,
  SidebarContainer,
  Title,
} from "./Sidebar.style";
import logo from "../../assets/images/logo.png";
import { MdAddBox, MdFavorite, MdHomeFilled, MdSearch } from "react-icons/md";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo"/>
        <Title>Music</Title>
      </LogoContainer>
      <MenuContainer>
        <CustomLink to="/"><Icon><MdHomeFilled /></Icon>Home</CustomLink>
        <CustomLink to="/search"><Icon><MdSearch /></Icon>Search</CustomLink>
        <CustomLink to="/favorites"><Icon><MdFavorite /></Icon>Favorites</CustomLink>
        <CustomLink to="/playlists"><Icon><MdAddBox /></Icon>Playlists</CustomLink>
      </MenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
