import { useContext } from "react";
import { AuthContext } from "../Components/Authontation/Authorization";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../Pages/Home/LoadingPage";

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
