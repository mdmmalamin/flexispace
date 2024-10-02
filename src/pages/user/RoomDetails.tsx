import { useLocation } from "react-router-dom";
import RoomImgContainer from "../../components/features/userFeatures/roomDetails/RoomImgContainer";
import RoomInfoContainer from "../../components/features/userFeatures/roomDetails/RoomInfoContainer";
import Container from "../../components/ui/Container";

const RoomDetails = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <main className="space-y-24">
      <Container className="grid col-span-1 sm:grid-cols-4 my-6">
        <RoomImgContainer />

        <RoomInfoContainer {...state} />
      </Container>
    </main>
  );
};

export default RoomDetails;
