import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Context.js/AutoContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { loginUser } = useAuth(); // Access the loginUser function from AuthContext

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the backend
      const response = await axios.post("http://127.0.0.1:8000/login", {
        email,
        password,
      });

      // Successful login response
      const data = response.data;
      if (data) {
        const { user_id, is_admin } = data;

        // Update context using loginUser
        loginUser(user_id,is_admin);

        // Store additional information in localStorage
        localStorage.setItem("is_admin", JSON.stringify(is_admin));

        // Redirect based on role
        if (is_admin) {
          navigate(`/admin`); // Redirect to admin panel if the user is an admin
        } else {
          navigate(`/profile/${user_id}`); // Redirect to profile page
        }
      }
    } catch (error) {
      // Handle login errors
      if (error.response && error.response.status === 401) {
        setError("Invalid credentials. Please try again.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-100 border border-red-400 rounded-md">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Not registered?{" "}
            <Link to="/Register" className="text-blue-500 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
