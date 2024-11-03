import React from "react";

interface CardProps {
  heading: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ heading, content }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-1">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{heading}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Committed to Excellence in Legal Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          heading="Our Firm"
          content="AB Chamber is a leading full service/multi-disciplinary Indian law firm with its principal office in Bangalore. The firm since has expanded to legal experts from various fields of legal expertise such as bankruptcy law, litigation & dispute resolution, maritime law, real estate & property law, foreign investment assistance, banking & financial law and intellectual property law."
        />

        <Card
          heading="Our Focus"
          content="Set up with a desire to bring client service into sharper focus, to provide commercially viable legal advice and committed legal representation to our clients across all sectors; the firm has successfully been able to establish its identity outside its origins, dealing with significant depth in complex domestic and international matters."
        />

        <Card
          heading="Our Team"
          content="Our team of well qualified and experienced advocates bring entrepreneurial energy to work together with shared values for greater standards of service with a high degree of professionalism and responsiveness. We find the most relevant and highly tailored solutions to our clients' composite legal challenges."
        />
      </div>
    </div>
  );
};

export default About;
