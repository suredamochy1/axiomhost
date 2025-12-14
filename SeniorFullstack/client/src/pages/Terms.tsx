import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service - AxiomHost";
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
                Terms of Service
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
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8 text-[#545775] leading-relaxed">
                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using AxiomHost services, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">2. Service Description</h2>
                  <p>
                    AxiomHost provides web hosting, domain registration, and related services. We reserve the right 
                    to modify, suspend, or discontinue any part of our services at any time with or without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">3. User Responsibilities</h2>
                  <p>Users are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Maintaining the confidentiality of account credentials</li>
                    <li>All activities that occur under their account</li>
                    <li>Ensuring their use of services complies with applicable laws</li>
                    <li>Backing up their data regularly</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">4. Acceptable Use Policy</h2>
                  <p>Users agree not to use our services for:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Illegal activities or content</li>
                    <li>Spam, phishing, or fraudulent activities</li>
                    <li>Distributing malware or viruses</li>
                    <li>Violating intellectual property rights</li>
                    <li>Resource abuse that affects other users</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">5. Payment Terms</h2>
                  <p>
                    All services are billed in advance. Payment is due on the billing date. Failure to pay may result 
                    in service suspension or termination. Refunds are subject to our 30-day money-back guarantee policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">6. Service Level Agreement</h2>
                  <p>
                    We guarantee 99.9% uptime for our hosting services. If we fail to meet this guarantee, service 
                    credits may be provided. Scheduled maintenance is excluded from uptime calculations.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">7. Limitation of Liability</h2>
                  <p>
                    AxiomHost shall not be liable for any indirect, incidental, special, or consequential damages 
                    resulting from the use or inability to use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">8. Termination</h2>
                  <p>
                    We reserve the right to terminate or suspend accounts that violate these terms. Users may cancel 
                    their services at any time through their account dashboard.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">9. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Users will be notified of significant 
                    changes via email. Continued use of services constitutes acceptance of modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-[#1D1E2C] mb-4">10. Contact Information</h2>
                  <p>
                    For questions about these terms, please contact us at support@axiomhost.cloud or visit our 
                    contact page.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


