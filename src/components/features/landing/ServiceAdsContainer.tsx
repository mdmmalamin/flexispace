import CalenderOutline from "../../../assets/icons/CalenderOutline";
import ScheduleOutline from "../../../assets/icons/ScheduleOutline";
import SupportOutline from "../../../assets/icons/SupportOutline";
import TimeOutline from "../../../assets/icons/TimeOutline";
import AdsCard from "../../cards/AdsCard";
import Container from "../../ui/Container";

const adsData = [
  {
    icon: <TimeOutline size="size-16" />,
    title: "Real-Time Availability",
  },
  {
    icon: <CalenderOutline size="size-16" />,
    title: "Instant Booking Confirmation",
  },
  {
    icon: <ScheduleOutline size="size-16" />,
    title: "Flexible Scheduling",
  },
  {
    icon: <SupportOutline size="size-16" />,
    title: "24/7 Support",
  },
];

const ServiceAdsContainer = () => {
  return (
    <div className="py-16 bg-dark">
      <Container className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:!px-16">
        {adsData?.map((item, idx) => (
          <AdsCard {...item} key={idx} />
        ))}
      </Container>
    </div>
  );
};

export default ServiceAdsContainer;
