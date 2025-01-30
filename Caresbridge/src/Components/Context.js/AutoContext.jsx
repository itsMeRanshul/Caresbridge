import React, { createContext, useContext, useState, useEffect ,useNavigate} from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userId, setUserId] = useState(localStorage.getItem('user_id'));
  const [is_admin, setIsAdmin] = useState(localStorage.getItem('is_admin'));

  const loginUser = (id,is_admin) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user_id", id);
    localStorage.setItem("is_admin", JSON.stringify(is_admin));
    setUserId(id);
    setIsLoggedIn(true);
    setIsAdmin(is_admin)
  };

  const logoutUser = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_admin");
      // Dispatch a custom event to notify changes
  window.dispatchEvent(new Event("localStorageUpdate"));
  
    // Redirect to the home or login page
    const navigate = useNavigate();
     navigate("/login");
  };
  useEffect(() => {
     // Listen for localStorage updates
     const handleStorageChange = () => {
      setUserId(localStorage.getItem("user_id"));
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    // Attach listener for storage events
    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isLoggedIn]); 

  return (
    <AuthContext.Provider value={{isLoggedIn, userId, loginUser, logoutUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;