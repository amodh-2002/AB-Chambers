import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-4"><strong>Address:</strong> Chambers, [Full Address]</p>
            <p className="mb-4"><strong>Phone:</strong> [Phone Number]</p>
            <p className="mb-8"><strong>Email:</strong> [Email Address]</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
            <div className="h-96 bg-gray-300 rounded-lg">
              {/* Replace this div with an actual map component */}
              <p className="text-center pt-40 text-gray-600">Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
