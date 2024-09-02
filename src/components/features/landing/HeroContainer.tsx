import hero from "../../../assets/images/hero.png";
import BlurBg from "../../ui/BlurBg";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Headline from "../../ui/Headline";
import Subtitle from "../../ui/Subtitle";

const HeroContainer = () => {
  return (
    <Container
      className="!px-0 min-h-40 max-h-[680px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* <img className="w-full object-cover object-center" src={hero} alt="" /> */}

      <div className="px-2.5 sm:px-6 py-16 md:py-40 space-y-6 bg-gradient-to-b from-dark/50 to-dark/10">
        <Headline className="text-white">
          <span>Book Your Ideal Meeting </span>
          <span className="text-primary text-nowrap">Room with Ease</span>
        </Headline>

        <BlurBg className="w-fit text-center mx-auto py-6 md:!px-12">
          <Subtitle>
            Efficient, hassle-free room booking for all your meeting needs
          </Subtitle>
        </BlurBg>

        <Button>Book Now</Button>
      </div>
    </Container>
  );
};

export default HeroContainer;
