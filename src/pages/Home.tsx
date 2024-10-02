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
      <main className="space-y-24">
        <ServiceAdsContainer />

        <FeaturedRoomsContainer />

        <WhyChooseUsContainer />

        <OurSolutionsContainer />

        <TestimonialsContainer />
      </main>
    </>
  );
};

export default Home;
