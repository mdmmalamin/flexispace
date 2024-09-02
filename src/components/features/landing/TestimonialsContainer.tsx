import ReviewCard from "../../cards/ReviewCard";
import Carousel from "../../Carousel";
import Container from "../../ui/Container";
import Headline from "../../ui/Headline";

const testimonials = [
  {
    quote: "This is the best service I have ever used. Highly recommended!",
    name: "John Doe",
    role: "CEO, Example Corp",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },
  {
    quote: "This is the best service I have ever used. Highly recommended!",
    name: "John Doe",
    role: "CEO, Example Corp",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },
  {
    quote: "This is the best service I have ever used. Highly recommended!",
    name: "John Doe",
    role: "CEO, Example Corp",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },
];

const TestimonialsContainer = () => {
  return (
    <Container>
      <Headline>What Our Clients Say</Headline>
      <Carousel data={testimonials?.length}>
        {testimonials.map((item, idx) => (
          <ReviewCard key={idx} {...item} />
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialsContainer;
