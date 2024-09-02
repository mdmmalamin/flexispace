import { TFeaturedRoomProps } from "../../types/TCardProps";
import BlurBg from "../ui/BlurBg";
import Button from "../ui/Button";

const MeetingRoomCard = ({
  image,
  name,
  capacity,
  pricePerSlot,
}: TFeaturedRoomProps) => {
  return (
    <BlurBg className="hover:bg-secondary/20 duration-300 p-4 group grid gap-4 grid-cols-12">
      <div className="overflow-hidden rounded-md col-span-4 sm:col-span-3">
        <img
          className="rounded-md w-full h-full object-cover object-center group-hover:scale-110 duration-300"
          src={image}
          alt={`Picture of ${name}.`}
        />
      </div>

      <div className="col-span-8 sm:grid sm:grid-cols-12 gap-4">
        <h1 className="font-bold sm:text-lg sm:col-span-4">{name}</h1>

        <div className="sm:col-span-4 flex gap-4 items-center justify-between sm:justify-start sm:flex-col">
          <p className="font-bold">
            <span className="text-xs sm:text-base text-accent">Capacity: </span>
            {capacity}
          </p>

          <p className="font-bold">
            <span className="text-xs sm:text-base text-accent">
              Price per slot:{" "}
            </span>
            {pricePerSlot}
          </p>
        </div>

        <Button className="w-full sm:w-fit h-fit mx-auto bg-primary text-light !text-base font-medium rounded-md hover:bg-primary/80 duration-300 col-span-4">
          See Details
        </Button>
      </div>
    </BlurBg>
  );
};

export default MeetingRoomCard;
