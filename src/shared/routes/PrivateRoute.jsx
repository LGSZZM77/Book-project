import { Navigate } from "react-router-dom";
import useUserStore from "../../shared/store/useUserStore";

const PrivateRoute = ({ children }) => {
  const { user } = useUserStore();
  return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
