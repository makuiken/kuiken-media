import Navigation from "../components/Navigation";
import SocialLinks from "../components/SocialLinks";
import PhotoGallery from "../components/PhotoGallery";
import ServiceGallery from "@/components/ServiceGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <SocialLinks />

      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://storage.cloud.google.com/kuiken-media-bucket/hero-videos/postgame-reactions-final-optimized.webm"
            type="video/webm"
          />
          <source
            src="https://storage.cloud.google.com/kuiken-media-bucket/hero-videos/postgame-reactions-final-optimized.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex items-end pb-24">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in ml-auto max-w-2xl text-right">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gold">
                KUIKEN MEDIA
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Professional media production and broadcasting services for your
                creative needs
              </p>
              <a
                href="#work"
                className="inline-block bg-gold text-black px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <section
        id="services"
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400">
            Solutions for a wide range of creative media
          </p>
        </div>
        <ServiceGallery />
      </section>
      <section
        id="work"
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
          <p className="text-gray-400">
            Explore our latest projects and productions
          </p>
        </div>
        <PhotoGallery />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                We are a creative media production company specializing in
                high-quality video production, live broadcasting, and content
                creation. With years of experience in the industry, we bring
                your vision to life through compelling visual storytelling.
              </p>
              <p className="text-gray-300 text-lg">
                Our team of professionals uses state-of-the-art equipment and
                innovative techniques to deliver exceptional results for every
                project.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Our Work"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to start your next project? Contact us to discuss how we can
            help bring your vision to life.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-gold text-black px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
