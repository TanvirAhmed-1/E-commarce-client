import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "../Pages/Home/LoadingPage";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import UploadProduct from "../Dashbord/UploadProduct";
import Root from "../Components/Root/Root";
import YourOrder from "../Order/YourOrder";
import Favorite from "../Order/favorite";
import ProductDetails from "../Components/ProductDetails";
import ShowAllProducts from "../Dashbord/ShowAllProducts";
import UpdateProduct from "../Dashbord/UpdateProduct";
import AllOrder from "../Dashbord/AllOrder";
import AllProducts from "../Pages/AllProducts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Components/ErrorPage";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import OrderStatus from "../Pages/Dashboard/Admin/OrderStatus";
import UserBooking from "../Pages/Dashboard/UserBooking";
import UserPaymentHistory from "./../Pages/Dashboard/UserPaymentHistory";
import UserHome from "../Pages/Dashboard/User/UserHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/ProductDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/yourOrder",
        element: <YourOrder></YourOrder>,
      },
      {},
      {
        path: "/dashboard/favorite",
        element: <Favorite></Favorite>,
      },
      {
        path: "/dashboard/showAllProducts",
        element: <ShowAllProducts></ShowAllProducts>,
      },
      {
        path: "/dashboard/UpdateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/dashboard/allOrder",
        element: <AllOrder></AllOrder>,
      },
      {
        path: "/dashboard/productUpdate",
        element: <UploadProduct></UploadProduct>,
      },
      {
        path: "/dashboard/AllUser",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/orderStatus",
        element: <OrderStatus></OrderStatus>,
      },
      {
        path: "/dashboard/UserBooking",
        element: <UserBooking></UserBooking>,
      },
      {
        path: "/dashboard/UserPaymentMethod",
        element: <UserPaymentHistory></UserPaymentHistory>,
      },
      {
        path: "/dashboard/UserHome",
        element: <UserHome></UserHome>,
      },
            {
        path: "/dashboard/AdminHome",
        element: <AdminHome></AdminHome>,
      },
    ],
  },
]);

export default Router;
