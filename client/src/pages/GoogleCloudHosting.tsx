import { useEffect } from "react";
import { Cloud, Zap, Shield, BarChart3, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function GoogleCloudHosting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Google Infrastructure",
      description: "Powered by Google Cloud Platform - the same infrastructure that powers Google Search and YouTube."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ultra-Fast Network",
      description: "Google's premium global network for lightning-fast content delivery."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Google-grade security with automatic encryption and DDoS protection."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI & ML Ready",
      description: "Access to Google's AI and machine learning tools for advanced applications."
    }
  ];

  const plans = [
    {
      name: "GCP Starter",
      price: "9,000",
      billing: "/month",
      features: [
        "2 vCPU",
        "4 GB RAM",
        "50 GB SSD Storage",
        "3 TB Bandwidth",
        "Google Global Network",
        "Free SSL Certificate",
        "Cloud CDN",
        "24/7 Support"
      ]
    },
    {
      name: "GCP Professional",
      price: "17,000",
      billing: "/month",
      popular: true,
      features: [
        "4 vCPU",
        "8 GB RAM",
        "120 GB SSD Storage",
        "5 TB Bandwidth",
        "Google Global Network",
        "Free SSL Certificate",
        "Cloud CDN Premium",
        "Load Balancing",
        "Priority Support",
        "Automated Backups"
      ]
    },
    {
      name: "GCP Enterprise",
      price: "35,000",
      billing: "/month",
      features: [
        "8 vCPU",
        "16 GB RAM",
        "350 GB SSD Storage",
        "12 TB Bandwidth",
        "Google Global Network",
        "Free SSL Certificate",
        "Cloud CDN Premium",
        "Advanced Load Balancing",
        "AI/ML Tools Access",
        "Dedicated Support",
        "Real-time Backups"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Cloud className="w-4 h-4" />
              Powered by Google Cloud
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Google Cloud Hosting
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> At Scale</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Harness Google's infrastructure. Enterprise-grade cloud hosting with unmatched performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                View Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Google Cloud?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-500 transition-colors group hover:shadow-lg"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
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
          <p className="text-center text-slate-600 mb-16 text-lg">Managed Google Cloud hosting made easy</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  plan.popular
                    ? "border-blue-600 bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-600 px-6 py-2 rounded-full text-white text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-blue-600">₦{plan.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{plan.billing}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
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

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready for Google Cloud Power?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Deploy on Google's infrastructure today
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
            >
              Launch on GCP <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
