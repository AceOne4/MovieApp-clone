//import { Container } from "../Accordions/style/accordion";
import {
  Container,
  Base,
  Title,
  Text,
  Textsmall,
  NavLink,
  Input,
  Error,
  Submit,
} from "./styles/form";

const Form = function ({ children, ...resprops }) {
  return <Container {...resprops}>{children}</Container>;
};

export default Form;

Form.Base = function FormBase({ children, ...resprops }) {
  return <Base {...resprops}>{children}</Base>;
};

Form.Error = function FormError({ children, ...resprops }) {
  return <Error {...resprops}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...resprops }) {
  return <Title {...resprops}>{children}</Title>;
};

Form.Text = function FormText({ children, ...resprops }) {
  return <Text {...resprops}>{children}</Text>;
};

Form.Textsmall = function FormTextsmall({ children, ...resprops }) {
  return <Textsmall {...resprops}>{children}</Textsmall>;
};

Form.Link = function FormLink({ to, children, ...resprops }) {
  return (
    <NavLink to={to} onClick={() => (window.location.href = to)} {...resprops}>
      {children}
    </NavLink>
  );
};

Form.Input = function FormInput({ ...resprops }) {
  return <Input {...resprops} />;
};

Form.Submit = function FormSubmit({ children, ...resprops }) {
  return <Submit {...resprops}>{children}</Submit>;
};
