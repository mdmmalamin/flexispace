import { TFeaturedRoomProps } from "../../types/TCardProps";
import BlurBg from "../ui/BlurBg";

const FeaturedRoomCard = ({
  image,
  name,
  capacity,
  pricePerSlot,
}: TFeaturedRoomProps) => {
  return (
    <BlurBg className="!bg-dark/10">
      <img className="rounded-sm w-full object-cover object-center" src={image} alt="" />
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
    </BlurBg>
  );
};

export default FeaturedRoomCard;
