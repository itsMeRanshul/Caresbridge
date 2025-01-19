import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SliderComponent from "./Slider/SliderComponent";
import awarenessImage from "/assets/Screenshot 2025-01-14 002455.png";
import CardH from "./Card/CardH"
import { useState } from "react";
import image1 from "/assets/Screenshot 2025-01-14 002455.png"
import image2 from "/assets/Screenshot 2025-01-14 002455.png"
import image3 from "/assets/Screenshot 2025-01-14 002455.png"
import News from "./Card/News";
export default function Home() {
    const cardData = [
        {
            title: "Innovation",
            description: "Exploring new technologies and creating innovative solutions.",
            image: "/assets/Screenshot 2025-01-14 002455.png",
        },
        {
            title: "Collaboration",
            description: "Working together to achieve groundbreaking results.",
            image: "/assets/Screenshot 2025-01-14 002455.png",
        },
        {
            title: "Sustainability",
            description: "Ensuring long-term positive impact on the environment.",
            image: "/assets/Screenshot 2025-01-14 002455.png",
        },
    ];
    const [showFullText, setShowFullText] = useState(false);

    const text = "Learn about the signs, symptoms, and preventative measures for breast cancer. Early detection saves lives. Educate yourself and spread awareness to make a difference.>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam ullam voluptates, asperiores ipsa deserunt laudantium dicta excepturi laborum ea exercitationem laboriosam reiciendis in maiores, ut veritatis cumque ipsam provident atque necessitatibus magnam! Ut ab sint voluptatum omnis voluptatem hic! Error nesciunt provident ipsum aperiam amet, inventore incidunt rerum repudiandae?";

    const handleLearnMore = () => {
        setShowFullText(true);
    };

    
    useEffect(() => {
        const elements = document.querySelectorAll(".animate-on-scroll");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Add animation classes when element enters the viewport
                entry.target.classList.add("opacity-100", "translate-y-0");
                entry.target.classList.remove("opacity-0", "translate-y-10");
              } else {
                // Reset animation classes when element leaves the viewport
                entry.target.classList.remove("opacity-100", "translate-y-0");
                entry.target.classList.add("opacity-0", "translate-y-10");
              }
            });
          },
          { threshold: 0.1 }
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);

    return (
        <div className="mx-auto w-full max-w-7xl">
            <SliderComponent />

            {/* Image Section */}
            <section className="animate-on-scroll opacity-0 translate-y-10 transition duration-700 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-pink-50 to-gray-100 p-10 rounded-lg shadow-lg transition duration-500 hover:shadow-2xl hover:bg-gradient-to-r hover:from-pink-100 hover:to-gray-200">
            {/* Image Section */}
            <div className="relative sm:w-1/2 w-full p-4 flex justify-center">
                <div className="relative w-full h-80 sm:h-96">
                    {/* Image 1 */}
                    <img
                        src={image1}
                        alt="Awareness 1"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg transition duration-500 hover:scale-110 hover:rotate-1"
                    />
                    {/* Image 2 */}
                    <img
                        src={image2}
                        alt="Awareness 2"
                        className="absolute bottom-0 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg transition duration-500 hover:scale-110 hover:rotate-1"
                    />
                    {/* Image 3 */}
                    <img
                        src={image3}
                        alt="Awareness 3"
                        className="absolute bottom-0 right-5 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg transition duration-500 hover:scale-110 hover:rotate-1"
                    />
                </div>
            </div>

         

            {/* Text Section */}
            <div className="sm:w-1/2 w-full p-4 space-y-6">
                <h2 className="text-4xl font-extrabold text-gray-800 transition duration-500 hover:text-pink-600">
                    Breast Cancer Awareness & Education
                </h2>
                <p className="text-gray-700 leading-relaxed transition duration-500 hover:text-gray-900">
                    {showFullText ? text : `${text.split(" ").slice(0, 30).join(" ")}...`}
                </p>
                {!showFullText && (
                    <button
                        onClick={handleLearnMore}
                        className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md transform transition duration-500 hover:bg-pink-700 hover:scale-105 hover:shadow-lg"
                    >
                        Learn More
                    </button>
                )}
            </div>
        </section>

            {/*AWARENESS SECTION  */}
            <section className=" animate-on-scroll opacity-0 translate-y-10 transition duration-700 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-pink-50 to-gray-100 p-10 rounded-lg shadow-lg transition duration-500 hover:shadow-2xl hover:bg-gradient-to-r hover:from-pink-100 hover:to-gray-200">
            {/* Image Section */}
            <div className="sm:w-1/2 w-full p-4">
                <img
                    src={awarenessImage}
                    alt="Awareness"
                    className="w-full h-auto rounded-lg transform transition duration-500 hover:scale-110 hover:rotate-1"
                />
            </div>

            {/* Text Section */}
            <div className="sm:w-1/2 w-full p-4 space-y-6">
                <h2 className="text-4xl font-extrabold text-gray-800 transition duration-500 hover:text-pink-600">
                    Breast Cancer Awareness & Education
                </h2>
                <p className="text-gray-700 leading-relaxed transition duration-500 hover:text-gray-900">
                    {showFullText ? text : `${text.split(" ").slice(0, 30).join(" ")}...`}
                </p>
                {!showFullText && (
                    <button
                        onClick={handleLearnMore}
                        className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md transform transition duration-500 hover:bg-pink-700 hover:scale-105 hover:shadow-lg"
                    >
                        Learn More
                    </button>
                )}
            </div>
        </section>

            {/* Research and Development Section */}
            <section className="animate-on-scroll opacity-0 translate-y-10 transition duration-700 bg-gray-100 py-16 px-4 sm:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4">Research and Development</h2>
                    <p className="text-gray-600">Discover how we innovate and create value for a better future.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                    {cardData.map((card, index) => (
                        <CardH key={index} title={card.title} description={card.description} image={card.image} />
                    ))}
                </div>
            </section>
            <News/>
        </div>
    );
}
