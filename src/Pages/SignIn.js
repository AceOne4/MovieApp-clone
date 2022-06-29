import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { firebaseCtx } from "../context/firebase";
import Form from "../Component/Form";
import FooterContainer from "../Container/footerContainer";
import HEaderContainer from "../Container/HeaderContainer";
import * as ROUTES from "../Constant/Routes";
const SignIn = function () {
  const { firebase } = useContext(firebaseCtx);
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [error, seterror] = useState("");
  const history = useHistory();

  const PasswordHanlder = (e) => {
    setpass(e.target.value);
  };
  const EmaildHanlder = (e) => {
    setEmail(e.target.value);
  };
  const formisValid = email !== "" && pass !== "" && pass.length > 6;
  const SubmitHandler = (e) => {
    e.preventDefault();

    //  if (!formisValid) {
    //    seterror(true);
    //    return;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        history.push(ROUTES.BROWSE);
        document.location.reload();
      })
      .catch((error) => {
        setEmail("");
        setpass("");
        seterror(error.message);
      });

    // if (!formisValid) {
    //   seterror(true);
    //   return;
    // }
    // console.log(email, pass);
  };
  return (
    <>
      <HEaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          <Form.Base onSubmit={SubmitHandler}>
            {error && <Form.Error>{error}</Form.Error>}
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
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix? <Form.Link to="/signup"> Sign up now. </Form.Link>
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
export default SignIn;
