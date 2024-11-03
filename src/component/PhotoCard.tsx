import React, { useState } from "react";

interface Photo {
  id: number;
  src: string;
  category: string;
}

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="overflow-hidden rounded-lg shadow-lg relative cursor-pointer">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <img
        src={photo.src}
        alt={`${photo.category} photo`}
        className={`w-full h-64 object-cover ${isLoading ? 'invisible' : ''}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default PhotoCard;
