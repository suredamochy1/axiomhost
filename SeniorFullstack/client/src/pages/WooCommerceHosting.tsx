import { useEffect } from "react";
import { ShoppingCart, Zap, Shield, TrendingUp, ArrowRight, Check, CreditCard, Package } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WooCommerceHosting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "Optimized WooCommerce hosting with built-in caching for instant page loads and better conversions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Free SSL, PCI compliance, and advanced security to protect your customers' data."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale Effortlessly",
      description: "Handle traffic spikes during sales without slowdowns. Auto-scaling included."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Pre-installed WooCommerce",
      description: "WordPress + WooCommerce pre-configured and ready to start selling in minutes."
    }
  ];

  const plans = [
    {
      name: "Starter Store",
      price: "1,500",
      billing: "/month",
      features: [
        "1 Online Store",
        "WooCommerce Pre-installed",
        "Free SSL Certificate",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free Domain (1 Year)",
        "Payment Gateway Setup",
        "24/7 Support"
      ]
    },
    {
      name: "Growing Business",
      price: "3,500",
      billing: "/month",
      popular: true,
      features: [
        "3 Online Stores",
        "WooCommerce + Premium Plugins",
        "Free SSL Certificate",
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free Domain (1 Year)",
        "Marketing Tools",
        "Priority Support",
        "Daily Backups"
      ]
    },
    {
      name: "Enterprise",
      price: "7,500",
      billing: "/month",
      features: [
        "Unlimited Stores",
        "All Premium Features",
        "200 GB SSD Storage",
        "Dedicated Resources",
        "CDN Included",
        "Advanced Analytics",
        "White-label Options",
        "Dedicated Account Manager",
        "Hourly Backups"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-[#00D4AA]/10 via-white to-[#673DE6]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#00D4AA]/10 text-[#00D4AA] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <ShoppingCart className="w-4 h-4" />
              WooCommerce Optimized
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Build & Grow Your
              <span className="bg-gradient-to-r from-[#00D4AA] to-[#673DE6] bg-clip-text text-transparent"> Online Store</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Powerful WooCommerce hosting designed for online stores. Fast, secure, and built to convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#00D4AA] hover:bg-[#00C299] text-white px-8"
              >
                Start Selling Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                View Demo Store
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Everything Your Store Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#00D4AA] transition-colors group hover:shadow-lg"
              >
                <div className="text-[#00D4AA] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Choose Your Plan
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Start selling online today with our optimized WooCommerce hosting</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  plan.popular
                    ? "border-[#00D4AA] bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00D4AA] to-[#00C299] px-6 py-2 rounded-full text-white text-sm font-bold">
                    Best Value
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-[#00D4AA]">₦{plan.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{plan.billing}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-[#00D4AA] hover:bg-[#00C299] text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#00D4AA] flex-shrink-0 mt-0.5" />
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

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-[#00D4AA] to-[#00C299] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Launch Your Online Store Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of successful online stores powered by AxiomHost
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#00D4AA] hover:bg-slate-100"
            >
              Start Your Store <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
