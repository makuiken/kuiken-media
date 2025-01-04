import { useState } from "react";

interface Service {
  url: string;
  title: string;
  link?: string; // Optional link property
}

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      url: "https://images.unsplash.com/photo-1612151387614-0d29a04ff5f3?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sports Broadcasting",
    },
    {
      url: "https://images.unsplash.com/photo-1576280314550-773c50583407?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Video Production",
    },
    {
      url: "https://images.unsplash.com/photo-1646334282572-c8b54f66d274?q=80&w=3236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      url: "https://images.unsplash.com/photo-1732120529252-6829835e7468?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      link: "#"
    },
    {
      url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Web Design & Development",
      link: "#",
    },
  ];
  const CardContent = ({
    service,
    index,
  }: {
    service: Service;
    index: number;
  }) => (
    <>
      {/* Gradient border overlay */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-sky-500/50 via-zinc-800/50 to-amber-500/50 rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-500 ease-in-out" />

      {/* Image container */}
      <div className="relative rounded-lg overflow-hidden aspect-video">
        <div className="absolute inset-[1px] bg-zinc-900 rounded-lg overflow-hidden">
          <img
            src={service.url}
            alt={service.title}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Content overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
            transition-all duration-500 ease-in-out flex items-end justify-between p-6`}
          >
            <h3
              className={`text-white text-2xl font-bold transform transition-all duration-500 ease-in-out
              ${
                hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {service.title}
            </h3>

            {/* External link indicator */}
            {service.link && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-6 h-6 text-white opacity-75 transform transition-all duration-500 ease-in-out
                ${
                  hoveredIndex === index
                    ? "opacity-75 translate-y-0 translate-x-0"
                    : "opacity-0 translate-y-4 -translate-x-4"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {services.map((service, index) =>
        service.link ? (
          <a
            key={index}
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent
              service={service}
              index={index}
            />
          </a>
        ) : (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent
              service={service}
              index={index}
            />
          </div>
        )
      )}
    </div>
  );
};

export default PhotoGallery;
