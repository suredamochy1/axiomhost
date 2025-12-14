import { useEffect } from "react";
import { Sparkles, Zap, Shield, TrendingUp, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function EnhanceHosting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Next-Gen Performance",
      description: "LiteSpeed web server and advanced caching for maximum speed."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Advanced security features including ModSecurity and firewall."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Modern Control Panel",
      description: "Beautiful, intuitive Enhance control panel - easier than cPanel."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Auto-Scaling",
      description: "Automatic resource scaling during traffic spikes."
    }
  ];

  const plans = [
    {
      name: "Enhance Starter",
      price: "3,000",
      billing: "/month",
      features: [
        "30 GB SSD Storage",
        "Unlimited Bandwidth",
        "Enhance Control Panel",
        "3 Websites",
        "LiteSpeed Web Server",
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Support"
      ]
    },
    {
      name: "Enhance Pro",
      price: "6,500",
      billing: "/month",
      popular: true,
      features: [
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Enhance Control Panel",
        "10 Websites",
        "LiteSpeed Web Server",
        "Free SSL Certificate",
        "Git Integration",
        "Advanced Security",
        "Priority Support",
        "Hourly Backups"
      ]
    },
    {
      name: "Enhance Business",
      price: "13,500",
      billing: "/month",
      features: [
        "300 GB SSD Storage",
        "Unlimited Bandwidth",
        "Enhance Control Panel",
        "Unlimited Websites",
        "LiteSpeed Web Server",
        "Free SSL Certificate",
        "White-label Options",
        "Premium Security Suite",
        "VIP Support",
        "Real-time Backups"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Next-Gen Hosting
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Enhance Hosting
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Made Simple</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Next-generation hosting with Enhance control panel. Faster, more secure, and easier to manage than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Choose Enhance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-500 transition-colors group hover:shadow-lg"
              >
                <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
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
          <p className="text-center text-slate-600 mb-16 text-lg">Next-gen hosting at affordable prices</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  plan.popular
                    ? "border-indigo-600 bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 rounded-full text-white text-sm font-bold">
                    Best Value
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-indigo-600">₦{plan.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{plan.billing}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
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

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience Next-Gen Hosting
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands using Enhance for faster, secure hosting
            </p>
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-slate-100"
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
