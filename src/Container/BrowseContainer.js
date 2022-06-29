import { useContext, useEffect, useState } from "react";
import SelectProfileConatiner from "./ProfileContainer";
import { firebaseCtx } from "../context/firebase";
import Loading from "../Component/Loading";
import Header from "../Component/Header";
import * as ROUTES from "../Constant/Routes";
import logo from "../logo.svg";
import Card from "../Component/Card";
import FooterContainer from "./footerContainer";

const BrowseContainer = function ({ slides }) {
  const [profile, setProfile] = useState({});
  const [Category, setCategory] = useState("series");
  const [Searchterm, setSearchterm] = useState("");
  const [loading, setloading] = useState(true);
  const [SlideRow, setSlideRow] = useState([]);

  const { firebase } = useContext(firebaseCtx);
  const user = firebase.auth().currentUser || {};

  const SingOutHandler = () => {
    firebase.auth().signOut();
  };
  const seriesHandler = () => {
    setCategory("series");
  };
  const filmsHandler = () => {
    setCategory("films");
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRow(slides[Category]);
  }, [slides, Category]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmall>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="NETFLIX" />
            <Header.TextLink
              active={Category === "series" && "true"}
              onClick={seriesHandler}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={Category === "films" && "true"}
              onClick={filmsHandler}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              Searchterm={Searchterm}
              setSearchterm={setSearchterm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.DropDown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={SingOutHandler}>
                    Sing Out
                  </Header.TextLink>
                </Header.Group>
              </Header.DropDown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Group>
        {SlideRow.map((slideItem) => {
          return (
            <Card key={`${Category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((i) => (
                  <Card.Item key={i.docId} item={i}>
                    <Card.Image
                      src={`/images/${Category}/${i.genre}/${i.slug}/small.jpg`}
                    />
                    <Card.Meta>
                      <Card.SubTitle>{i.title}</Card.SubTitle>
                      <Card.Text>{i.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature Category={Category}>
                <p>HEllo!</p>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileConatiner user={user} setProfile={setProfile} />
  );
};
export default BrowseContainer;
