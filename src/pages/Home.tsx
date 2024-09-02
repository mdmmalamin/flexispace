import FeaturedRoomsContainer from "../components/features/landing/FeaturedRoomsContainer";
import HeroContainer from "../components/features/landing/HeroContainer";
import OurSolutionsContainer from "../components/features/landing/OurSolutionsContainer";
import ServiceAdsContainer from "../components/features/landing/ServiceAdsContainer";
import TestimonialsContainer from "../components/features/landing/TestimonialsContainer";
import WhyChooseUsContainer from "../components/features/landing/WhyChooseUsContainer";

const Home = () => {
  return (
    <>
      <HeroContainer />
      <div className="space-y-16">
        <ServiceAdsContainer />

        <FeaturedRoomsContainer />

        <WhyChooseUsContainer />

        <OurSolutionsContainer />

        <TestimonialsContainer />
      </div>
    </>
  );
};

export default Home;
