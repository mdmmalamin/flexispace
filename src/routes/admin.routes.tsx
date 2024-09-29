import BookingSolid from "../assets/icons/BookingSolid";
import DashboardSolid from "../assets/icons/DashboardSolid";
import RoomSolid from "../assets/icons/RoomSolid";
import SlotSolid from "../assets/icons/SlotSolid";
import AdminDashboard from "../pages/admin/AdminDashboard";
import BookingManagement from "../pages/admin/BookingManagement";
import RoomManagement from "../pages/admin/RoomManagement";
import SlotsManagement from "../pages/admin/SlotsManagement";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
    icon: <DashboardSolid />,
  },
  // {
  //   name: "Academic Management",
  //   children: [
  {
    name: "Room Management",
    path: "room-management",
    element: <RoomManagement />,
    icon: <RoomSolid />,
  },
  {
    name: "Slot Management",
    path: "slot-management",
    element: <SlotsManagement />,
    icon: <SlotSolid />,
  },
  {
    name: "Booking Management",
    path: "booking-management",
    element: <BookingManagement />,
    icon: <BookingSolid />,
  },
  //   ],
  // },
];
