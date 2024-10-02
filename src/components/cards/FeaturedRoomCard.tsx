import { TRoom } from "../../types";
import BlurBg from "../ui/BlurBg";
import Button from "../ui/Button";

const FeaturedRoomCard = ({
  // image,
  name,
  capacity,
  pricePerSlot,
}: TRoom) => {
  return (
    <BlurBg className="hover:bg-secondary/20 duration-300 p-4 group">
      <div className="overflow-hidden rounded-md">
        <img
          className="rounded-md size-full object-cover object-center group-hover:scale-110 duration-300"
          src="https://ctfassets.imgix.net/vh7r69kgcki3/46VeGE2tnqmkRLYI6VEJeh/9e35ea0ec8c67569128be3f0bccff6eb/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_3.jpg?auto=format%20compress&fit=crop&q=50&w=500px"
          alt={`Picture of ${name}.`}
        />
      </div>
      <h1 className="font-bold text-primary">{name}</h1>

      <div className="flex items-center justify-between">
        <p className="font-bold">
          <span className="text-xs text-accent">Capacity: </span>
          {capacity}
        </p>
        <p className="font-bold">
          <span className="text-xs text-accent">Price per slot: </span>
          {pricePerSlot}
        </p>
      </div>

      <Button className="w-full mx-auto bg-primary text-light !text-base font-medium rounded-md hover:bg-primary/80 duration-300">
        See Details
      </Button>
    </BlurBg>
  );
};

export default FeaturedRoomCard;
