import ArrowOutline from "../../../assets/icons/ArrowOutline";
import Container from "../../ui/Container";
import Description from "../../ui/Description";

const AboutHeroContainer = () => {
  return (
    <div className="bg-accent/15">
      <Container className="space-y-12 py-24 grid grid-cols-12">
        <h1 className="text-5xl md:text-7xl font-extrabold col-span-10">
          We help businesses find the right way to work
          <span className="text-primary">.</span>
        </h1>

        <Description className="col-span-12 space-y-6 md:space-y-0 md:flex justify-end gap-10">
          <p className="basis-1/4">
            For more than 30 years, we’ve helped businesses find and create the
            perfect workspace for their people.
          </p>

          <p className="basis-1/4">
            Our extensive network of locations enables companies of all sizes to
            work wherever, and however they need.
          </p>

          <p className="animate-bounce flex justify-end items-end">
            <ArrowOutline className="scale-150 rotate-[180deg] bg-white" />
          </p>
        </Description>
      </Container>
    </div>
  );
};

export default AboutHeroContainer;
