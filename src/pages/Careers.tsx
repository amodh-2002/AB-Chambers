import React from "react";

const Careers: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold my-14 text-center">CAREERS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Internship Opportunities
          </h2>
          <p className="text-gray-700">
            We offer exciting internship programs for students and recent
            graduates. Gain hands-on experience in a dynamic work environment
            and learn from industry experts. Our internships provide valuable
            skills and networking opportunities to kickstart your career.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Retainership Positions
          </h2>
          <p className="text-gray-700">
            Join our team as a retained professional. We offer flexible
            retainership positions for experienced individuals looking for
            long-term collaboration. Enjoy the benefits of a stable partnership
            while maintaining your independence as a consultant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
