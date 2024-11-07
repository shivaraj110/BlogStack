import { Navigate, Outlet } from "react-router-dom";
const ProtectRoutes = () => {
  const token = localStorage.getItem("token");
  return token !== null ? <Outlet /> : <Navigate to={"/login"} />;
};
export default ProtectRoutes;
``