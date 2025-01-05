import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import HeroVideo from "../HeroVideo";
import SocialLinks from "../SocialLinks";

const HeroSection = () => {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <motion.div
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: heroVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroVideo />
      <div className="relative w-full flex items-end pb-8 sm:pb-16 lg:pb-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="ml-auto max-w-[90vw] sm:max-w-2xl lg:max-w-3xl text-right space-y-3 sm:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: heroVisible ? 1 : 0,
                y: heroVisible ? 0 : 50,
              }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="hero-title relative text-2xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-sky-500"
            >
              KUIKEN MEDIA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: heroVisible ? 1 : 0,
                y: heroVisible ? 0 : 30,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-xl lg:text-2xl text-gray-300"
            >
              Professional media production and broadcasting services
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: heroVisible ? 1 : 0,
                y: heroVisible ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              href="#services"
              className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg font-semibold bg-gradient-to-r from-sky-500 to-sky-400 text-black rounded-lg"
            >
              View Services
              <svg
                className="w-3 h-3 sm:w-5 sm:h-5 ml-2 transform transition-transform duration-500 ease-out group-hover:translate-x-2"
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
            </motion.a>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <SocialLinks />
      </div>

      {/* Mobile-only social links */}
      <div className="block sm:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-sm py-4 z-40">
        <SocialLinks className="flex justify-center space-x-6" />
      </div>
    </motion.div>
  );
};

export default HeroSection;
