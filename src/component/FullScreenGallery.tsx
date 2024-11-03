import React from "react";

interface Photo {
  id: number;
  src: string;
  category: string;
}

interface FullScreenGalleryProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

const FullScreenGallery: React.FC<FullScreenGalleryProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentPhoto = photos[currentIndex];

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
      onClick={handleBackgroundClick}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl cursor-pointer hover:text-gray-300 z-60"
      >
        &times;
      </button>
      <div
        className="relative w-4/5 h-4/5 flex items-center justify-center "
        onClick={(e) => e.stopPropagation()}
      >
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate("prev")}
            className="absolute left-4 text-white text-6xl cursor-pointer hover:text-gray-600"
          >
            &#8249;
          </button>
        )}
        <img
          src={currentPhoto.src}
          alt={currentPhoto.category}
          className="max-w-full max-h-full object-contain"
        />
        {currentIndex < photos.length - 1 && (
          <button
            onClick={() => onNavigate("next")}
            className="absolute right-4 text-white text-6xl cursor-pointer hover:text-gray-600"
          >
            &#8250;
          </button>
        )}
      </div>
    </div>
  );
};

export default FullScreenGallery;
