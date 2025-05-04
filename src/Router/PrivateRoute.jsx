import { useContext } from "react";
import { AuthContext } from "../Components/Authontation/Authorization";
import LoadingPage from "../Components/LoadingPage";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loader, users } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return <LoadingPage></LoadingPage>;
  }
  if (users) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
