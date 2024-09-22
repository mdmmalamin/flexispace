import Container from "../../ui/Container";
import Description from "../../ui/Description";

import LogoDetails from "./LogoDetails";
import Company from "./Company";
import TermsAndSettings from "./TermsAndSettings";
import ContactUs from "./ContactUs";

const FooterContainer = () => {
  return (
    <footer id="footer" className="pt-16 mt-16 bg-primary">
      <Container>
        <div className="grid gap-6 grid-cols-12 justify-items-start">
          <section className="col-span-12 md:col-span-3 space-y-6">
            <LogoDetails />
          </section>

          <section className="col-span-12 md:col-span-3 md:justify-self-center space-y-6">
            <Company />
          </section>

          <section className="col-span-12 md:col-span-3 space-y-6">
            <TermsAndSettings />
          </section>

          <section className="col-span-12 md:col-span-3 space-y-6">
            <ContactUs />
          </section>
        </div>

        <Description className="text-center mt-6 py-6 border-t border-secondary/50 w-[70%] mx-auto !text-white">
          Copyright ©FlexiSpace {new Date().getFullYear()} All Right Reserved
        </Description>
      </Container>
    </footer>
  );
};

export default FooterContainer;
