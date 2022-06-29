import { Container, Button, Overlay, Inner, Close } from "./style/player";

const Player = function ({ children, ...resprosp }) {
  return <Container {...resprosp}>{children}</Container>;
};

export default Player;
