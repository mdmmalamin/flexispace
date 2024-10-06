import { Link } from "react-router-dom";
import { useGetAllPublicRoomsQuery } from "../../../redux/features/public/public.api";
import MeetingRoomCard from "../../cards/MeetingRoomCard";
import CardSkeleton from "../../skeleton/CardSkeleton";

const RoomItemsContainer = () => {
  const { data: roomData, isLoading } = useGetAllPublicRoomsQuery(undefined);

  return (
    <div className="space-y-4">
      {isLoading && [...Array(5)].map((_, idx) => <CardSkeleton key={idx} />)}

      {roomData?.data?.map((item, idx) => (
        <Link
          to={`/user/room-details/${item.name}-${item._id}`}
          key={idx}
          state={item}
        >
          <MeetingRoomCard {...item} />
        </Link>
      ))}
    </div>
  );
};

export default RoomItemsContainer;
