import Container from "../ui/Container";
import Description from "../ui/Description";
import Title from "../ui/Title";

type TWhyUsCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const WhyUsCard = ({ icon, title, description }: TWhyUsCardProps) => {
  return (
    <Container className="relative">
      <div>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
          {icon}
        </div>
        <Title className="!text-left ml-16">{title}</Title>
      </div>
      <Description className="mt-2 ml-16">
        {description}
      </Description>
    </Container>
  );
};

export default WhyUsCard;
