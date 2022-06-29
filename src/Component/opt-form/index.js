import { Container, Input, Button, Text } from "./style/opt-form";

const OptForm = function ({ children, ...resprops }) {
  return <Container {...resprops}>{children}</Container>;
};
export default OptForm;

OptForm.Input = function OptFormInput({ ...resprops }) {
  return <Input {...resprops} />;
};

OptForm.Button = function OptFormButton({ children, ...resprops }) {
  return (
    <Button {...resprops}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...resprops }) {
  return <Text {...resprops}>{children}</Text>;
};
