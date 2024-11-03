import React from 'react';

interface FlippableTeamCardProps {
  name: string;
  image: string;
  status: string;
  details: string;
}

const FlippableTeamCard: React.FC<FlippableTeamCardProps> = ({ name, image, status, details }) => {
  return (
    <div className="group h-96 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={image} alt={name} />
          <div className="absolute inset-0 bg-black/50 rounded-xl flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white/90">{status}</p>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-600 px-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-lg mt-4">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableTeamCard;
