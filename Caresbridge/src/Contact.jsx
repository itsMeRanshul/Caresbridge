import React from "react";

export default function Contact() {
    return (
        <>
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fadeIn {
                        animation: fadeIn 1s ease-in-out;
                    }

                    .animate-slideUp {
                        animation: slideUp 0.8s ease-out;
                    }

                    .truncate-text {
                        word-wrap: break-word;
                        word-break: break-word;
                        overflow-wrap: break-word;
                        white-space: normal;
                    }
                `}
            </style>
            <section className="bg-pink-50 text-gray-900 py-8 px-4 sm:px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 text-pink-900 animate-fadeIn">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Contact Info Section */}
                    <div className="space-y-6 sm:space-y-8">
                        {[
                            {
                                title: "Address",
                                content: "Office no. 1031, 10th Floor, Plot No. 7, Laxminagar, District Centre, Delhi",
                                iconBg: " bg-gradient-to-r from-gray-800 to-pink-900 ",
                                icon: (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 10h11M9 21l-6-6 6-6M21 10v11"
                                    />
                                ),
                            },
                            {
                                title: "Phone",
                                content: "8178726325",
                                iconBg: " bg-gradient-to-r from-gray-800 to-pink-900",
                                icon: (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 11h14M9 19l-6-6 6-6M19 11v6m0-6h4"
                                    />
                                ),
                            },
                            {
                                title: "Email",
                                content: "CARESBRIDGE.PHARMACEUTICALS@GMAIL.COM",
                                iconBg: " bg-gradient-to-r from-gray-800 to-pink-900",
                                icon: (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 11h16M16 21l-8-8 8-8M23 11v8m0-8H2"
                                    />
                                ),
                            },
                        ].map(({ title, content, iconBg, icon }, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-4 rounded-lg shadow-md bg-gradient-to-r from-gray-500 to-pink-100 hover:shadow-lg transition-transform transform hover:scale-105 hover:translate-y-1 hover:rotate-1 duration-300 animate-slideUp"
                            >
                                <div className={`${iconBg} p-3 rounded-full`}>
                                    <svg
                                        className="w-6 h-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        {icon}
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-black">{title}</h3>
                                    <p className="text-sm sm:text-base text-black truncate-text">{content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="animate-fadeIn">
                        <iframe
                            className="w-full h-64 sm:h-80 rounded-lg shadow-lg border-4 border-pink-800"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.049410297229!2d77.07134898328184!3d28.62902165479911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf6ac2495d%3A0xfff07fc03531f009!2sDistrict%20Centre%2C%20Janakpuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1738058284088!5m2!1sen!2sin" 
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}
