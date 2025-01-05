import { useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import SocialLinks from "../components/SocialLinks";
import PhotoGallery from "../components/PhotoGallery";
import ServiceGallery from "@/components/ServiceGallery";
import HeroVideo from "@/components/HeroVideo";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Intersection observers for different sections
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [workRef, workVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactRef, contactVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // Preload critical assets
  useEffect(() => {
    const preloadAssets = async () => {
      const criticalImages = [
        // Add your critical image URLs here
      ];

      criticalImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadAssets();
  }, []);
  return (
    <>
      <SEO
        title="Kuiken Media - Professional Media Production"
        description="Professional media production and broadcasting services. We specialize in video production, broadcasting, and digital media solutions."
        url="https://kuikenmedia.com"
      />
      {/* Progress bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-sky-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="hidden md:block">
          <SocialLinks />
        </div>

        {/* Hero Section */}
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
              <div
                className="ml-auto max-w-[90vw] sm:max-w-2xl lg:max-w-3xl 
                text-right space-y-3 sm:space-y-6"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: heroVisible ? 1 : 0,
                    y: heroVisible ? 0 : 50,
                  }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="hero-title relative 
                    text-2xl sm:text-6xl lg:text-8xl 
                    font-bold tracking-tight
                    text-sky-500 
                    drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]
                    [text-shadow:_2px_2px_2px_rgb(14_165_233_/_20%),_-2px_-2px_2px_rgb(245_158_11_/_20%)]"
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
                  className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-4 
                    text-sm sm:text-lg font-semibold 
                    bg-gradient-to-r from-sky-500 to-sky-400 
                    text-black rounded-lg transition-all duration-500 ease-out
                    hover:from-sky-400 hover:to-sky-300 
                    transform hover:scale-[1.02] hover:-translate-y-1 
                    hover:shadow-lg hover:shadow-sky-500/30 group"
                >
                  View Services
                  <svg
                    className="w-3 h-3 sm:w-5 sm:h-5 ml-2 transform transition-transform 
                      duration-500 ease-out group-hover:translate-x-2"
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

          {/* Mobile-only social links */}
          <div
            className="block sm:hidden fixed bottom-0 left-0 right-0 
            bg-gradient-to-t from-black via-black/80 to-transparent 
            backdrop-blur-sm py-4 z-40"
          >
            <SocialLinks className="flex justify-center space-x-6" />
          </div>
        </motion.div>

        {/* Services Section */}
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
              <span
                className="text-sky-500 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]
                [text-shadow:_2px_2px_2px_rgb(14_165_233_/_20%),_-2px_-2px_2px_rgb(245_158_11_/_20%)]"
              >
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ServiceGallery />
          </motion.div>
        </motion.section>

        {/* Work Section */}
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
              <span
                className="text-amber-500
                drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]
                [text-shadow:_2px_2px_2px_rgb(245_158_11_/_20%),_-2px_-2px_2px_rgb(14_165_233_/_20%)]"
              >
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <PhotoGallery />
          </motion.div>
        </motion.section>

        {/* About Section */}
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
              <span
                className="text-sky-500 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)] 
                [text-shadow:_2px_2px_2px_rgb(14_165_233_/_20%),_-2px_-2px_2px_rgb(245_158_11_/_20%)]"
              >
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
                  <span className="text-amber-500/90 font-bold">
                    Caleb Kuiken
                  </span>
                  , a multimedia professional passionate about using video and
                  digital media to tell powerful stories. My experience includes
                  working with top-tier organizations and producing
                  award-winning content that engages audiences and delivers
                  results.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-sm sm:text-base lg:text-lg leading-relaxed font-light"
                >
                  I hold a degree in Communications with a minor in Broadcasting
                  and Journalism from Messiah University, where I developed a
                  strong foundation in multimedia storytelling and digital
                  marketing. I've dedicated my career to capturing{" "}
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
                  className="inline-flex items-center px-6 py-3 text-sm sm:text-base
                    font-semibold bg-gradient-to-r from-sky-500 to-sky-400 
                    text-black rounded-lg transition-all duration-300 
                    hover:from-sky-400 hover:to-sky-300 transform 
                    hover:shadow-lg"
                >
                  View Full Portfolio
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
                whileHover={{ scale: 1.02 }}
                className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden group"
              >
                {/* Modern gradient border overlay */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-sky-500/50 via-zinc-800/50 to-amber-500/50 rounded-lg" />
                <div className="absolute inset-[1px] bg-zinc-900 rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/kuiken-media-bucket/page-images/YBTV-candid-headshot.jpg"
                    alt="Caleb Kuiken"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
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
              <span
                className="text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] 
                [text-shadow:_2px_2px_2px_rgb(245_158_11_/_20%),_-2px_-2px_2px_rgb(14_165_233_/_20%)]"
              >
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
              help bring your <span className="text-sky-500">vision</span> to
              life.
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
                className="inline-flex items-center 
                  w-full sm:w-auto
                  px-4 sm:px-8 py-2 sm:py-4 
                  text-sm sm:text-lg font-semibold 
                  bg-gradient-to-r from-amber-500 to-amber-400
                  text-black rounded-lg transition-all duration-300 
                  hover:from-amber-400 hover:to-amber-300
                  transform hover:shadow-lg 
                  hover:shadow-amber-500/20
                  justify-center"
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
                className="inline-flex items-center 
                  w-full sm:w-auto
                  px-4 sm:px-8 py-2 sm:py-4 
                  text-sm sm:text-lg font-semibold 
                  bg-gradient-to-r from-sky-500 to-sky-400
                  text-black rounded-lg transition-all duration-300 
                  hover:from-sky-400 hover:to-sky-300
                  transform hover:shadow-lg 
                  hover:shadow-sky-500/20
                  justify-center"
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

        <Footer />
      </div>
    </>
  );
};

export default Index;
