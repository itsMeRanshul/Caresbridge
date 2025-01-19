import React from 'react'

function Register() {
  return (
    <section className="bg-pink-40 text-gray-900 py-16 px-6 sm:px-12 lg:px-24">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-white bg-gray-700 p-2 rounded-2xl ">
        Register
    </h2>
    <form
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-8"
        onSubmit={(e) => e.preventDefault()}
    >
        {/* Full Name */}
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
                className="w-full p-4 border border-gray-300 rounded-lg bg-pink-30 focus:ring-4 focus:ring-pink-100 focus:outline-none transition-shadow shadow-sm"
                placeholder="Enter your full name"
                required
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-user"></i>
            </span>
        </div>

        {/* Email */}
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
                className="w-full p-4 border border-gray-300 rounded-lg bg-pink-30 focus:ring-4 focus:ring-pink-100 focus:outline-none transition-shadow shadow-sm"
                placeholder="Enter your email"
                required
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-envelope"></i>
            </span>
        </div>

        {/* Password */}
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
                className="w-full p-4 border border-gray-300 rounded-lg bg-pink-30 focus:ring-4 focus:ring-pink-100 focus:outline-none transition-shadow shadow-sm"
                placeholder="Create a strong password"
                required
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-lock"></i>
            </span>
        </div>

        {/* Phone Number */}
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
                className="w-full p-4 border border-gray-300 rounded-lg bg-pink-30 focus:ring-4 focus:ring-pink-100 focus:outline-none transition-shadow shadow-sm"
                placeholder="Enter your phone number"
                required
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-phone"></i>
            </span>
        </div>

        {/* Address */}
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
                className="w-full p-4 border border-gray-300 rounded-lg bg-pink-30 focus:ring-4 focus:ring-pink-100 focus:outline-none transition-shadow shadow-sm"
                placeholder="Enter your address"
                required
            ></textarea>
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full bg-black text-white p-4 rounded-full font-semibold hover:bg-gray-800 hover:shadow-lg transition-all"
        >
            Register
        </button>
    </form>
</section>


  )
}

export default Register
