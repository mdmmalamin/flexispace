import UserBookingTableContainer from "../../components/features/userFeatures/UserBookingTableContainer";
import Container from "../../components/ui/Container";

const MyBookingList = () => {
  return (
    <main>
      <Container className="space-y-6">
        <UserBookingTableContainer />
      </Container>
    </main>
  );
};

export default MyBookingList;
