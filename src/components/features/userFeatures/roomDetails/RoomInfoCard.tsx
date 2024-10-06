import { TRoom } from "../../../../types";
import Title from "../../../ui/Title";

const RoomInfoCard = ({
  name,
  roomNo,
  floorNo,
  capacity,
  pricePerSlot,
  amenities,
}: Partial<TRoom>) => {
  return (
    <>
      <Title className="!text-left border-b pb-3">{name}</Title>

      <p className="font-semibold flex items-center justify-between">
        <span>Room No</span> {roomNo}
      </p>
      <p className="font-semibold flex items-center justify-between">
        <span>Floor No </span>
        {floorNo}
      </p>
      <p className="font-semibold flex items-center justify-between">
        <span>Capacity</span> {capacity}
      </p>
      <p className="font-semibold flex items-center justify-between">
        <span>Price Per Slot</span> {pricePerSlot}
      </p>
      <div className="flex items-start justify-between">
        <span className="font-semibold flex items-center justify-between">
          Amenities
        </span>
        <p className="flex items-center justify-end flex-wrap gap-2">
          {amenities?.map((item, idx) => (
            <span
              key={idx}
              className="text-sm font-semibold px-2 py-1 border border-secondary bg-secondary/20 hover:bg-secondary/40 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

export default RoomInfoCard;
