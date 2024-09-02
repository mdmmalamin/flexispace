import ConfirmOutline from "../../../assets/icons/ConfirmOutline";
import DateTimeOutline from "../../../assets/icons/DateTimeOutline";
import SelectOutline from "../../../assets/icons/SelectOutline";
import BlurBg from "../../ui/BlurBg";
import Container from "../../ui/Container";
import Headline from "../../ui/Headline";

const SolutionsData = [
  {
    icon: <SelectOutline size="size-10 sm:size-12" />,
    name: "Select a Room",
  },
  {
    icon: <DateTimeOutline size="size-10 sm:size-12" />,
    name: "Choose Date & Time",
  },
  {
    icon: <ConfirmOutline size="size-10 sm:size-12" />,
    name: "Confirm Booking",
  },
];

const OurSolutionsContainer = () => {
  return (
    <div className="py-16 bg-dark text-white">
      <Container className="space-y-12">
        <Headline>Our Solutions</Headline>

        <div className="grid gap-2.5 sm:gap-12 grid-cols-3 lg:mx-40">
          {SolutionsData?.map((item, idx) => (
            <BlurBg
              key={idx}
              className="text-center space-y-2 hover:border-secondary bg-transparent hover:bg-white/10 duration-300 py-4 sm:py-12"
            >
              <div className="flex justify-center items-center text-secondary">
                {item.icon}
              </div>
              <div className="text-xs sm:text-base">{item.name}</div>
            </BlurBg>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurSolutionsContainer;
