import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Search, Shield, Globe, Clock, CheckCircle, ArrowRight, Zap, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function DomainSearch() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const domains = [
    { extension: ".com", regular: "19.99", sale: "0.01", savings: "99%" },
    { extension: ".online", regular: "34.99", sale: "0.99", savings: "97%" },
    { extension: ".shop", regular: "34.99", sale: "0.99", savings: "97%" },
    { extension: ".pro", regular: "28.99", sale: "2.99", savings: "90%" },
    { extension: ".net", regular: "17.99", sale: "11.99", savings: "33%" },
    { extension: ".blog", regular: "29.99", sale: "1.99", savings: "93%" },
    { extension: ".cloud", regular: "25.99", sale: "1.99", savings: "92%" },
    { extension: ".io", regular: "67.99", sale: "31.99", savings: "53%" },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Registrar",
      description: "ICANN-accredited with 300+ domain extensions"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Activation",
      description: "Get your domain live in seconds"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Easy Management",
      description: "Simple DNS management and full control"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Expert support available anytime"
    }
  ];

  const tips = [
    {
      title: "Keep it short",
      description: "Long website names are hard to read and remember – try to keep it under three words."
    },
    {
      title: "Less is more",
      description: "Keep it simple – avoid hyphens, numbers, slang, and easily misspelled words."
    },
    {
      title: "Include your brand",
      description: "Try to include your brand name or target keywords for your niche in your site URL."
    },
    {
      title: "Check availability",
      description: "Do a search to see if a name is available – then make sure it hasn't been trademarked."
    },
    {
      title: "Think locally",
      description: ".com TLDs can be unavailable. Consider country-specific extensions like .co.uk or .us"
    },
    {
      title: "Act fast",
      description: "The best website names are quickly taken. Don't miss out – buy your domain names today."
    }
  ];

  const faqs = [
    {
      question: "What is a domain name?",
      answer: "A domain name is similar to a home address in real life. It's how people find your site online – they enter the domain in a web browser or search engine. Hostinger.com is a domain, just like Google.com and Facebook.com. Ideally, a domain should be registered under the same name as the brand it's representing."
    },
    {
      question: "Why do I need to buy a domain name?",
      answer: "It's important to buy domain names to help potential visitors find your site. Without assigned website names, we would only be able to access them by entering their IP address, which is more difficult to remember. To find a good name while performing a domain search, you can include keywords or brand names."
    },
    {
      question: "What is a subdomain, and how does it work?",
      answer: "A subdomain is a part of your website that lives under your main domain, like blog.yoursite.com. It helps you create separate sections for things like a blog, store, or help page without needing a new domain."
    },
    {
      question: "How to pick the right website name?",
      answer: "The best practices for buying domain names include: Keep it short (two to three words is ideal), Keep it simple (avoid long or complex words), Use keywords (include a keyword from your niche), Avoid numbers (they can be confusing), and Use your brand name for maximum recognition. Enter it into our domain search tool to check if it's available."
    },
    {
      question: "Once I register a domain, can I change it later?",
      answer: "No, you cannot change a domain name once it's registered. However, you can register a new one and redirect your website to it. This means when someone visits your old domain, they'll be sent to the new one automatically."
    },
    {
      question: "What is privacy protection?",
      answer: "Domain privacy protection is sometimes called RDAP (previously known as WHOIS) protection because it hides certain information about a domain name's owner that would otherwise be discoverable through a public RDAP lookup. Privacy protection lets the domain registrar replace your name, address, phone number, and email address with generic, non-identifiable information."
    },
    {
      question: "How long does a domain name registration last?",
      answer: "The minimum registration period for domain names is one year. With AxiomHost, you can also register .com, .net, .org, and other domains for up to three years. Some domains, like .ai, require a minimum of two years. To keep your website online without interruption, we recommend enabling automatic renewal."
    },
    {
      question: "What are TLDs, ccTLDs, and gTLDs?",
      answer: "TLD stands for top-level domain (like .com). ccTLD stands for country-code top-level domain used to identify a particular country (.co.uk, .de, .mx, .fr). gTLD stands for generic top-level domain, which includes .com, .org, .net, and newer extensions like .online, .xyz, and .name."
    },
    {
      question: "How long does it take to register a domain name?",
      answer: "AxiomHost offers instant activation, so you can be sure that your desired domain name will be ready to use right away. The process is quick – it only takes a couple of minutes to go from checking domain name availability to successfully registering it."
    },
    {
      question: "I already purchased a domain name. Can I transfer it to AxiomHost?",
      answer: "Yes. When you buy a domain, it belongs to you – and not the domain registrar. It's easy to use our domain transfer service to switch to AxiomHost. We'll walk you through every step of the process."
    },
    {
      question: "What's the difference between a domain name and web hosting?",
      answer: "Think of your domain name as your home address and web hosting as the physical structure, like a house. A domain can help people find your site; hosting is the online space to store your website data. To publish a website, you'll need both domain and hosting services."
    },
    {
      question: "What are premium domain names and why are they more expensive?",
      answer: "Premium domain names are high-value domains that are short, easy to remember, or include popular keywords (like media.tech or store.online). Due to their market value, they cost more upfront and often have higher renewal fees."
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00D4AA] to-[#673DE6] bg-clip-text text-transparent" data-testid="heading-domain-title">
              Find Your Perfect Domain
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto" data-testid="text-domain-subtitle">
              Choose from 300+ domain extensions. Register, manage, and build your online presence with ease.
            </p>
          </motion.div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter domain name..."
                className="w-full px-6 py-4 rounded-lg bg-white text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#673DE6] text-lg"
                data-testid="input-domain-search"
              />
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#673DE6] to-[#00D4AA] hover:shadow-lg text-white border-0"
                data-testid="button-search-domain"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Domains */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-popular-domains">
            Choose Your Domain Extension
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-[#673DE6]/50 transition-all text-center"
                data-testid={`domain-card-${domain.extension}`}
              >
                <h3 className="text-2xl font-bold text-[#00D4AA] mb-3">{domain.extension}</h3>
                <div className="mb-3">
                  <div className="text-sm text-slate-400 line-through">US${domain.regular}</div>
                  <div className="text-2xl font-bold">US${domain.sale}</div>
                  <div className="text-xs text-[#10B981] font-semibold">SAVE {domain.savings}</div>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white border-0"
                  data-testid={`button-register-${domain.extension}`}
                >
                  Register
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-10 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-benefits">
            Why Register with AxiomHost?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Privacy Protection */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6" data-testid="heading-privacy">
              Protect Your Privacy – For Free
            </h2>
            <p className="text-xl text-slate-300 mb-8" data-testid="text-privacy-desc">
              When you register a domain, your personal information is usually available on public databases. With AxiomHost, privacy protection is included with every eligible domain registration. Keep your personal information hidden from third parties.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] hover:shadow-lg text-white border-0"
              data-testid="button-privacy-cta"
            >
              Get Free Privacy Protection <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-6 lg:px-10 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-tips">
            6 Tips to Remember Before You Buy
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
                data-testid={`tip-${i}`}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#00D4AA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                    <p className="text-slate-400 text-sm">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#673DE6] to-[#00D4AA]"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 text-center"
          >
            <h2 className="text-4xl font-bold mb-6" data-testid="heading-transfer">
              Already Have a Domain?
            </h2>
            <p className="text-xl text-slate-300 mb-8" data-testid="text-transfer-desc">
              Transfer your domain to AxiomHost in just a few clicks. Keep using it while we handle the technical setup.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] hover:shadow-lg text-white border-0"
              data-testid="button-transfer"
            >
              Transfer Your Domain <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 lg:px-10 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-faqs">
            Frequently Asked Questions
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

      <Footer />
    </div>
  );
}
