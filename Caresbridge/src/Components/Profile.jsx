import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./Context.js/AutoContext";

const ProfilePage = () => {
  const { userId } = useParams(); // Extract userId from the URL
  const navigate = useNavigate();

  const { userId: contextUserId, logoutUser } =useAuth()

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone_no: "",
    password: "",
    address: "", // Added address field
  });


  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(() => {
    if (!contextUserId) {
      navigate("/login"); // Redirect to login if no user is logged in
      return;
    }

    // Fetch user data from the backend using the logged-in user's ID
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/users/${contextUserId}`); // Use contextUserId only
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUserData({
          name: data.name,
          email: data.email,
          phone_no: data.phone_no,
          address: data.address,
          password: "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Unable to fetch user data. Please try again later.");
      }
    };

    fetchUserData();
  }, [contextUserId, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const filteredData = Object.fromEntries(
        Object.entries(userData).filter(([_, value]) => value !== "" && value !== undefined)
      );

      const response = await fetch(`http://localhost:8000/users/${contextUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };
  

  
  

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
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
              name="phone_no"
              value={userData.phone_no}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-4 py-2 text-gray-800 border rounded-md ${
                isEditing ? "border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "bg-gray-100"
              }`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={userData.address}
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
            onClick={logoutUser}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
