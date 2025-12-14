import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy - AxiomHost";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/90">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 text-[#545775] leading-relaxed"
            >
              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name, email address, phone number, and billing information</li>
                  <li>Account credentials and preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Support communications and service usage data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">2. How We Use Your Information</h2>
                <p>We use collected information to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze usage patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Service providers who assist in operating our services</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">5. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and 
                  hold certain information. You can instruct your browser to refuse all cookies or to 
                  indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">7. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and 
                  comply with legal obligations. When we no longer need your information, we securely delete it.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">8. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 18. We do not knowingly collect 
                  personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">9. Changes to Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">10. Contact Us</h2>
                <p>
                  If you have questions about this privacy policy, please contact us at 
                  privacy@axiomhost.cloud or visit our contact page.
                </p>
              </section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


