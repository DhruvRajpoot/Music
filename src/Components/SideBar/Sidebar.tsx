import React from "react";
import {
  CustomLink,
  Icon,
  LinkTitle,
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
      <LogoContainer to={'/'}>
        <Logo src={logo} alt="logo"/>
        <Title>Music</Title>
      </LogoContainer>
      <MenuContainer>
        <CustomLink to="/"><Icon><MdHomeFilled /></Icon><LinkTitle>Home</LinkTitle></CustomLink>
        <CustomLink to="/search"><Icon><MdSearch /></Icon><LinkTitle>Search</LinkTitle></CustomLink>
        <CustomLink to="/favourites"><Icon><MdFavorite /></Icon><LinkTitle>Favourites</LinkTitle></CustomLink>
        <CustomLink to="/playlists"><Icon><MdAddBox /></Icon><LinkTitle>Playlists</LinkTitle></CustomLink>
      </MenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
