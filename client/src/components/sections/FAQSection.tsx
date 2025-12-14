import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes AxiomHost different from other hosting providers?",
      answer: "AxiomHost combines enterprise-grade performance with affordable Nigerian pricing. We offer 100% SSD storage, no price hikes on renewal, 24/7 Nigerian-based support, 99.99% uptime, free website migration, and we're powered by 100% renewable energy."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee on all hosting plans with no questions asked. This gives you risk-free opportunity to try our services."
    },
    {
      question: "Is website migration really free?",
      answer: "Absolutely! Our technical team will migrate your website from your current host with zero downtime. We handle migrations from cPanel, Plesk, DirectAdmin, WordPress, and other popular platforms completely free."
    },
    {
      question: "Will my renewal price increase?",
      answer: "No! We guarantee that the price you pay at signup is the price you'll pay at renewal — now and always. Unlike other hosts, we don't believe in shock price hikes."
    },
    {
      question: "Do you provide free SSL certificates?",
      answer: "Yes, all plans include unlimited free SSL certificates with automatic installation and renewal. Your website will be secure from day one without any extra cost."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.99% uptime with load-balanced, redundant infrastructure featuring UPS, generators, and 24/7 monitoring. Our platform is built for maximum reliability."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes! Our Nigerian-based expert support team is available 24/7 via live chat, email, WhatsApp, and phone with an average 20-minute response time. We're real people, not robots!"
    },
    {
      question: "Can I use my own domain?",
      answer: "Absolutely! You can use a domain you already own or register a new one through AxiomHost. We offer competitive domain pricing and free .com.ng domains with select plans."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4 tracking-[-0.02em]" style={{textRendering: 'geometricPrecision'}}>
            Frequently asked questions
          </h2>
          <p className="text-xl text-slate-600">Everything you need to know about our hosting</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-[#673DE6] shadow-sm shadow-black/5 hover:shadow-md hover:shadow-black/10 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gradient-to-r hover:from-[#673DE6]/5 hover:to-transparent transition-all duration-300"
                data-testid={`faq-button-${index}`}
              >
                <span className="text-left font-semibold text-[#1D1E2C]">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#673DE6] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
