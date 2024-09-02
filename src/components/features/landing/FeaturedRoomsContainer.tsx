import { Link } from "react-router-dom";
import FeaturedRoomCard from "../../cards/FeaturedRoomCard";
import Container from "../../ui/Container";
import Headline from "../../ui/Headline";
import Button from "../../ui/Button";

const roomData = [
  {
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    name: "Conference Room",
    capacity: 20,
    pricePerSlot: 100,
  },
  {
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    name: "Conference Room",
    capacity: 20,
    pricePerSlot: 100,
  },
  {
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    name: "Conference Room",
    capacity: 20,
    pricePerSlot: 100,
  },
  {
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    name: "Conference Room",
    capacity: 20,
    pricePerSlot: 100,
  },
  {
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    name: "Conference Room",
    capacity: 20,
    pricePerSlot: 100,
  },
  {
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    name: "Conference Room",
    capacity: 20,
    pricePerSlot: 100,
  },
  {
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    name: "Conference Room",
    capacity: 20,
    pricePerSlot: 100,
  },
  {
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
    name: "Conference Room",
    capacity: 20,
    pricePerSlot: 100,
  },
];

const FeaturedRoomsContainer = () => {
  return (
    <Container className="space-y-6">
      <Headline className="!text-left">Spotlight Rooms</Headline>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {roomData?.slice(0, 5)?.map((item, idx) => (
          <FeaturedRoomCard {...item} key={idx} />
        ))}
      </div>

      <div className="flex justify-center items-center text-2xl font-bold">
        <Link to="/meeting-rooms">
          <Button>See More</Button>
        </Link>
      </div>
    </Container>
  );
};

export default FeaturedRoomsContainer;
