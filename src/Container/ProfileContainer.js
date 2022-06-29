import Header from "../Component/Header";
import Profile from "../Component/Profile";
import * as ROUTES from "../Constant/Routes";
import logo from "../logo.svg";
const SelectProfileConatiner = function ({ user, setProfile }) {
  console.log("user", user);
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="NETFLIX" />
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>Who's Watching ?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
};

export default SelectProfileConatiner;
