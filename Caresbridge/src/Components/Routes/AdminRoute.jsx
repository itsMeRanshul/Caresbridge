import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdmin = JSON.parse(localStorage.getItem("is_admin")) === true;

  // Allow access if logged in as admin, otherwise redirect to login
  return isLoggedIn && isAdmin ? children : <Navigate to="/login" replace />;
};

export default AdminRoute;
