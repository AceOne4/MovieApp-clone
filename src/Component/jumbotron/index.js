import { Inner, Item, Pane, Title, SubTitle, Image } from "./Styles/jumbotron";

const Jumpotron = function ({ children, direction = "row", ...resprosp }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>{" "}
    </Item>
  );
};
export default Jumpotron;

Jumpotron.Pane = function jumbotronpane({ children, ...resprosp }) {
  return <Pane {...resprosp}>{children}</Pane>;
};

Jumpotron.Title = function jumbotronTitle({ children, ...resprosp }) {
  return <Title {...resprosp}>{children}</Title>;
};
Jumpotron.Subtitle = function jumbotronSubTitle({ children, ...resprosp }) {
  return <SubTitle {...resprosp}>{children}</SubTitle>;
};
Jumpotron.Image = function jumbotronImage({ ...resprosp }) {
  return <Image {...resprosp} />;
};
