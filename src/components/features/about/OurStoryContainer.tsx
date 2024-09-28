import Container from "../../ui/Container";
import Description from "../../ui/Description";
import Headline from "../../ui/Headline";
import ourStory from "../../../assets/images/our_story.jpg";
import ourStoryCard from "../../../assets/images/our_story_card.jpg";
import Title from "../../ui/Title";
import CompanySolid from "../../../assets/icons/CompanySolid";
import Button from "../../ui/Button";
import ArrowOutline from "../../../assets/icons/ArrowOutline";
import BlurBg from "../../ui/BlurBg";

const ourStories = [
  {
    title: "Our Beginnings",
    description:
      "Starting with a small team passionate about co-working spaces and technology, we launched our platform with just a few locations. Our goal was simple—help businesses and freelancers find spaces that suited their working styles without the hassle of long-term commitments. From those early days, FlexiSpace has grown by listening to our users and constantly innovating.",
  },
  {
    title: "Our Growth",
    description:
      "As demand for flexible work environments skyrocketed, so did our growth. What began as a solution for small businesses soon expanded into a platform trusted by companies of all sizes. We scaled our operations, adding new features and enhancing the user experience based on feedback. From integrating real-time availability to offering secure and smooth booking processes, we’ve stayed ahead of the curve, providing users with the features they need for their workspaces.",
  },
  {
    title: "Our Evolution",
    description:
      "Today, FlexiSpace connects thousands of professionals with meeting rooms in co-working spaces across multiple cities. Our platform has become an essential tool for teams looking to collaborate, entrepreneurs in need of professional meeting spaces, and businesses seeking flexibility in an ever-changing work environment.",
  },
];

const OurStoryContainer = () => {
  return (
    <>
      <Container className="space-y-16">
        <div className="lg:flex items-start justify-center gap-20 space-y-6 lg:space-y-0">
          <img
            className="basis-2/3 max-h-96 object-cover object-bottom overflow-hidden w-full lg:w-fit"
            src={ourStory}
            alt="Picture of Our Story section's meeting room."
          />

          <div className="space-y-6 basis-1/3">
            <Headline className="!text-left">
              Our Story<span className="text-primary">.</span>
            </Headline>
            <Description>
              FlexiSpace was born out of a simple idea: to make finding and
              booking meeting rooms as flexible and convenient as possible.
              Founded in 1997, we saw the increasing demand for adaptable
              workspaces that could cater to modern professionals' evolving
              needs. Traditional office settings were changing, and businesses
              needed more flexibility in how and where they collaborated. That's
              when we decided to build a platform that makes meeting room
              booking seamless, reliable, and efficient.
            </Description>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {ourStories?.map((item, idx) => (
            <div
              className="group relative block w-72 md:w-96 mx-auto h-72 md:h-96"
              key={idx}
            >
              <div
                className="relative flex h-full w-full transform items-end border-2 border-accent hover:border-secondary bg-white duration-500 group-hover:scale-105 bg-cover bg-center"
                style={{ background: `url(${ourStoryCard})` }}
              >
                <BlurBg className="w-full h-full p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 flex flex-col justify-end gap-6">
                  <CompanySolid />

                  <Title className="!text-left text-white">{item.title}</Title>
                </BlurBg>

                <BlurBg className="w-full h-full absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <Title className="!text-left text-secondary">
                    {item.title}
                  </Title>

                  <Description className="text-white">
                    {item.description}
                  </Description>
                </BlurBg>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="bg-accent/15 py-12">
        <div className="max-w-5xl mx-auto md:flex items-center justify-center gap-10">
          <div className="basis-8/12 space-y-6 mb-6 md:mb-0">
            <Description>
              As we continue to evolve, one thing remains the same: our
              commitment to creating innovative solutions that simplify the way
              people work. With every new feature, partnership, and update, we
              aim to bring you the best in meeting room booking experiences.
            </Description>
            <Description>
              Join us on this journey as we continue to shape the future of
              workspace solutions, ensuring that wherever you work, FlexiSpace
              is there to make it easier.
            </Description>
          </div>

          <Button
            className="!mt-0 bg-primary text-white"
            icon={<ArrowOutline fill="fill-white" />}
          >
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default OurStoryContainer;
