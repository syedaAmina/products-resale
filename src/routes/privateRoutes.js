import { Navigate } from "react-router-dom";
import Loader from "../components/shared/Loader";
import { Context } from "../context/Context";

const PrivateRoute = ({ children }) => {
  const { user, loader } = Context();

  if (loader) {
    return <Loader />;
  } else {
    return user ? children : <Navigate to="/login" />;
  }
};

export default PrivateRoute;
