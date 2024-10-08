import { Link } from "react-router-dom";
import FeaturedRoomCard from "../../cards/FeaturedRoomCard";
import Container from "../../ui/Container";
import Headline from "../../ui/Headline";
import Button from "../../ui/Button";
import { useGetAllPublicRoomsQuery } from "../../../redux/features/public/public.api";
import CardSkeleton from "../../skeleton/CardSkeleton";

const FeaturedRoomsContainer = () => {
  const { data: roomData, isLoading } = useGetAllPublicRoomsQuery(undefined);

  return (
    <Container className="space-y-6">
      <Headline>Spotlight</Headline>

      {isLoading && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {[...Array(5)].map((_, idx) => (
            <CardSkeleton flex={true} key={idx} />
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {roomData?.data?.slice(0, 5)?.map((item, idx) => (
          <Link
            to={`/user/room-details/${item.name}-${item._id}`}
            key={idx}
            state={item}
          >
            <FeaturedRoomCard {...item} />
          </Link>
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
