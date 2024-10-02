import BookingTableContainer from "../../components/features/adminFeatures/bookingManagement/BookingTableContainer";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";

const BookingManagement = () => {
  return (
    <Container className="space-y-6">
      <div className="flex items-center justify-between gap-5">
        <Title className="!text-left my-2">Booking Table</Title>
      </div>

      <BookingTableContainer />
    </Container>
  );
};

export default BookingManagement;
