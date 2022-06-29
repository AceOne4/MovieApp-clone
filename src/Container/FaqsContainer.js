import FaqData from "../fexture/faqs.json";
import Accordion from "../Component/Accordions";
import OptForm from "../Component/opt-form";

const FaqContainer = function () {
  return (
    <>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {FaqData.map((item) => {
          return (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          );
        })}
        <Accordion.Item />
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Input placeholder="Email Adress" />
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </Accordion>
    </>
  );
};

export default FaqContainer;
