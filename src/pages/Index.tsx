import { usePageAnimations } from "../hooks/usePageAnimations";
import Navigation from "../components/Navigation";
import SocialLinks from "../components/SocialLinks";
import PhotoGallery from "../components/PhotoGallery";
import ServiceGallery from "@/components/ServiceGallery";

const Index = () => {
  usePageAnimations();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <SocialLinks />

      {/* Hero Section with Video Background */}
      <div className="relative h-[100svh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://storage.cloud.google.com/kuiken-media-bucket/hero-videos/optimized-kuiken-media-reel.webm"
            type="video/webm"
          />
          <source
            src="https://storage.cloud.google.com/kuiken-media-bucket/hero-videos/postgame-reactions-final-optimized.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex items-end pb-16 sm:pb-24">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto sm:mr-0 max-w-[90vw] sm:max-w-2xl lg:max-w-3xl text-center sm:text-right">
              {" "}
              <h1
                className="hero-title relative text-4xl sm:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4 tracking-tight
               text-sky-500
               drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]
               [text-shadow:_2px_2px_2px_rgb(14_165_233_/_20%),_-2px_-2px_2px_rgb(245_158_11_/_20%)]"
              >
                KUIKEN MEDIA
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 hero-text max-w-xs sm:max-w-none mx-auto sm:mx-0">
                Professional media production and broadcasting services for your
                creative needs
              </p>
              <a
                href="#services"
                className="hero-button inline-flex items-center px-8 py-4 text-lg font-semibold 
           bg-gradient-to-r from-sky-500 to-sky-400
           text-black rounded-lg 
           transition-all duration-500 ease-out
           hover:from-sky-400 hover:to-sky-300
           transform hover:scale-[1.02] hover:-translate-y-1
           hover:shadow-lg hover:shadow-sky-500/30 group"
              >
                View Services
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform duration-500 ease-out group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <section
        id="services"
        className="py-12 sm:py-20 bg-gradient-to-b from-black to-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 overflow-hidden section-container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 section-header">
            <span
              className="text-sky-500
                  drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]
                  [text-shadow:_2px_2px_2px_rgb(14_165_233_/_20%),_-2px_-2px_2px_rgb(245_158_11_/_20%)]"
            >
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg section-subtitle">
            Solutions for a wide range of{" "}
            <span className="text-amber-500">creative media</span>
          </p>
        </div>
        <ServiceGallery />
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 overflow-hidden section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-header">
            Recent{" "}
            <span
              className="text-amber-500
                  drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]
                  [text-shadow:_2px_2px_2px_rgb(245_158_11_/_20%),_-2px_-2px_2px_rgb(14_165_233_/_20%)]"
            >
              Work
            </span>
          </h2>
          <p className="text-gray-400 section-subtitle">
            Explore our latest projects and productions
          </p>
        </div>
        <PhotoGallery />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-20 bg-gradient-to-br from-zinc-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden section-container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 section-header">
            About{" "}
            <span
              className="text-sky-500
                  drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]
                  [text-shadow:_2px_2px_2px_rgb(14_165_233_/_20%),_-2px_-2px_2px_rgb(245_158_11_/_20%)]"
            >
              Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg leading-relaxed about-paragraph font-light">
                With over a decade of experience in{" "}
                <span className="text-amber-500/90">media production</span>,
                I've dedicated my career to capturing moments that matter...
              </p>
              {/* ... other paragraphs ... */}
              <a
                href="#"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg 
                   font-semibold bg-gradient-to-r from-sky-500 to-sky-400 
                   text-black rounded-lg transition-all duration-300 
                   hover:from-sky-400 hover:to-sky-300 transform 
                   hover:scale-105 hover:shadow-lg about-paragraph"
              >
                View Full Portfolio
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden about-image group mt-6 sm:mt-0">
              {/* Modern gradient border overlay */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-sky-500/50 via-zinc-800/50 to-amber-500/50 rounded-lg" />
              <div className="absolute inset-[1px] bg-zinc-900 rounded-lg overflow-hidden">
                {" "}
                {/* Dark background to create border effect */}
                <img
                  src="https://storage.cloud.google.com/kuiken-media-bucket/page-images/YBTV-candid-headshot.jpg"
                  alt="Our Work"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-black to-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 section-header">
            Get In{" "}
            <span
              className="text-amber-500
                  drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]
                  [text-shadow:_2px_2px_2px_rgb(245_158_11_/_20%),_-2px_-2px_2px_rgb(14_165_233_/_20%)]"
            >
              Touch
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto section-subtitle">
            Ready to start your next project? Contact us to discuss how we can
            help bring your <span className="text-sky-500">vision</span> to
            life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="mailto:kuikenmedia@gmail.com"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold 
                 bg-gradient-to-r from-amber-500 to-amber-400
                 text-black rounded-lg transition-all duration-300 
                 hover:from-amber-400 hover:to-amber-300
                 transform hover:scale-105 hover:shadow-lg 
                 hover:shadow-amber-500/20"
            >
              Email Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold 
                 bg-gradient-to-r from-sky-500 to-sky-400
                 text-black rounded-lg transition-all duration-300 
                 hover:from-sky-400 hover:to-sky-300
                 transform hover:scale-105 hover:shadow-lg 
                 hover:shadow-sky-500/20 group"
            >
              Call Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
