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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          className="flex items-center justify-center gap-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:kuikenmedia@gmail.com"
            className="p-3 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/50 transition-colors duration-300"
            aria-label="Email us"
          >
            <svg
              className="w-6 h-6 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+18622934078"
            className="p-3 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-sky-500/50 transition-colors duration-300"
            aria-label="Call us"
          >
            <svg
              className="w-6 h-6 text-sky-500"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/50 shadow-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-left">
            Tell us about your project
          </h3>
          <form
            name="project-inquiry"
            method="POST"
            data-netlify="true"
            className="space-y-4 text-left"
          >
            <input
              type="hidden"
              name="form-name"
              value="project-inquiry"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 bg-black/30 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-black/30 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Project Details
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 bg-black/30 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 text-black font-semibold bg-amber-500 rounded-lg transition-all duration-300 hover:bg-amber-400 transform hover:shadow-lg hover:shadow-amber-500/20"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
