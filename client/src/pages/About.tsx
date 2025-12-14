import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Award, Users, Globe, Heart, Target, Zap, Shield } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - AxiomHost | Leading Web Hosting Provider in Nigeria";
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AxiomHost",
      "url": "https://axiomhost.cloud",
      "logo": "https://axiomhost.cloud/logo.png",
      "description": "AxiomHost is a leading web hosting provider in Nigeria, offering affordable, fast, and secure hosting solutions.",
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": "AxiomHost Team"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["English"]
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  const values = [
    {
      icon: Zap,
      title: "Speed & Performance",
      description: "We prioritize speed and performance, ensuring your websites load in milliseconds."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Advanced security measures protect your data and your customers' information."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our success. We're here 24/7 to support your journey."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers across Nigeria and West Africa with reliable infrastructure."
    },
    {
      icon: Heart,
      title: "Affordable Pricing",
      description: "Premium hosting services at prices that make sense for businesses of all sizes."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly evolving our technology to stay ahead of industry standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                About AxiomHost
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Empowering businesses and individuals across Nigeria with reliable, affordable, and high-performance web hosting solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black text-[#1D1E2C] mb-6">Our Story</h2>
                <div className="space-y-4 text-[#545775] leading-relaxed">
                  <p>
                    AxiomHost was founded with a simple mission: to make professional web hosting accessible to everyone in Nigeria. 
                    We recognized that many businesses and individuals were paying too much for hosting services that didn't meet their needs.
                  </p>
                  <p>
                    In partnership with Nairahost, we've built a platform that combines enterprise-grade infrastructure with 
                    affordable pricing. Today, we serve thousands of customers, from small businesses to large enterprises, 
                    helping them establish and grow their online presence.
                  </p>
                  <p>
                    Our commitment to excellence, customer support, and continuous innovation has made us one of Nigeria's 
                    most trusted web hosting providers.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#673DE6]/10 to-[#EC1C65]/10 rounded-2xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#673DE6] mb-2">5.8M+</div>
                    <div className="text-sm text-[#545775]">Active Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#EC1C65] mb-2">99.9%</div>
                    <div className="text-sm text-[#545775]">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#00B090] mb-2">24/7</div>
                    <div className="text-sm text-[#545775]">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#673DE6] mb-2">4.5★</div>
                    <div className="text-sm text-[#545775]">Average Rating</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4">Our Values</h2>
              <p className="text-lg text-[#545775] max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#673DE6] to-[#EC1C65] flex items-center justify-center mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-[#1D1E2C] mb-3">{value.title}</h3>
                    <p className="text-[#545775]">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#673DE6] to-[#9F85FF] text-white p-10 rounded-2xl"
              >
                <Target size={48} className="mb-6" />
                <h2 className="text-3xl font-black mb-4">Our Mission</h2>
                <p className="text-white/90 leading-relaxed">
                  To democratize web hosting in Nigeria by providing affordable, reliable, and high-performance 
                  hosting solutions that empower businesses and individuals to succeed online. We believe everyone 
                  deserves access to professional web hosting, regardless of their budget or technical expertise.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#EC1C65] to-[#FF6B9D] text-white p-10 rounded-2xl"
              >
                <Globe size={48} className="mb-6" />
                <h2 className="text-3xl font-black mb-4">Our Vision</h2>
                <p className="text-white/90 leading-relaxed">
                  To become Nigeria's most trusted and innovative web hosting provider, recognized for our 
                  commitment to customer success, technological excellence, and affordable pricing. We envision 
                  a future where every Nigerian business has a strong online presence powered by AxiomHost.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-6">In Partnership With Nairahost</h2>
              <p className="text-lg text-[#545775] max-w-3xl mx-auto mb-8">
                AxiomHost is powered by Nairahost, one of Nigeria's leading web hosting infrastructure providers. 
                This partnership allows us to offer enterprise-grade hosting at affordable prices, bringing 
                world-class hosting technology to businesses across Nigeria and West Africa.
              </p>
              <a
                href="https://nairahost.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white font-bold rounded-full hover:shadow-lg transition-shadow"
              >
                Learn More About Nairahost
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

