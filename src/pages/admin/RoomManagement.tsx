import CreateRoomModal from "../../components/features/adminFeatures/roomManagement/CreateRoomModal";
import RoomTableContainer from "../../components/features/adminFeatures/roomManagement/RoomTableContainer";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";

const RoomManagement = () => {
  return (
    <Container className="space-y-6">
      <div className="flex items-center justify-between gap-5">
        <Title className="!text-left my-2">Room Table</Title>

        <CreateRoomModal />
      </div>

      <RoomTableContainer />
    </Container>
  );
};

export default RoomManagement;
