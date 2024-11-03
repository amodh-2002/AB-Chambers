import React, { useState, useEffect } from "react";
import PhotoCard from "../component/PhotoCard";
import FullScreenGallery from "../component/FullScreenGallery";

interface Photo {
  id: number;
  src: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filter, setFilter] = useState("All Photos");
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Simulating fetching photos from a folder
    const fetchedPhotos: Photo[] = [
      { id: 1, src: "/main1.jpg", category: "Main Cabin" },
      { id: 2, src: "/main2.jpg", category: "Main Cabin" },
      { id: 3, src: "/meeting1.jpg", category: "Meeting Rooms" },
      { id: 4, src: "/meeting2.jpg", category: "Meeting Rooms" },
      { id: 5, src: "/conf1.jpg", category: "Conference Room" },
      { id: 6, src: "/conf2.jpg", category: "Conference Room" },
      { id: 7, src: "/waiting1.jpg", category: "Waiting Lounge" },
      { id: 8, src: "/waiting2.jpg", category: "Waiting Lounge" },
      { id: 9, src: "/working1.jpg", category: "Working Cubicle" },
      { id: 10, src: "/working2.jpg", category: "Working Cubicle" },
    ];
    setPhotos(fetchedPhotos);
  }, []);

  const filterButtons = [
    "All Photos",
    "Conference Room",
    "Main Cabin",
    "Meeting Rooms",
    "Waiting Lounge",
    "Working Cubicle",
  ];

  const filteredPhotos =
    filter === "All Photos"
      ? photos
      : photos.filter((photo) => photo.category === filter);

  const openFullScreen = (index: number) => {
    setFullScreenIndex(index);
  };

  const closeFullScreen = () => {
    setFullScreenIndex(null);
  };

  const navigateFullScreen = (direction: "prev" | "next") => {
    if (fullScreenIndex === null) return;
    const newIndex =
      direction === "prev" ? fullScreenIndex - 1 : fullScreenIndex + 1;
    if (newIndex >= 0 && newIndex < filteredPhotos.length) {
      setFullScreenIndex(newIndex);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">OUR PHOTO GALLERY</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filterButtons.map((button) => (
          <button
            key={button}
            onClick={() => setFilter(button)}
            className={`px-4 py-2 rounded-full ${
              filter === button
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {button}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openFullScreen(index)}
            className="cursor-pointer"
          >
            <PhotoCard photo={photo} />
          </div>
        ))}
      </div>

      {fullScreenIndex !== null && (
        <FullScreenGallery
          photos={filteredPhotos}
          currentIndex={fullScreenIndex}
          onClose={closeFullScreen}
          onNavigate={navigateFullScreen}
        />
      )}
    </div>
  );
};

export default Gallery;
