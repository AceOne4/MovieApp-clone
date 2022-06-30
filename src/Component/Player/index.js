import { createContext, useContext, useState } from "react";
import { Container, Button, Overlay, Inner, Close } from "./style/player";
import ReactDOM from "react-dom";
export const PlayerCtx = createContext();

const Player = function ({ children, ...resprosp }) {
  const [showPlayer, SetShowPlayer] = useState(false);

  return (
    <PlayerCtx.Provider value={{ showPlayer, SetShowPlayer }}>
      <Container {...resprosp}>{children}</Container>
    </PlayerCtx.Provider>
  );
};

export default Player;

Player.Video = function PlayerVideo({ src, ...resprosp }) {
  const { showPlayer, SetShowPlayer } = useContext(PlayerCtx);
  const OverlayHanler = () => {
    SetShowPlayer(false);
  };
  return (
    showPlayer &&
    ReactDOM.createPortal(
      <Overlay onClick={OverlayHanler}>
        <Inner>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4"></source>
          </video>
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
  );
};

Player.Button = function PlayerButton({ ...resprosp }) {
  const { showPlayer, SetShowPlayer } = useContext(PlayerCtx);
  const PlayerHandler = () => {
    SetShowPlayer((showPlayer) => !showPlayer);
  };
  return (
    <Button onClick={PlayerHandler} {...resprosp}>
      Play
    </Button>
  );
};
