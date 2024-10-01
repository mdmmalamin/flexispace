import CreateRoomContainer from "../../components/features/adminFeatures/roomManagement/CreateRoomContainer";
import RoomTableContainer from "../../components/features/adminFeatures/roomManagement/RoomTableContainer";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";

const RoomManagement = () => {
  return (
    <Container>
      <div className="flex justify-between gap-5">
        <Title className="!text-left my-2">Room Table</Title>

        <CreateRoomContainer />
      </div>

      <RoomTableContainer />
    </Container>
  );
};

export default RoomManagement;
