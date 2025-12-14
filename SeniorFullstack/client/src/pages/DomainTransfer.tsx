import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Clock, Shield, Lock, CheckCircle, Zap, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function DomainTransfer() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transferPrices = [
    { domain: ".com", transfer: "9.99", renewal: "19.99" },
    { domain: ".org", transfer: "12.99", renewal: "15.99" },
    { domain: ".net", transfer: "14.99", renewal: "17.99" },
    { domain: ".fr", transfer: "7.99", renewal: "12.99" },
    { domain: ".de", transfer: "4.99", renewal: "13.99" },
    { domain: ".in", transfer: "6.99", renewal: "9.99" },
    { domain: ".nl", transfer: "0.99", renewal: "9.99" },
    { domain: ".eu", transfer: "6.99", renewal: "7.99" },
  ];

  const steps = [
    {
      number: 1,
      title: "Enter the domain name",
      description: "Simply enter your domain name and click on transfer."
    },
    {
      number: 2,
      title: "Prepare domain for transfer",
      description: "Unlock the domain you want to transfer at your current registrar."
    },
    {
      number: 3,
      title: "Proceed with purchase",
      description: "Enter the EPP code or domain transfer authorization code and confirm transfer."
    },
    {
      number: 4,
      title: "Confirm transfer email",
      description: "You will receive a confirmation letter from your domain registry."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "No time lost",
      description: "Most domain transfers include a 1 year renewal to your domain's current expiration date."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Easy domain management",
      description: "AxiomHost offers a wide variety of tools to satisfy advanced user and website developer needs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Free privacy protection",
      description: "Free WHOIS privacy protection is included with every eligible domain registration."
    }
  ];

  const requirements = [
    "Make sure it has been more than 60 days since the domain registration or last transfer.",
    "Check your domain status, it should not be in Pending Delete or Redemption status.",
    "Make sure you have access to the domain's EPP code.",
    "Your WHOIS privacy protection should be disabled before the transfer process."
  ];

  const faqs = [
    {
      question: "What is a domain name transfer?",
      answer: "A domain name transfer means moving your domain registration from your current registrar to AxiomHost. Doing so simply shifts who manages your domain settings and renewals – your website, email, and ownership details remain unchanged."
    },
    {
      question: "Why should I transfer my domain to AxiomHost?",
      answer: "Transferring your domain to AxiomHost allows you to manage your hosting and domains from a single user-friendly dashboard. Our competitive pricing ensures transparent rates and lower renewal fees, so there are no surprises. Plus, with 24/7 expert support, you'll have help whenever you need it."
    },
    {
      question: "How do I transfer a domain?",
      answer: "First, check if you're eligible to initiate a domain transfer. In most cases, domains should have been registered for at least 60 days before you can move them. If you are, unlock the domain from your current registrar's dashboard, get the authorization code (EPP or transfer code), then enter your domain name on our transfer page and provide the authorization code. You may need to verify the transfer request via email."
    },
    {
      question: "How long will it take to transfer a domain?",
      answer: "Transferring a domain to AxiomHost takes up to seven days. It can be faster if your current registrar releases the domain quickly and you promptly confirm the transfer request in your email. Your website and email will work normally while we handle the transfer process in the background."
    },
    {
      question: "Can I transfer a domain for free?",
      answer: "No, domain transfers aren't free. This process involves multiple parties, including the Internet Corporation for Assigned Names and Numbers (ICANN) and various domain registries, which influence the overall cost. For most generic top-level domains (gTLDs) like .com, .net, or .org, the transfer fee usually includes a one-year renewal of your domain registration."
    },
    {
      question: "Can I use a domain name without hosting?",
      answer: "Yes, you can use a domain name without hosting. A typical use case is creating professional email addresses (like you@businessname.com) and redirecting the domain to an existing website, such as a social media page. You can also reserve the domain for future use through domain parking. This is a good way to protect your brand by preventing others from claiming the name before you do."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#673DE6] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#00D4AA] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00D4AA] to-[#673DE6] bg-clip-text text-transparent" data-testid="heading-transfer-title">
              We Made Domain Transfer Easy
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto" data-testid="text-transfer-subtitle">
              Move your domain to AxiomHost in 4 simple steps. Keep your website and email running smoothly.
            </p>
          </motion.div>

          {/* Transfer Input */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter the domain you want to transfer"
                className="w-full px-6 py-4 rounded-lg bg-white text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#673DE6] text-lg"
                data-testid="input-domain-transfer"
              />
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#673DE6] to-[#00D4AA] hover:shadow-lg text-white border-0"
                data-testid="button-transfer-domain"
              >
                Transfer
              </Button>
            </div>
            <p className="text-center text-slate-400 text-sm mt-4" data-testid="text-find-domain">
              Looking for a new domain name? <span className="text-[#00D4AA] cursor-pointer hover:underline">Try domain checker</span>
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-steps">
            Transfer a Domain Name in 4 Simple Steps
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                data-testid={`step-${i + 1}`}
              >
                <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 h-full">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r from-[#673DE6] to-[#00D4AA] rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-3 mt-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-10 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-why-transfer">
            Why Transfer Domains to AxiomHost?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 text-center"
                data-testid={`benefit-${i}`}
              >
                <div className="text-[#00D4AA] mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-pricing">
            Check Our Domain Transfer Prices
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transferPrices.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
                data-testid={`price-${item.domain}`}
              >
                <h3 className="text-2xl font-bold text-[#00D4AA] mb-4">{item.domain}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Transfer Price</p>
                    <p className="text-2xl font-bold">US${item.transfer}</p>
                  </div>
                  <div className="border-t border-slate-700/50 pt-3">
                    <p className="text-xs text-slate-400 mb-1">Renewal Price</p>
                    <p className="text-lg font-semibold">US${item.renewal}/year</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-6 lg:px-10 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-requirements">
            To Ensure a Successful Domain Transfer
          </h2>

          <div className="space-y-4">
            {requirements.map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 flex items-start gap-4"
                data-testid={`requirement-${i}`}
              >
                <CheckCircle className="w-6 h-6 text-[#00D4AA] flex-shrink-0 mt-1" />
                <p className="text-slate-300">{req}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-faqs">
            Domain Transfer FAQs
          </h2>

          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                onMouseEnter={() => setExpandedFaq(i)}
                onMouseLeave={() => setExpandedFaq(null)}
                className="rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-[#673DE6]/50 transition-all cursor-pointer overflow-hidden"
                data-testid={`faq-${i}`}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex-1">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#00D4AA] flex-shrink-0 ml-4" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-slate-700/50 pt-4">
                        <p className="text-slate-300 text-base leading-relaxed" data-testid={`faq-answer-${i}`}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#673DE6] to-[#00D4AA]"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="heading-cta">
              Ready to Transfer Your Domain?
            </h2>
            <p className="text-xl text-slate-300 mb-8" data-testid="text-cta">
              Get your domain transferred to AxiomHost in just a few minutes. Enjoy easy management and competitive pricing.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] hover:shadow-lg hover:shadow-[#673DE6]/50 text-white border-0 text-lg px-8"
              data-testid="button-cta-primary"
            >
              Start Your Domain Transfer <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
