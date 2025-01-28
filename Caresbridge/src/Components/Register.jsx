import axios from 'axios';
import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/register", {
                name: name,
                email: email,
                password: password,
                phone_no: phone_no,
                address: address,
            });

            if (response.status === 200) {
                setSuccess("Registration successful! You can now log in.");
                setError(""); // Clear any previous errors
                // Optionally clear input fields
                setName("");
                setEmail("");
                setPassword("");
                setPhoneNo("");
                setAddress("");
            }
        } catch (err) {
            if (err.response) {
                // Error response from backend
                setError(err.response.data.detail || "An error occurred. Please try again.");
            } else if (err.request) {
                // No response received from the server
                setError("No response from the server. Please check your network.");
            } else {
                // Other errors (e.g., client-side or unknown)
                setError("Something went wrong. Please try again.");
            }
            setSuccess(""); // Clear success message
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-100 text-gray-900 py-16 px-6 sm:px-12 lg:px-24">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-pink-900">
                Register
            </h2>
            {error && (
                <div className="p-4 mb-6 text-sm text-red-800 bg-red-100 border border-red-400 rounded-md">
                    {error}
                </div>
            )}
            {success && (
                <div className="p-4 mb-6 text-sm text-green-800 bg-green-100 border border-green-400 rounded-md">
                    {success}
                </div>
            )}
            <form
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-8"
                onSubmit={handleRegister}
            >
                <div className="relative">
                    <label
                        htmlFor="fullName"
                        className="block text-lg font-medium text-gray-700 mb-2"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-200 focus:outline-none transition-shadow shadow-sm"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div className="relative">
                    <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-700 mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-200 focus:outline-none transition-shadow shadow-sm"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="relative">
                    <label
                        htmlFor="password"
                        className="block text-lg font-medium text-gray-700 mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-200 focus:outline-none transition-shadow shadow-sm"
                        placeholder="Create a strong password"
                        required
                    />
                </div>

                <div className="relative">
                    <label
                        htmlFor="phone"
                        className="block text-lg font-medium text-gray-700 mb-2"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone_no}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-200 focus:outline-none transition-shadow shadow-sm"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="address"
                        className="block text-lg font-medium text-gray-700 mb-2"
                    >
                        Address
                    </label>
                    <textarea
                        id="address"
                        rows="3"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-200 focus:outline-none transition-shadow shadow-sm"
                        placeholder="Enter your address"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-pink-800 text-white p-4 rounded-full font-semibold hover:bg-pink-500 hover:shadow-lg transition-all"
                >
                    Register
                </button>
            </form>
        </section>
    );
}

export default Register;