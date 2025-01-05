import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import PhotoGallery from "../PhotoGallery";

const WorkSection = () => {
  const [workRef, workVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={workRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: workVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      id="work"
      className="py-12 lg:py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
        >
          Recent{" "}
          <span className="text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] [text-shadow:_2px_2px_2px_rgb(245_158_11_/_20%),_-2px_-2px_2px_rgb(14_165_233_/_20%)]">
            Work
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base lg:text-lg"
        >
          Explore our latest projects and productions
        </motion.p>
      </div>
      <PhotoGallery />
    </motion.section>
  );
};

export default WorkSection;
