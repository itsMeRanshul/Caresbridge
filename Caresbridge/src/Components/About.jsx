import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        className="py-12 bg-gradient-to-r from-gray-700 to-pink-800 text-white"
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
      <section className="py-12 bg-gradient-to-r from-gray-200 to-pink-200">
        <div className="container mx-auto px-6 md:px-12">
          <h2
            className="text-4xl font-bold text-center mb-8 text-black"
            data-aos="fade-up"
          >
            Our Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'To revolutionize the treatment of oncology, neurology, gastroenterology, cardiology,nephrology, cardiovascular diseases, breast cancer, and endometrial cancer through cutting-edge innovation, ensuring accessible and effective care for all.',
              'To lead the pharmaceutical industry with breakthrough solutions that address critical health challenges and improve patient outcomes across our focus areas.',
              'To build a future where collaboration with medical professionals, researchers, and healthcare organizations accelerates the discovery of life-changing therapies.',
              'To create a healthcare ecosystem driven by compassion, innovation, and excellence, ensuring every patient lives a healthier and more fulfilling life.',
              'To inspire and educate communities worldwide about prevention, early detection, and management of life-threatening conditions through impactful awareness campaigns.',
              'To prioritize the needs of our customers by delivering personalized solutions, exceptional support, and a seamless experience, ensuring trust and satisfaction in every interaction.'
            ].map((point, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-400 to-pink-200 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 hover:bg-pink-100 transition duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 200} // Delay for staggered animation
              >
                <h3 className="text-2xl font-semibold mb-4 text-pink-900">
                  Vision {index + 1}
                </h3>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition Section */}
      <section className="py-12 bg-gradient-to-r from-gray-200 to-pink-200">
        <div className="container mx-auto px-6 md:px-12">
          <h2
            className="text-4xl font-bold text-center mb-8 text-black"
            data-aos="fade-up"
          >
            Our Commitment
          </h2>
          <div className="flex flex-col items-center space-y-8">
            {[
              {
                description: 'Welcome to Caresbridge Pharmaceuticals, a company driven by the unwavering mission to revolutionize healthcare and improve lives. With a steadfast focus on addressing some of the most pressing health challenges, we are committed to advancing innovative treatments for Oncology, Neurology, Gastroenterology, Cardiology,Nephrology ,Cardiovascular diseases, Breast cancer, and Endometrial cancer.',
              },
              {
                description: 'At Caresbridge, we believe in combining cutting-edge science with compassionate care to deliver transformative solutions. Our research and development efforts are fueled by a passion for creating therapies that not only improve patient outcomes but also enhance their quality of life.',
              },
              {
                description: 'We are equally dedicated to raising awareness and empowering communities through education and advocacy. By fostering collaboration with healthcare professionals and leveraging the latest advancements in medical research, we aim to make a meaningful impact on global health.Caresbridge Pharmaceuticals stands as a symbol of trust, innovation, and excellence. Together with our partners, we are shaping a future where everyone has access to effective, life-changing treatments and the opportunity to lead healthier, more fulfilling lives.',
              },
            ].map((award, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-400 to-pink-200 shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6 w-full max-w-4xl"
                data-aos="fade-up"
                data-aos-delay={index * 200} // Delay for staggered animation
              >
                
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