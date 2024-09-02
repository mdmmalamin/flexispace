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
    quote:
      "Amazing experience from start to finish. The team was extremely professional.",
    name: "Jane Smith",
    role: "COO, XYZ Industries",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },
  {
    quote:
      "Their attention to detail is unparalleled. I can't recommend them enough!",
    name: "Michael Johnson",
    role: "CTO, Tech Innovators",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },
  {
    quote: "A truly outstanding service that exceeded all of my expectations.",
    name: "Emily Davis",
    role: "CFO, FinCorp",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },
  {
    quote:
      "Professional, efficient, and a pleasure to work with. They are the best in the business.",
    name: "Chris Lee",
    role: "Head of Marketing, Brand Co.",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },
  {
    quote:
      "They delivered exactly what they promised, and the quality was top-notch.",
    name: "Sarah Brown",
    role: "VP of Operations, Retail Networks",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  },
  {
    quote:
      "The best service provider we've ever worked with. I highly recommend them!",
    name: "David Wilson",
    role: "Chief Strategy Officer, Global Solutions",
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
