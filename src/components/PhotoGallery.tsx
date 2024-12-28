import { useState } from 'react';

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      title: 'Studio Setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'Production',
    },
    {
      url: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      title: 'Post Production',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
      title: 'Live Broadcasting',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg aspect-video"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-white text-2xl font-bold">{photo.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;