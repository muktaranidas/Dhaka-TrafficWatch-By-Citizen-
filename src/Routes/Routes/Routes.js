import DashboardLayout from "../../Layout/DashboardLayout";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AddProduct from "../../Pages/Dashboard/addComplain/AddComplain";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import Signup from "../../Pages/Signup/Signup";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/add-complain",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
     
    ],
  },
]);
export default router;
