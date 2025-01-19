import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { userId } = useParams(); // Extract userId from the URL
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Mock fetching user data based on userId
    const mockData = {
      1: { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", password: "password123" },
      2: { name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210", password: "password456" },
    };

    // Check if the user exists in mock data and update the state
    if (mockData[userId]) {
      setUserData(mockData[userId]);
    } else {
      console.error("User not found for userId:", userId);
    }
  }, [userId]); // Ensure this runs every time userId changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSaveChanges = () => {
    // Simulate saving user data
    console.log("Updated user data for userId", userId, ":", userData);
    alert("Profile updated successfully! (Mock)");
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Clear session data (if any)
    localStorage.removeItem("userId"); // Assuming you're storing the userId in localStorage
    // Or you could use sessionStorage.removeItem("userId");
    
    // Navigate to home page after logout
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-4 py-2 text-gray-800 border rounded-md ${
                isEditing ? "border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-4 py-2 text-gray-800 border rounded-md ${
                isEditing ? "border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-4 py-2 text-gray-800 border rounded-md ${
                isEditing ? "border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-4 py-2 text-gray-800 border rounded-md ${
                isEditing ? "border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "bg-gray-100"
              }`}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSaveChanges}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
            >
              Save Changes
            </button>
          )}
        </div>
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
