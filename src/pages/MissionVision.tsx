import React from "react";

const MissionVision: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      {" "}
      {/* Added pt-24 for top padding */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Mission and Vision
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200 hover:border-gray-300 transition-colors duration-300">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To serve as steadfast guardians of justice, committed to upholding
            the highest standards of legal excellence, integrity, and
            compassion. Rooted in a profound respect for the rule of law, we aim
            to contribute to a fair and equitable society by fostering legal
            solutions that stand as pillars of righteousness.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200 hover:border-gray-300 transition-colors duration-300">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            Our vision is to be a dynamic force in the legal realm, leading by
            example in delivering unparalleled legal services. We aspire to set
            new standards in legal excellence, leveraging cutting-edge
            technologies and fostering a culture of continuous learning. With a
            focus on inclusivity and social responsibility, we envision a future
            where our legal expertise positively transforms the lives of
            individuals and shapes a more just and equitable society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
