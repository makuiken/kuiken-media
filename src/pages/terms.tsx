import { motion } from "motion/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - Kuiken Media"
        description="Read about the terms and conditions for using Kuiken Media's services."
        url="https://kuikenmedia.com/terms"
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
            Terms of Service
          </h1>
          <div className="space-y-6 text-gray-300">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing our website, you agree to be bound by these terms of
                service and agree that you are responsible for compliance with any
                applicable local laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Kuiken Media's website for
                personal, non-commercial transitory viewing only.
              </p>
              <p>
                This is the grant of a license, not a transfer of title, and under
                this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>
                  Attempt to decompile or reverse engineer any software contained
                  on the website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Disclaimer
              </h2>
              <p>
                The materials on Kuiken Media's website are provided on an 'as is'
                basis. Kuiken Media makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Limitations
              </h2>
              <p>
                In no event shall Kuiken Media or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the use
                or inability to use the materials on Kuiken Media's website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on Kuiken Media's website could include
                technical, typographical, or photographic errors. Kuiken Media
                does not warrant that any of the materials on its website are
                accurate, complete, or current.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Links</h2>
              <p>
                Kuiken Media has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such linked
                site. The inclusion of any link does not imply endorsement by
                Kuiken Media of the site. Use of any such linked website is at the
                user's own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:{" "}
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

export default Terms;
