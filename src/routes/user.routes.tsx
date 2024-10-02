import DashboardSolid from "../assets/icons/DashboardSolid";
import Checkout from "../pages/user/Checkout";
import MyBookingList from "../pages/user/MyBookingList";
export const userRoutes = [
  // {
  //   name: "Room Details",
  //   path: "room-details",
  //   element: <RoomDetails />,
  //   icon: <RoomSolid />,
  // },
  // {
  //   name: "Booking Process",
  //   path: "booking-process",
  //   element: <BookingProcess />,
  //   icon: <BookingSolid />,
  // },
  {
    name: "Checkout",
    path: "checkout",
    element: <Checkout />,
    icon: <DashboardSolid />,
  },
  {
    name: "My Booking List",
    path: "my-booking-list",
    element: <MyBookingList />,
    icon: <DashboardSolid />,
  },
];
