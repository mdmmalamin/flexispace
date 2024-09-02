import RoomItemsContainer from "../components/features/meetingRooms/RoomItemsContainer";
import SearchContainer from "../components/features/meetingRooms/SearchContainer";
import Container from "../components/ui/Container";

const MeetingRooms = () => {
  return (
    <Container className="my-16">
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <SearchContainer />
        </div>
        <div className="md:col-span-9">
          <RoomItemsContainer />
        </div>
      </div>
    </Container>
  );
};

export default MeetingRooms;
