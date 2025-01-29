import React from "react";
import { useState, useEffect } from "react";
import SliderComponent from "./Slider/SliderComponent";
import CardH from "./Card/CardH";
import News from "./Card/News";
import awarenessImage from "/assets/image.webp";
import image1 from "/assets/WhatsApp Image 2025-01-28 at 14.26.34_8b8083ab.jpg";
import image2 from "/assets/WhatsApp Image 2025-01-28 at 14.26.34_05ccea0f.jpg";
import image3 from "/assets/WhatsApp Image 2025-01-28 at 14.26.34_a7906160.jpg";

export default function Home() {
    const cardData = [
        {
            title: "Innovation",
            description: "Exploring new technologies and creating innovative solutions.",
            image: "assets/slider3.webp",
        },
        {
            title: "Collaboration",
            description: "Working together to achieve groundbreaking results.",
            image: "/assets/healthcare[1].webp",
        },
        {
            title: "Sustainability",
            description: "Ensuring long-term positive impact on the environment.",
            image: "/assets/WhatsApp Image 2025-01-28 at 14.26.34_33ffc90e.webp",
        },
    ];
    const [showFullText, setShowFullText] = useState(false);
    const text =
        "At Caresbridge Pharmaceuticals, we are dedicated to revolutionizing healthcare by focusing on some of the most critical and complex medical challenges. Our core areas of expertise span Oncology, where we drive innovative solutions for conditions such as breast and endometrial cancers, and Neurology, where we work to address debilitating neurological disorders. In Gastroenterology, we aim to improve digestive health through advanced research and therapies, while our focus on Cardiology and Cardiovascular Diseases reflects our commitment to enhancing heart health and combating life-threatening conditions. Additionally, our work in Nephrology targets kidney health, ensuring effective treatments for those affected by renal disorders. Through cutting-edge science, patient-centric care, and unwavering dedication, we strive to deliver transformative solutions that improve lives and redefine the future of healthcare.";

        const text1 =
        "Caresbridge Pharmaceuticals was established with an unwavering dedication to innovation and excellence in healthcare. Our mission is to pioneer the development of transformative, effective medicines that not only heal but also enhance the quality of life for patients worldwide. Guided by a commitment to compassion, integrity, and cutting-edge science, we strive to address unmet medical needs, empower healthier futures, and foster a world where every individual can lead a fulfilling and vibrant life.";

    const handleLearnMore = () => {
        setShowFullText(true);
    };

    useEffect(() => {
        const elements = document.querySelectorAll(".animate-on-scroll");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-10");
                    } else {
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
        <div className="min-h-screen w-screen overflow-x-hidden bg-pink-50">
            {/* Slider Section */}
            <SliderComponent />

            {/* Awareness Section */}
            <section className="animate-on-scroll opacity-0 translate-y-10 transition duration-700 flex flex-col sm:flex-row items-center justify-between bg-pink-50 p-6 sm:p-10 rounded-lg shadow-lg mx-2 sm:mx-auto max-w-7xl">
                <div className="relative sm:w-1/2 w-full p-4 flex justify-center">
                    <div className="relative w-full h-60 sm:h-80">
                        <img
                            src={image1}
                            alt="Awareness 1"
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 rounded-lg shadow-lg hover:scale-110 hover:rotate-1"
                        />
                        <img
                            src={image2}
                            alt="Awareness 2"
                            className="absolute bottom-0 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 rounded-lg shadow-lg hover:scale-110 hover:rotate-1"
                        />
                        <img
                            src={image3}
                            alt="Awareness 3"
                            className="absolute bottom-0 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 rounded-lg shadow-lg hover:scale-110 hover:rotate-1"
                        />
                    </div>
                </div>

                <div className="sm:w-1/2 w-full p-4 space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 hover:text-rose-900">
                    Caresbridge Pharmaceuticals is dedicated to creating powerful medicines that heal and empower healthier lives
                    </h2>
                    <p className="text-gray-900 leading-relaxed">
                        {showFullText ? text1 : `${text1.split(" ").slice(0, 30).join(" ")}...`}
                    </p>
                    {!showFullText && (
                        <button
                            onClick={handleLearnMore}
                            className="px-4 py-2 sm:px-6 sm:py-3 bg-rose-800 text-white font-semibold rounded-lg shadow-md hover:bg-rose-900 hover:scale-105"
                        >
                            Learn More
                        </button>
                    )}
                </div>
            </section>

            {/* Introduction Section */}
            <section className="animate-on-scroll opacity-0 translate-y-10 transition duration-700 flex flex-col sm:flex-row items-center justify-between bg-pink-50 p-6 sm:p-10 rounded-lg shadow-lg mx-2 sm:mx-auto max-w-7xl">
                <div className="sm:w-1/2 w-full p-4">
                    <img
                        src={awarenessImage}
                        alt="Awareness"
                        className="w-full h-auto rounded-lg transform transition duration-500 hover:scale-110 hover:rotate-1"
                    />
                </div>

                <div className="sm:w-1/2 w-full p-4 space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 transition duration-500 hover:text-rose-900">
                      Key Therapeutic Areas
                    </h2>
                    <p className="text-gray-900 leading-relaxed transition duration-500 hover:text-gray-900">
                        {showFullText ? text : `${text.split(" ").slice(0, 30).join(" ")}...`}
                    </p>
                    {!showFullText && (
                        <button
                            onClick={handleLearnMore}
                            className="px-4 py-2 sm:px-6 sm:py-3 bg-rose-800 text-white font-semibold rounded-lg shadow-md transform transition duration-500 hover:bg-rose-900 hover:scale-105 hover:shadow-lg"
                        >
                            Learn More
                        </button>
                    )}
                </div>
            </section>

            <News />

            {/* Research Section */}
            <section className="animate-on-scroll opacity-0 translate-y-10 transition duration-700 bg-pink-50 py-12 px-4 sm:px-8 mx-auto max-w-7xl">
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4">Research and Development</h2>
                    <p className="text-gray-900">Discover how we innovate and create value for a better future.</p>
                </div>
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
                    {cardData.map((card, index) => (
                        <CardH key={index} title={card.title} description={card.description} image={card.image} />
                    ))}
                </div>
            </section>
        </div>
    );
}