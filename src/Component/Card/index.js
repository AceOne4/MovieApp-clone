import { createContext, useContext, useState } from "react";

import {
  Conatiner,
  Group,
  Title,
  Text,
  SubTitle,
  Image,
  Item,
  Entities,
  Meta,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
} from "./style/card";

export const FeatureCtx = createContext();

const Card = function ({ children, ...resprosp }) {
  const [ShowFeature, setShowFeature] = useState(false);
  const [ItemFeature, setItemFeature] = useState({});
  return (
    <FeatureCtx.Provider
      value={{ ShowFeature, setShowFeature, ItemFeature, setItemFeature }}
    >
      <Conatiner {...resprosp}>{children}</Conatiner>{" "}
    </FeatureCtx.Provider>
  );
};

export default Card;

Card.Group = function CardGroup({ children, ...resprosp }) {
  return <Group {...resprosp}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...resprosp }) {
  return <Title {...resprosp}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...resprosp }) {
  return <SubTitle {...resprosp}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...resprosp }) {
  return <Text {...resprosp}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...resprosp }) {
  return <Entities {...resprosp}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...resprosp }) {
  return <Meta {...resprosp}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...resprosp }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureCtx);
  const featureHandler = () => {
    setItemFeature(item);
    setShowFeature(true);
  };

  return (
    <Item onClick={featureHandler} {...resprosp}>
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ children, ...resprosp }) {
  return <Image {...resprosp} />;
};

Card.Feature = function CardFeature({ Category, children, ...resprosp }) {
  const { ShowFeature, ItemFeature, setShowFeature } = useContext(FeatureCtx);
  const closeHandler = () => {
    setShowFeature(false);
  };

  return ShowFeature ? (
    <Feature
      {...resprosp}
      src={`/images/${Category}/${ItemFeature.genre}/${ItemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{ItemFeature.title}</FeatureTitle>
        <FeatureText>{ItemFeature.description}</FeatureText>
        <FeatureClose onClick={closeHandler}>
          <Image src="/images/icons/close.png" alt="close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={ItemFeature.maturity}>
            {ItemFeature.maturity < 12 ? "PG" : ItemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {ItemFeature.genre.charAt(0).toUpperCase() +
              ItemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
