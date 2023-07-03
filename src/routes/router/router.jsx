import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import NotFound from "../../Pages/NotFound/NotFound";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Courses from "../../Pages/Courses/Courses";
import Mentor from "../../Pages/Mentor/Mentor";
import DashBoard from "../../Layouts/DashBoard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SelectedCourses from "../../Pages/Dashboard/User/SelectedCourses/SelectedCourses";
import EnrolledCourses from "../../Pages/Dashboard/User/EnrolledCourses/ErolledCourses";
import Payments from "../../Pages/Dashboard/User/Payments/Payments";
import AddACourse from "../../Pages/Dashboard/Mentor/AddACourse/AddACourse";
import MyCourses from "../../Pages/Dashboard/Mentor/MyCourses/MyCourses";
import ManageCourses from "../../Pages/Dashboard/Admin/ManageCourses/ManageCourses";
import ManageUsers from "../../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import MentorRoute from "../MentorRoute/MentorRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import EditCourse from "../../Pages/Dashboard/Mentor/EditCourse/EditCourse";
import Payment from "../../Pages/Dashboard/User/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () =>
          await fetch("https://b7a12-summer-camp-server-side-gazi-farhana.vercel.app/courses/popular"),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader: async () => await fetch("https://b7a12-summer-camp-server-side-gazi-farhana.vercel.app/courses"),
      },
      {
        path: "mentors",
        element: <Mentor />,
        loader: async () => await fetch("https://b7a12-summer-camp-server-side-gazi-farhana.vercel.app/courses"),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "selected-courses",
        element: <SelectedCourses />,
      },
      {
        path: "selected-courses/:id",
        element: <Payment />,
      },
      {
        path: "enrolled-courses",
        element: <EnrolledCourses />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "add-a-course",
        element: (
          <MentorRoute>
            <AddACourse />
          </MentorRoute>
        ),
      },
      {
        path: "my-courses/:id",
        element: (
          <MentorRoute>
            <EditCourse />
          </MentorRoute>
        ),
      },
      {
        path: "my-courses",
        element: (
          <MentorRoute>
            <MyCourses />
          </MentorRoute>
        ),
      },
      {
        path: "manage-courses",
        element: (
          <AdminRoute>
            <ManageCourses />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
