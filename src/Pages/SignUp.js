import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { firebaseCtx } from "../context/firebase";
import Form from "../Component/Form";
import FooterContainer from "../Container/footerContainer";
import HEaderContainer from "../Container/HeaderContainer";
import * as ROUTES from "../Constant/Routes";

const SignUp = function () {
  const { firebase } = useContext(firebaseCtx);
  const history = useHistory();

  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [error, seterror] = useState("");

  const userNameHandler = (e) => {
    setuserName(e.target.value);
  };
  const PasswordHanlder = (e) => {
    setpass(e.target.value);
  };
  const EmaildHanlder = (e) => {
    setEmail(e.target.value);
  };
  const formisValid =
    email !== "" && pass !== "" && pass.length > 6 && userName !== "";

  const SubmitHandler = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((resutlts) =>
        resutlts.user
          .updateProfile({
            displayName: userName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
            document.location.reload();
          })
      )
      .catch((error) => {
        setEmail("");
        setpass("");
        setuserName("");
        seterror(error.message);
      });
  };

  return (
    <>
      <HEaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          <Form.Base onSubmit={SubmitHandler}>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              placeholder="User Name"
              type="Text"
              onChange={userNameHandler}
              value={userName}
            />
            <Form.Input
              placeholder="Email"
              type="email"
              onChange={EmaildHanlder}
              value={email}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              onChange={PasswordHanlder}
              value={pass}
            />
            <Form.Submit disabled={!formisValid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user?
              <Form.Link to="/signin"> Sign In now. </Form.Link>
            </Form.Text>
            <Form.Textsmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.Textsmall>
          </Form.Base>
        </Form>
      </HEaderContainer>
      <FooterContainer />
    </>
  );
};
export default SignUp;
