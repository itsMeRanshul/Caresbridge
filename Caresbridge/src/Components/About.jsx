import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '/assets/Screenshot 2025-01-14 002455.png';
import SliderComponent from './Slider/SliderComponent';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation will repeat when scrolling up and down
    });
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen text-gray-800">

        <SliderComponent/>
      {/* Overview Section */}
      <section
        className="py-12 bg-gradient-to-r from-pink-200 to-pink-400 text-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-wider">About Us</h1>
          <p className="text-lg">
            We aim to revolutionize healthcare by providing accessible, affordable, and high-quality medicines online. With a user-friendly platform, we make purchasing medicines convenient and reliable.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-pink-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2
            className="text-4xl font-bold text-center mb-8 text-pink-600"
            data-aos="fade-up"
          >
            Our Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Provide affordable and accessible healthcare to all.',
              'Ensure authenticity and quality in every product.',
              'Empower users with health education and resources.',
              'Adopt eco-friendly practices for a sustainable future.',
              'Build a trusted platform for reliable healthcare.',
            ].map((point, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:bg-pink-100 transition duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 200} // Delay for staggered animation
              >
                <h3 className="text-2xl font-semibold mb-4 text-pink-700">
                  Vision {index + 1}
                </h3>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition Section */}
      <section className="py-12 bg-pink-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2
            className="text-4xl font-bold text-center mb-8 text-pink-600"
            data-aos="fade-up"
          >
            Awards and Recognition
          </h2>
          <div className="flex flex-col items-center space-y-8">
            {[
              {
                imgSrc: image1,
                description: 'Certified Excellence in Healthcare Services - 2023',
              },
              {
                imgSrc: image1,
                description: 'Best Online Medicine Platform - 2022',
              },
              {
                imgSrc: image1,
                description: 'Eco-Friendly Business Practices Award - 2021',
              },
            ].map((award, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6 w-full max-w-4xl"
                data-aos="fade-up"
                data-aos-delay={index * 200} // Delay for staggered animation
              >
                <img
                  src={award.imgSrc}
                  alt={`Award ${index + 1}`}
                  className="w-full md:w-1/3 rounded-lg hover:scale-105 transition duration-500"
                />
                <p className="text-center md:text-left text-lg">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;