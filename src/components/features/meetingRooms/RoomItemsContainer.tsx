import { Link } from "react-router-dom";
import { useGetAllPublicRoomsQuery } from "../../../redux/features/public/public.api";
import MeetingRoomCard from "../../cards/MeetingRoomCard";

const RoomItemsContainer = () => {
  const { data: roomData } = useGetAllPublicRoomsQuery(undefined);

  return (
    <div className="space-y-4">
      {roomData?.data?.map((item, idx) => (
        <Link to={`/user/room-details/${item.name}-${item._id}`} key={idx}>
          <MeetingRoomCard {...item} />
        </Link>
      ))}
    </div>
  );
};

export default RoomItemsContainer;
