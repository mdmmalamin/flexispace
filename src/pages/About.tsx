import AboutHeroContainer from "../components/features/about/AboutHeroContainer";
import MeetTheTeam from "../components/features/about/MeetTheTeam";
import OurMissionContainer from "../components/features/about/OurMissionContainer";
import OurStoryContainer from "../components/features/about/OurStoryContainer";

const About = () => {
  return (
    <main className="space-y-24">
      <AboutHeroContainer />

      <OurMissionContainer />

      <MeetTheTeam />

      <OurStoryContainer />
    </main>
  );
};

export default About;
