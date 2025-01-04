import { motion } from "motion/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "../components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Kuiken Media"
        description="Learn about how Kuiken Media protects and handles your personal information."
        url="https://kuikenmedia.com/privacy"
      />
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        >
          <h1 className="text-4xl font-bold mb-8 text-sky-500">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-gray-300">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to Kuiken Media. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                will inform you about how we look after your personal data when
                you visit our website and tell you about your privacy rights and
                how the law protects you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Information We Collect
              </h2>
              <p>
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together as
                follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Data: includes first name, last name</li>
                <li>
                  Contact Data: includes email address and telephone numbers
                </li>
                <li>
                  Technical Data: includes internet protocol (IP) address,
                  browser type and version, time zone setting and location,
                  browser plug-in types and versions, operating system and
                  platform
                </li>
                <li>
                  Usage Data: includes information about how you use our website
                  and services
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p>
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide you with the services you have requested</li>
                <li>To respond to your inquiries</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Security
              </h2>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used, or
                accessed in an unauthorized way, altered, or disclosed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Your Rights
              </h2>
              <p>
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data, including the
                right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at:{" "}
                <a
                  href="mailto:kuikenmedia@gmail.com"
                  className="text-sky-400 hover:text-sky-300"
                >
                  kuikenmedia@gmail.com
                </a>
              </p>
            </section>
          </div>
        </motion.main>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
