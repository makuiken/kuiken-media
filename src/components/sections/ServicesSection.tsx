import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import ServiceGallery from "../ServiceGallery";

const ServicesSection = () => {
  const [servicesRef, servicesVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={servicesRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: servicesVisible ? 1 : 0,
        y: servicesVisible ? 0 : 30,
      }}
      transition={{ duration: 0.8 }}
      id="services"
      className="pt-16 lg:pt-20 pb-12 lg:pb-20 bg-gradient-to-b from-black to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6"
        >
          <span className="text-sky-500 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)] [text-shadow:_2px_2px_2px_rgb(14_165_233_/_20%),_-2px_-2px_2px_rgb(245_158_11_/_20%)]">
            Services
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl"
        >
          Solutions for a wide range of{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-amber-500"
          >
            creative media
          </motion.span>{" "}
          and{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-amber-500"
          >
            brand design
          </motion.span>{" "}
          from us and our partners
        </motion.p>
      </div>
      <ServiceGallery />
    </motion.section>
  );
};

export default ServicesSection;
