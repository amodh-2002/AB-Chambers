import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center ">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/main1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)",
          }}
        ></div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4 ">
            Your Trusted Legal Partners
          </h1>

          <p className="text-xl mb-8">
            Comprehensive Legal Solutions Tailored to Your Needs
          </p>
          <Link
            to="/contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Schedule a Consultation
          </Link>
          <p className="mt-6 text-lg font-light">
            Chambers – Your Trusted Advocates in the Pursuit of Justice
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-100 max-w-7xl mx-auto ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4">
              Chambers is a premier law firm dedicated to providing top-notch
              legal services across various practice areas. Our team of
              experienced attorneys is committed to delivering personalized
              legal solutions with the highest level of integrity and
              professionalism.
            </p>
            <p>
              Our mission is to empower our clients with expert legal guidance,
              ensuring their rights are protected, and their legal needs are met
              efficiently.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/conf1.jpg"
              alt="Chambers Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white max-w-7xl mx-auto ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Chambers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Expertise Across Practice Areas
              </h3>
              <p>
                Our attorneys bring extensive experience and specialized
                knowledge in various legal disciplines.
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Client-Centered Approach
              </h3>
              <p>
                We prioritize your needs, providing tailored solutions that
                align with your goals.
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Proven Track Record
              </h3>
              <p>
                We have a history of successfully handling complex legal matters
                with favorable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today for a consultation with our expert legal team.
          </p>
          <Link
            to="/contact-us"
            className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
