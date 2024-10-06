import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "../App";
import Error404 from "../pages/Error404";
import MeetingRooms from "../pages/MeetingRooms";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { routeGenerator } from "../utils/routeGenerator";
import { adminRoutes } from "./admin.routes";
import { userRoutes } from "./user.routes";
import DashboardLayout from "../components/layouts/DashboardLayout";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import RoomDetails from "../pages/user/RoomDetails";
import BookingProcess from "../pages/user/BookingProcess";

const router = createBrowserRouter([
  {
    path: "/", //? Absolute path
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/admin",
        element: (
          <ProtectedRoute role="admin">
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: routeGenerator(adminRoutes),
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute role="user">
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: routeGenerator(userRoutes),
      },
      {
        path: "/user/room-details/:id",
        element: (
          <ProtectedRoute role="user">
            <RoomDetails />
          </ProtectedRoute>
        ),
      },
      // {
      //   path: "/user/booking-process/:id",
      //   element: (
      //     <ProtectedRoute role="user">
      //       <BookingProcess />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "meeting-rooms",
        element: <MeetingRooms />,
      },
      {
        path: "about-us", //? Relative path
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
