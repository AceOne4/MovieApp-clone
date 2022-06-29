import FaqContainer from "../Container/FaqsContainer";
import FooterContainer from "../Container/footerContainer";
import HEaderContainer from "../Container/HeaderContainer";
import JumbotronContaienr from "../Container/jumbotronContainer";
import OptForm from "../Component/opt-form";
import Feature from "../Component/Feature";
const Home = function () {
  return (
    <>
      <HEaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <Feature.Sub>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Feature.Sub>
          <OptForm>
            <OptForm.Input placeholder="Email Adress" />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HEaderContainer>
      <JumbotronContaienr />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
