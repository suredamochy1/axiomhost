import { useEffect } from "react";
import { useLocation } from "wouter";
import { Check, Cloud, Zap, Shield, Globe, Database, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CloudHosting() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Cloud Hosting in Nigeria - AxiomHost | Scalable & Reliable";
    window.scrollTo(0, 0);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Cloud Hosting",
      "description": "Scalable cloud hosting solutions in Nigeria with AxiomHost. High-performance, reliable, and affordable cloud infrastructure.",
      "brand": {
        "@type": "Brand",
        "name": "AxiomHost"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "NGN",
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  const plans = [
    {
      name: "Cloud Starter",
      price: "4,500",
      originalPrice: "6,000",
      features: [
        "2 vCPU Cores",
        "2 GB RAM",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "99.9% Uptime SLA",
        "24/7 Support"
      ]
    },
    {
      name: "Cloud Business",
      price: "8,500",
      originalPrice: "12,000",
      popular: true,
      features: [
        "4 vCPU Cores",
        "4 GB RAM",
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "99.9% Uptime SLA",
        "Priority Support",
        "Free CDN",
        "Auto Scaling"
      ]
    },
    {
      name: "Cloud Enterprise",
      price: "15,000",
      originalPrice: "22,000",
      features: [
        "8 vCPU Cores",
        "8 GB RAM",
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "99.9% Uptime SLA",
        "Priority Support",
        "Free CDN",
        "Auto Scaling",
        "Dedicated IP",
        "Advanced Monitoring"
      ]
    }
  ];

  const features = [
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Easily scale your resources up or down based on your needs. No downtime, no hassle."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "NVMe SSD storage and optimized servers ensure your websites load in milliseconds."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced DDoS protection, firewalls, and automated security updates keep your data safe."
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Content delivered from servers closest to your visitors for optimal performance worldwide."
    },
    {
      icon: Database,
      title: "Auto Backups",
      description: "Daily automated backups with 30-day retention. Restore your data with one click."
    },
    {
      icon: Check,
      title: "99.9% Uptime",
      description: "Guaranteed uptime with redundant infrastructure and 24/7 monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Cloud Hosting in Nigeria
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Scalable, reliable, and high-performance cloud hosting solutions. Perfect for growing businesses and high-traffic websites.
              </p>
              <Button
                size="lg"
                onClick={() => setLocation("/pricing")}
                className="bg-white text-[#673DE6] hover:bg-slate-50 h-14 px-8 text-lg rounded-full font-bold"
              >
                View Plans <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4">
                Why Choose AxiomHost Cloud Hosting?
              </h2>
              <p className="text-lg text-[#545775] max-w-2xl mx-auto">
                Enterprise-grade cloud infrastructure at affordable prices
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#673DE6] to-[#EC1C65] flex items-center justify-center mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-[#1D1E2C] mb-3">{feature.title}</h3>
                    <p className="text-[#545775]">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4">
                Cloud Hosting Plans
              </h2>
              <p className="text-lg text-[#545775]">
                Choose the perfect plan for your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                    plan.popular ? "ring-2 ring-[#673DE6] scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-[#673DE6] text-white text-center py-2 rounded-t-2xl -mt-8 -mx-8 mb-4 font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-black text-[#1D1E2C] mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-slate-400 line-through text-lg">₦{plan.originalPrice}/mo</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-[#673DE6]">₦{plan.price}</span>
                      <span className="text-[#545775]">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-[#00B090] mt-0.5 flex-shrink-0" />
                        <span className="text-[#545775]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setLocation("/pricing")}
                    className={`w-full h-12 rounded-full font-bold ${
                      plan.popular
                        ? "bg-[#673DE6] hover:bg-[#542FD0] text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-[#1D1E2C]"
                    }`}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied customers using AxiomHost cloud hosting
            </p>
            <Button
              size="lg"
              onClick={() => setLocation("/pricing")}
              className="bg-white text-[#673DE6] hover:bg-slate-50 h-14 px-8 text-lg rounded-full font-bold"
            >
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


