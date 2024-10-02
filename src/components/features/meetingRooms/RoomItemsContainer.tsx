import { Link } from "react-router-dom";
import { useGetAllPublicRoomsQuery } from "../../../redux/features/public/roomPublic.api";
import MeetingRoomCard from "../../cards/MeetingRoomCard";

const RoomItemsContainer = () => {
  const { data: roomData } = useGetAllPublicRoomsQuery(undefined);

  return (
    <div className="space-y-4">
      {roomData?.data?.map((item, idx) => (
        <Link to="/user/room-details" key={idx}>
          <MeetingRoomCard {...item} />
        </Link>
      ))}
    </div>
  );
};

export default RoomItemsContainer;
