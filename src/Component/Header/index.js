import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Background,
  ButtonLink,
  Frame,
  Logo,
  Feature,
  Text,
  FeatureCallOut,
  TextLink,
  Group,
  DropDown,
  Picture,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./style/header";

const Header = function ({ bg = true, children, ...resprops }) {
  return bg ? <Background {...resprops}>{children}</Background> : children;
};
export default Header;
Header.Frame = function HeaderFrame({ children, ...resprops }) {
  return <Frame {...resprops}>{children}</Frame>;
};
Header.Group = function HeaderGroup({ children, ...resprops }) {
  return <Group {...resprops}>{children}</Group>;
};

Header.DropDown = function HeaderDropDown({ children, ...resprops }) {
  return <DropDown {...resprops}>{children}</DropDown>;
};
Header.Feature = function HeaderFeature({ children, ...resprops }) {
  return <Feature {...resprops}>{children}</Feature>;
};
Header.Text = function HeaderText({ children, ...resprops }) {
  return <Text {...resprops}>{children}</Text>;
};

Header.Profile = function HeaderProfile({ children, ...resprops }) {
  return <Profile {...resprops}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...resprops }) {
  return (
    <Picture
      src={src ? `images/users/${src}.png` : `images/misc/loading.gif`}
      {...resprops}
    />
  );
};
Header.TextLink = function HeaderTextLink({ children, ...resprops }) {
  return <TextLink {...resprops}>{children}</TextLink>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...resprops
}) {
  return <FeatureCallOut {...resprops}>{children}</FeatureCallOut>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...resprops }) {
  return (
    <ButtonLink
      {...resprops}
      onClick={() => (window.location.href = "/signin")}
    >
      {children}
    </ButtonLink>
  );
};

Header.Logo = function HeaderLogo({ to, ...resprops }) {
  return (
    <Link to={to} {...resprops}>
      <Logo {...resprops} />
    </Link>
  );
};

Header.Search = function HeaderSearch({
  Searchterm,
  setSearchterm,
  ...resprops
}) {
  const [SearchActive, setSearchActive] = useState(false);

  //we check if we click to the on the icon or no to open the input
  const iconHandler = () => {
    setSearchActive((SearchActive) => !SearchActive);
  };
  //we pass the value of the input to search term to the parent component
  const searchHandler = (e) => {
    setSearchterm(e.target.value);
  };
  return (
    <Search {...resprops}>
      <SearchIcon onClick={iconHandler}>
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
        value={Searchterm}
        onChange={searchHandler}
        placeholder="Search films and series"
        // we pass the active class to be able to edit on it
        active={SearchActive}
      />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton({ children, ...resprops }) {
  return <PlayButton {...resprops}>{children}</PlayButton>;
};
