import { Conatiner, Title, List, User, Picture, Name } from "./style/profile";

const Profile = function ({ children, ...resprosp }) {
  return <Conatiner {...resprosp}> {children}</Conatiner>;
};
export default Profile;

Profile.Title = function ProfileTitle({ children, ...resprosp }) {
  return <Title {...resprosp}>{children}</Title>;
};

Profile.List = function ProfileList({ children, ...resprosp }) {
  return <List {...resprosp}>{children}</List>;
};
Profile.User = function ProfileUser({ children, ...resprosp }) {
  return <User {...resprosp}>{children}</User>;
};

Profile.Picture = function ProfilePicture({ src, ...resprosp }) {
  return (
    <Picture
      {...resprosp}
      src={src ? `images/users/${src}.png` : `images/misc/loading.gif`}
    />
  );
};

Profile.Name = function ProfileName({ children, ...resprosp }) {
  return <Name {...resprosp}>{children}</Name>;
};
