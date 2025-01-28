import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Allow access if logged in, otherwise redirect to login
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
