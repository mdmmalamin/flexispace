import { useGetMyBookingCheckoutQuery } from "../../../../redux/features/user/bookingUser.api";
import { useGetMyProfileQuery } from "../../../../redux/features/user/myProfile.api";
import Title from "../../../ui/Title";

const BookingSummary = () => {
  const { data: myProfile } = useGetMyProfileQuery(undefined);

  const parts = window.location.pathname.split("-");
  const id = parts[parts.length - 1];

  const { data: bookingCheckout } = useGetMyBookingCheckoutQuery(id);

  return (
    <div className="space-y-6">
      <Title>Booking Summary</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="font-medium text-accent">Guest</h3>
          <p className="font-semibold text-lg">{myProfile?.data?.name}</p>
        </div>
        <div>
          <h3 className="font-medium text-accent">Email</h3>
          <p className="font-semibold text-lg">{myProfile?.data?.email}</p>
        </div>
        <div>
          <h3 className="font-medium text-accent">Phone</h3>
          <p className="font-semibold text-lg">{myProfile?.data?.phone}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="font-medium text-accent">Room</h3>
          <p className="font-semibold text-lg">
            {bookingCheckout?.data?.room?.name}
          </p>
        </div>
        <div>
          <h3 className="font-medium text-accent">Date</h3>
          <p className="font-semibold text-lg">{bookingCheckout?.data?.date}</p>
        </div>
        <div>
          <h3 className="font-medium text-accent">Slots Time</h3>
          <div className="font-semibold text-lg">
            {bookingCheckout?.data?.slots?.map((item, idx) => (
              <p key={idx}>
                {item.startTime} - {item.endTime}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
