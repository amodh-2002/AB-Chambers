import React from 'react';
import { IconType } from 'react-icons';

interface PracticeAreaCardProps {
  title: string;
  Icon: IconType;
  onClick: () => void;
}

const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({ title, Icon, onClick }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <Icon className="text-4xl text-blue-600 mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

export default PracticeAreaCard;
