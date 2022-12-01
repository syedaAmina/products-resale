import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import AddProducts from "../pages/Dashboard/AddProducts";
import Buyers from "../pages/Dashboard/Buyers";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyOrders from "../pages/Dashboard/MyOrders";
import MyProducts from "../pages/Dashboard/MyProducts";
import Sellers from "../pages/Dashboard/Sellers";
import Welcome from "../pages/Dashboard/Welcome";
import WishList from "../pages/Dashboard/WishList";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Payment from "../pages/Payment/Payment";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./privateRoutes";
const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "signin", element: <SignIn /> },
      { path: "login", element: <Login /> },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "category/:brandName",
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Welcome /> },
          { path: "products", element: <MyProducts /> },
          { path: "sellers", element: <Sellers /> },
          { path: "buyers", element: <Buyers /> },
          { path: "addProduct", element: <AddProducts /> },
          { path: "myOrders", element: <MyOrders /> },
          { path: "wishlist", element: <WishList /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default rootRoutes;
