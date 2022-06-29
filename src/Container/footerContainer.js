import Footer from "../Component/Footer";

const FooterContainer = function () {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ </Footer.Link>
          <Footer.Link href="#"> Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways To Watch </Footer.Link>
          <Footer.Link href="#">Coprate Information </Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#"> Jobs</Footer.Link>
          <Footer.Link href="#">Term of USe </Footer.Link>
          <Footer.Link href="#">Contact US</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem Gif Cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Centre</Footer.Link>
          <Footer.Link href="#"> Buy Gif Cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences </Footer.Link>
          <Footer.Link href="#">Legal Notice</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Egypt</Footer.Text>
    </Footer>
  );
};

export default FooterContainer;
