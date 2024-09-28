import BlurBg from "../../ui/BlurBg";
import Container from "../../ui/Container";
import Description from "../../ui/Description";
import Headline from "../../ui/Headline";
import Title from "../../ui/Title";

const ourGoals = [
  {
    title: "Simplifying Access",
    description:
      "We aim to make booking meeting spaces as easy as possible, offering a hassle-free process that saves time and maximizes efficiency.",
  },
  {
    title: "Fostering Flexibility",
    description:
      "Whether it's a last-minute meeting or a long-term rental, FlexiSpace adapts to the ever-changing needs of modern work life.",
  },
  {
    title: "Empowering Innovation",
    description:
      "We strive to be at the forefront of workspace solutions, using technology to deliver a user-friendly experience that empowers businesses to focus on what matters most.",
  },
  {
    title: "Ensuring Security",
    description:
      "We prioritize the security of your data and bookings, ensuring that all processes are protected and trustworthy.",
  },
];

const OurMissionContainer = () => {
  return (
    <>
      <Container className="flex items-start justify-center gap-20">
        <div className="space-y-6 basis-1/3">
          <Headline className="!text-left">
            Our Mission<span className="text-primary">.</span>
          </Headline>
          <Description className="">
            At FlexiSpace, our mission is to transform the way professionals and
            teams access and utilize meeting spaces. We are dedicated to
            providing an intuitive, flexible, and reliable platform that
            connects users with high-quality meeting rooms in co-working
            environments, ensuring seamless collaboration and productivity.
          </Description>
        </div>

        <img
          className="basis-2/3 max-h-96 object-cover object-bottom"
          src="https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_513,h_384,g_auto:subject,ar_4:3/v1695809502/WebsiteImagery/Brands/Regus/About-Us/India_About_us_image_1.jpg"
          alt="Picture of Our Mission section's meeting room."
        />
      </Container>

      <div className="py-16 bg-dark text-white">
        <Container className="space-y-12">
          <div className="grid gap-2.5 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            {ourGoals?.map((item, idx) => (
              <BlurBg
                key={idx}
                className="text-center space-y-2 hover:border-secondary bg-transparent hover:bg-white/10 duration-300 py-4 sm:py-12"
              >
                <Title className="text-secondary md:px-10">{item.title}</Title>
                <Description className="text-white/70">{item.description}</Description>
              </BlurBg>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurMissionContainer;
