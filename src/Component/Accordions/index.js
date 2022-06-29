//import { close } from "../../../public/images/icons/close-slim.png";
//import { add } from "../../../public/images/icons/add.png";
import { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./style/accordion";
const toggleCtx = createContext();

const Accordion = function ({ children, ...resprops }) {
  return (
    <Container {...resprops}>
      <Inner>{children}</Inner>
    </Container>
  );
};

export default Accordion;

Accordion.Title = function AccordionTitle({ children, ...resprops }) {
  return <Title {...resprops}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...resprops }) {
  return <Frame {...resprops}>{children}</Frame>;
};
Accordion.Item = function AccordionItem({ children, ...resprops }) {
  const [toggle, setToggle] = useState(false);

  return (
    <toggleCtx.Provider value={{ toggle, setToggle }}>
      <Item {...resprops}>{children}</Item>
    </toggleCtx.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...resprops }) {
  const { toggle, setToggle } = useContext(toggleCtx);

  const toggleHanlder = () => {
    setToggle(!toggle);
  };

  return (
    <Header onClick={toggleHanlder} {...resprops}>
      {children}
      {toggle ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="add" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...resprops }) {
  const { toggle } = useContext(toggleCtx);
  return toggle && <Body {...resprops}>{children}</Body>;
};
