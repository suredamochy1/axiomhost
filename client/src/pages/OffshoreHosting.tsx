import { useEffect } from "react";
import { Shield, Globe, Lock, Eye, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function OffshoreHosting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DMCA Ignored",
      description: "Host content without DMCA takedown concerns in privacy-friendly jurisdictions."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Protection",
      description: "Maximum privacy and anonymity with offshore data centers."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure & Encrypted",
      description: "Military-grade encryption and advanced security measures."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Locations",
      description: "Choose from data centers in Netherlands, Iceland, and Switzerland."
    }
  ];

  const plans = [
    {
      name: "Offshore Basic",
      price: "3,500",
      billing: "/month",
      features: [
        "10 GB SSD Storage",
        "Unlimited Bandwidth",
        "DMCA Ignored",
        "1 Website",
        "Free SSL Certificate",
        "Privacy Protection",
        "24/7 Support"
      ]
    },
    {
      name: "Offshore Pro",
      price: "7,500",
      billing: "/month",
      popular: true,
      features: [
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "DMCA Ignored",
        "5 Websites",
        "Free SSL Certificate",
        "Maximum Privacy",
        "Anonymous Payment",
        "Priority Support",
        "Daily Backups"
      ]
    },
    {
      name: "Offshore Business",
      price: "15,000",
      billing: "/month",
      features: [
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "DMCA Ignored",
        "Unlimited Websites",
        "Free SSL Certificate",
        "Dedicated IP",
        "Anonymous Hosting",
        "VIP Support",
        "Hourly Backups"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-slate-900 via-[#673DE6] to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Privacy-First Hosting
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Offshore Hosting
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"> with Privacy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              DMCA-ignored hosting in privacy-friendly jurisdictions. Maximum anonymity and content freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 px-8"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Choose Offshore Hosting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-900 transition-colors group hover:shadow-lg"
              >
                <div className="text-slate-900 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Choose Your Plan
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Privacy-focused hosting at affordable prices</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  plan.popular
                    ? "border-slate-900 bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 px-6 py-2 rounded-full text-white text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-slate-900">₦{plan.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{plan.billing}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-slate-900 hover:bg-slate-800 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready for Privacy-First Hosting?
            </h2>
            <p className="text-xl mb-8 text-slate-300">
              Host your content without restrictions in offshore locations
            </p>
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
