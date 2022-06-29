//import { Children } from "react";
import Header from "../Component/Header";
import React from "react";
import * as ROUTER from "../Constant/Routes";
import logo from "../logo.svg";
const HEaderContainer = function (props) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTER.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTER.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {props.children}
    </Header>
  );
};
export default HEaderContainer;
