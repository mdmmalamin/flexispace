import CalenderOutline from "../../../assets/icons/CalenderOutline";
import SecureOutline from "../../../assets/icons/SecureOutline";
import WhyUsCard from "../../cards/WhyUsCard";
import Container from "../../ui/Container";
import Headline from "../../ui/Headline";
import Subtitle from "../../ui/Subtitle";
import Title from "../../ui/Title";

const whyUsData = [
  {
    icon: <CalenderOutline />,
    title: "Seamless Booking Experience",
    description:
      "Enjoy a hassle-free booking process with our intuitive interface that makes reservations quick and easy.",
  },
  {
    icon: <SecureOutline />,
    title: "Secure Transactions",
    description:
      "Your payments are processed through highly secure gateways, ensuring your financial data is always safe.",
  },
];

const WhyChooseUsContainer = () => {
  return (
    <section className="bg-white py-12">
      <Container>
        <Headline className="text-primary">Why Choose Us?</Headline>
        <Title className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Exceptional Services Tailored to Your Needs
        </Title>
        <Subtitle>
          Experience the best in class features designed to make your life
          easier and your transactions secure.
        </Subtitle>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {whyUsData?.map((item, idx) => (
              <WhyUsCard {...item} key={idx} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsContainer;
