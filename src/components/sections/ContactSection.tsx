import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const ContactSection = () => {
  const [contactRef, contactVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={contactRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: contactVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="py-12 lg:py-20 bg-gradient-to-b from-black to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8"
        >
          Get In{" "}
          <span className="text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] [text-shadow:_2px_2px_2px_rgb(245_158_11_/_20%),_-2px_-2px_2px_rgb(14_165_233_/_20%)]">
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto"
        >
          Ready to start your next project? Contact us to discuss how we can
          help bring your <span className="text-sky-500">vision</span> to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:kuikenmedia@gmail.com"
            className="inline-flex items-center w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-black rounded-lg transition-all duration-300 hover:from-amber-400 hover:to-amber-300 transform hover:shadow-lg hover:shadow-amber-500/20 justify-center"
          >
            Email Us
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
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+18622934078"
            className="inline-flex items-center w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg font-semibold bg-gradient-to-r from-sky-500 to-sky-400 text-black rounded-lg transition-all duration-300 hover:from-sky-400 hover:to-sky-300 transform hover:shadow-lg hover:shadow-sky-500/20 justify-center"
          >
            Message Me
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
