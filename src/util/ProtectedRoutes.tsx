import { Navigate, Outlet } from "react-router-dom";
import { useUsername } from "../hooks/useUsername";
const ProtectRoutes = () => {
  const loggedUser = useUsername();

  return loggedUser ? <Outlet /> : <Navigate to={"/login"} />;
};
export default ProtectRoutes;
