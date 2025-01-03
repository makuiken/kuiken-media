import { useState } from "react";

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      url: "https://images.unsplash.com/photo-1612151387614-0d29a04ff5f3?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sports Broadcasting",
    },
    {
      url: "https://images.unsplash.com/flagged/photo-1579371032804-1db18e211dbd?q=80&w=3168&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Video Production",
    },
    {
      url: "https://images.unsplash.com/photo-1650622720587-bf2de37bb212?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Drone Videography",
    },
    {
      url: "https://images.unsplash.com/photo-1559840644-cf65cc4cd8cd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Documentary Filmmaking",
    },
    {
      url: "https://images.unsplash.com/photo-1597075095308-0b47fc649175?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Social Media Video Content",
    },
    {
      url: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Wedding Videography",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Gradient border overlay */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-sky-500/50 via-zinc-800/50 to-amber-500/50 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Image container */}
          <div className="relative rounded-lg overflow-hidden aspect-video">
            <div className="absolute inset-[1px] bg-zinc-900 rounded-lg overflow-hidden">
              <img
                src={service.url}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Content overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 flex items-end p-6 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-white text-2xl font-bold transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-2">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
