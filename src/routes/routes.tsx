import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "../App";
import Error404 from "../pages/Error404";
import MeetingRooms from "../pages/MeetingRooms";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/", //? Absolute path
    element: <App />,
    errorElement: <Error404 />,
    children: [
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
