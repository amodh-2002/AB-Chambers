import React from "react";
import FlippableTeamCard from "../component/FlippableTeamCard";

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "John Doe",
      image: "/conf1.jpg",
      status: "Senior Lawyer",
      details:
        "John specializes in corporate law with over 15 years of experience.",
    },
    {
      name: "Jane Smith",
      image: "/conf2.jpg",
      status: "Associate Lawyer",
      details:
        "Jane is an expert in family law and has been with the firm for 5 years.",
    },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <FlippableTeamCard
            key={index}
            name={member.name}
            image={member.image}
            status={member.status}
            details={member.details}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
