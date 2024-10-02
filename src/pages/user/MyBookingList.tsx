import UserBookingTableContainer from "../../components/features/userFeatures/UserBookingTableContainer";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";

const MyBookingList = () => {
  return (
    <main>
      <Container className="space-y-6">
        <Title>My Booking Lists</Title>
        <UserBookingTableContainer />
      </Container>
    </main>
  );
};

export default MyBookingList;
