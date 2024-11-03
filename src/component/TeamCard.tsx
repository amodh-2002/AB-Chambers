import React from 'react';

interface TeamCardProps {
  name: string;
  image: string;
  status: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, image, status }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{status}</p>
    </div>
  );
};

export default TeamCard;
