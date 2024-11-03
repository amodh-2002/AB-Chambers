import React from "react";
import Contact from "../component/Contact";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h1>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
