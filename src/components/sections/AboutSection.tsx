import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import OptimizedImage from "../OptimizedImage";
import { transformImageUrl } from "../../utils/imageTransform";

const AboutSection = () => {
  const [aboutRef, aboutVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: aboutVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-12 lg:py-20 bg-gradient-to-br from-zinc-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8"
        >
          About{" "}
          <span className="text-sky-500 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)] [text-shadow:_2px_2px_2px_rgb(14_165_233_/_20%),_-2px_-2px_2px_rgb(245_158_11_/_20%)]">
            Me
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed font-light"
            >
              Hi, I'm{" "}
              <span className="text-amber-500/90 font-bold">Caleb Kuiken</span>,
              a multimedia professional passionate about using video and digital
              media to tell powerful stories. My experience includes working
              with top-tier organizations and producing award-winning content
              that engages audiences and delivers results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed font-light"
            >
              I hold a degree in Communications with a minor in Broadcasting and
              Journalism from Messiah University, where I developed a strong
              foundation in multimedia storytelling and digital marketing. I've
              dedicated my career to capturing{" "}
              <span className="text-amber-500/90 font-bold">
                moments that matter
              </span>
              ...
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="https://calebkuikenportfolio.my.canva.site/broadcast-creative-video"
              className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold bg-gradient-to-r from-sky-500 to-sky-400 text-black rounded-lg transition-all duration-300 hover:from-sky-400 hover:to-sky-300 transform hover:shadow-lg"
            >
              View Full Portfolio
              <svg
                className="w-4 h-4 ml-2"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden group"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-sky-500/50 via-zinc-800/50 to-amber-500/50 rounded-lg" />
            <div className="absolute inset-[1px] bg-zinc-900 rounded-lg overflow-hidden">
              <OptimizedImage
                src={transformImageUrl(
                  "https://storage.googleapis.com/kuiken-media-bucket/page-images/YBTV-candid-headshot.jpg",
                  {
                    width: 800,
                    quality: 80,
                    format: "webp",
                  }
                )}
                alt="Caleb Kuiken"
                width={800}
                height={600}
                priority={false}
                className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
