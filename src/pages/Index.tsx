import { Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/HeroSection";
import LoadingSection from "../components/LoadingSection";

// Lazy load below-fold sections
const ServicesSection = lazy(() =>
  import("../components/sections/ServicesSection").then((module) => ({
    default: module.default,
  }))
);

const WorkSection = lazy(() =>
  import("../components/sections/WorkSection").then((module) => ({
    default: module.default,
  }))
);

const AboutSection = lazy(() =>
  import("../components/sections/AboutSection").then((module) => ({
    default: module.default,
  }))
);

const ContactSection = lazy(() =>
  import("../components/sections/ContactSection").then((module) => ({
    default: module.default,
  }))
);

const Footer = lazy(() =>
  import("../components/Footer").then((module) => ({ default: module.default }))
);

const Index = () => {
  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <SEO
        title="Kuiken Media - Professional Media Production"
        description="Professional media production and broadcasting services. We specialize in video production, broadcasting, and digital media solutions."
        canonical="https://kuikenmedia.com"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://kuikenmedia.com",
          title: "Kuiken Media - Professional Media Production",
          description:
            "Professional media production and broadcasting services.",
          images: [
            {
              url: "https://storage.googleapis.com/kuiken-media-bucket/page-images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Kuiken Media",
            },
          ],
        }}
      />

      {/* Progress bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-sky-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Navigation - Critical UI, always loaded */}
        <Navigation />

        {/* Hero Section - Critical content, eagerly loaded */}
        <HeroSection />

        {/* Below-fold sections - Lazy loaded with suspense */}
        <Suspense
          fallback={
            <LoadingSection className="bg-gradient-to-b from-black to-zinc-900" />
          }
        >
          <ServicesSection />
        </Suspense>

        <Suspense
          fallback={
            <LoadingSection className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
          }
        >
          <WorkSection />
        </Suspense>

        <Suspense
          fallback={
            <LoadingSection className="bg-gradient-to-br from-zinc-900 to-black" />
          }
        >
          <AboutSection />
        </Suspense>

        <Suspense
          fallback={
            <LoadingSection className="bg-gradient-to-b from-black to-zinc-900" />
          }
        >
          <ContactSection />
        </Suspense>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
