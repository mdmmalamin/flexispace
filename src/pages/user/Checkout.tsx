import BookingSummary from "../../components/features/userFeatures/checkout/BookingSummary";
import PaymentOptions from "../../components/features/userFeatures/checkout/PaymentOptions";
import Container from "../../components/ui/Container";

const Checkout = () => {
  return (
    <div className="bg-accent/20 pb-24">
      <Container className="">
        <div className="mb-3 w-full text-sm font-semibold bg-green-100 border-b-4 border-green-500 text-center py-2">
          Great choice! You're almost done.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2 p-6 border shadow-md rounded-md bg-white">
            <BookingSummary />
          </div>

          <div className="col-span-1 bg-blue-200 p-6 rounded-md shadow-md">
            <PaymentOptions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
