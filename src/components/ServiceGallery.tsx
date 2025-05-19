import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import OptimizedImage from "./OptimizedImage";
import { transformImageUrl } from "../utils/imageTransform";

interface Service {
  url: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  link?: string;
  isPartner?: boolean;
  alt: string;
}

const ServiceGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Memoize services array to prevent unnecessary re-renders
  const services: Service[] = [
    {
      url: "https://images.unsplash.com/photo-1612151387614-0d29a04ff5f3",
      title: "Sports Broadcasting",
      description:
        "Professional live sports coverage and broadcasting services",
      longDescription:
        "Our sports broadcasting service delivers high-energy, professional coverage of sporting events. We utilize state-of-the-art equipment and experienced operators to capture every moment of the action.",
      features: [
        "Multi-camera live coverage",
        "Instant replay capabilities",
        "Professional commentary integration",
        "Real-time graphics and scoring",
        "High-quality live streaming",
      ],
      alt: "Camera operator filming a sports event",
    },
    {
      url: "https://images.unsplash.com/photo-1576280314550-773c50583407",
      title: "Video Production",
      description: "High-quality video production for various media needs",
      longDescription:
        "From concept to final delivery, our video production service handles all aspects of creating stunning visual content. We combine creative storytelling with technical excellence.",
      features: [
        "Pre-production planning",
        "Professional cinematography",
        "Sound design and mixing",
        "Post-production editing",
        "Color grading",
      ],
      alt: "Professional video production setup with cameras and lighting",
    },
    {
      url: "https://images.unsplash.com/photo-1646334282572-c8b54f66d274",
      title: "Drone Videography",
      description: "Aerial photography and videography services",
      longDescription:
        "Our drone videography service provides breathtaking aerial perspectives for your projects. We operate advanced UAV systems with precision and creativity.",
      features: [
        "4K/6K aerial footage",
        "Licensed drone operators",
        "Dynamic aerial movements",
        "Real estate overviews",
        "Event coverage from above",
      ],
      alt: "Drone camera capturing aerial footage",
    },
    {
      url: "https://images.unsplash.com/photo-1559840644-cf65cc4cd8cd",
      title: "Documentary Filmmaking",
      description: "Compelling storytelling through documentary production",
      longDescription:
        "We craft compelling documentaries that engage audiences and tell powerful stories. Our team handles every aspect from research to final edit.",
      features: [
        "In-depth research",
        "Interview coordination",
        "Archival footage integration",
        "Narrative development",
        "Distribution strategy",
      ],
      alt: "Documentary film production setup",
    },
    {
      url: "https://images.unsplash.com/photo-1597075095308-0b47fc649175",
      title: "Social Media Video Content",
      description: "Engaging social media content creation",
      longDescription:
        "Create engaging content optimized for social media platforms. We help you reach and grow your audience with targeted video content.",
      features: [
        "Platform-specific formatting",
        "Trending content analysis",
        "Regular posting schedules",
        "Engagement optimization",
        "Analytics tracking",
      ],
      alt: "Social media content creation setup",
    },
    {
      url: "https://images.unsplash.com/photo-1732120529252-6829835e7468?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      description: "Professional graphic design services",
      link: "https://montague-design.com",
      isPartner: true,
      alt: "Graphic design workspace with digital tools",
    },
    {
      url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Web Design & Development",
      description: "Custom web design and development solutions",
      link: "https://montague-design.com",
      isPartner: true,
      alt: "Web development workspace with code on screen",
    },
  ];

  const handleHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  const handleServiceClick = (service: Service) => {
    if (!service.isPartner) {
      setSelectedService(service);
    }
  };

  return (
    <>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isClickable = !service.isPartner;

          const content = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Gradient border overlay */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-sky-500/50 via-zinc-800/50 to-amber-500/50 rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-500 ease-in-out" />

              {/* Image container */}
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <div className="absolute inset-[1px] bg-zinc-900 rounded-lg overflow-hidden">
                  <OptimizedImage
                    src={transformImageUrl(service.url, {
                      width: 1920,
                      height: 1080,
                      quality: 80,
                      format: "webp",
                    })}
                    alt={service.alt}
                    width={1920}
                    height={1080}
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                    transition-all duration-500 ease-in-out flex flex-col items-start justify-end p-6"
                  >
                    <AnimatePresence mode="wait">
                      {(isHovered || isMobile) && (
                        <>
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="text-white text-2xl font-bold mb-2 block md:hidden md:group-hover:block"
                          >
                            {service.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.7, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-gray-300 block md:hidden md:group-hover:block"
                          >
                            {service.description}
                          </motion.p>

                          {service.isPartner ? (
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 0.7, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              className="text-sm text-gray-400 mt-2 flex items-center block md:hidden md:group-hover:block"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4 mr-1 opacity-75"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 2a3 3 0 00-3 3v1.343a3 3 0 002.364 2.936l3.246.812a2 2 0 01-.364 3.962l-2.492-.623a2 2 0 00-2.436 1.436l-.182.728a1 1 0 11-1.936-.484l.182-.728a4 4 0 014.872-2.872l2.492.623a4 4 0 00.728-7.924l-3.246-.812a1 1 0 00-.728-1.87A1 1 0 0010 3a1 1 0 00-1 1v1.343a1 1 0 01-.684.949L5.316 7.292a4 4 0 00.728 7.924l3.246.812a1 1 0 00.728 1.87l3.246-.812a3 3 0 002.364-2.936V13a3 3 0 00-3-3H10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Partner Service
                            </motion.p>
                          ) : (
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 0.7, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              className="text-sm text-sky-400 mt-2 flex items-center block md:hidden md:group-hover:block"
                            >
                              Click to learn more
                            </motion.p>
                          )}
                        </>
                      )}
                    </AnimatePresence>

                    {/* External link indicator */}
                    <AnimatePresence>
                      {service.link && (isHovered || isMobile) && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="absolute bottom-6 right-6 w-6 h-6 text-white block md:hidden md:group-hover:block"
                          initial={{ opacity: 0, x: -10, y: 10 }}
                          animate={{ opacity: 0.75, x: 0, y: 0 }}
                          exit={{ opacity: 0, x: -10, y: 10 }}
                          transition={{ duration: 0.3 }}
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          );

          if (service.link) {
            return (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                aria-label={`Learn more about ${service.title}`}
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={index}
              className={`relative group ${
                isClickable ? "cursor-pointer" : ""
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              onClick={() => handleServiceClick(service)}
            >
              {content}
            </div>
          );
        })}
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <div className="relative aspect-video">
                <OptimizedImage
                  src={transformImageUrl(selectedService.url, {
                    width: 1920,
                    height: 1080,
                    quality: 90,
                    format: "webp",
                  })}
                  alt={selectedService.alt}
                  width={1920}
                  height={1080}
                  priority
                  sizes="(max-width: 1536px) 100vw, 1536px"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
              </div>

              <div className="p-6 -mt-12 relative">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedService.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  {selectedService.longDescription}
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {selectedService.features?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-300"
                    >
                      <svg
                        className="w-6 h-6 text-sky-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedService(null)}
                  className="mt-8 w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceGallery;
