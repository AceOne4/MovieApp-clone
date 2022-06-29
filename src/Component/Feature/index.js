import React from "react";
import { Sub, Container, Title, SubTitle } from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Sub = function FeatureSub({ children, ...restProps }) {
  return <Sub {...restProps}>{children}</Sub>;
};
