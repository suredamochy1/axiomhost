import { useEffect } from "react";
import { Rocket, CheckCircle, Clock, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FeaturesRoadmap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const launched = [
    { title: "AI Website Builder", date: "Jan 2025", description: "Build websites with AI in 3 easy steps" },
    { title: "Email Marketing", date: "Dec 2024", description: "Send campaigns with AI-powered tools" },
    { title: "Free Website Migration", date: "Nov 2024", description: "Zero-downtime migration service" },
    { title: "WordPress Optimizer", date: "Oct 2024", description: "Automatic WordPress performance optimization" },
    { title: "CDN Integration", date: "Sept 2024", description: "Free global CDN for all hosting plans" }
  ];

  const upcoming = [
    { title: "Mobile App", date: "Q2 2025", description: "Manage your hosting on the go" },
    { title: "Advanced Analytics", date: "Q2 2025", description: "Deep insights into website performance" },
    { title: "Auto-scaling", date: "Q3 2025", description: "Automatic resource scaling during traffic spikes" },
    { title: "One-click Staging", date: "Q3 2025", description: "Test changes before going live" }
  ];

  const planned = [
    { title: "AI SEO Assistant", date: "Q4 2025", description: "AI-powered SEO optimization" },
    { title: "Multi-site Management", date: "Q4 2025", description: "Manage multiple websites from one dashboard" },
    { title: "Advanced Security Suite", date: "2026", description: "Enhanced DDoS protection and firewall" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-[#673DE6]/10 via-white to-[#00D4AA]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Features &
              <span className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] bg-clip-text text-transparent"> Product Roadmap</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              See what we're building and what's coming next. Your feedback shapes our roadmap.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-8 h-8 text-[#00D4AA]" />
            <h2 className="text-3xl font-bold text-slate-900">Recently Launched</h2>
          </div>

          <div className="space-y-4">
            {launched.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#00D4AA] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#00D4AA] mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <span className="text-sm text-[#00D4AA] font-semibold">{item.date}</span>
                    </div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-8 h-8 text-[#673DE6]" />
            <h2 className="text-3xl font-bold text-slate-900">Coming Soon</h2>
          </div>

          <div className="space-y-4">
            {upcoming.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#673DE6] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#673DE6] mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <span className="text-sm text-[#673DE6] font-semibold">{item.date}</span>
                    </div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-slate-400" />
            <h2 className="text-3xl font-bold text-slate-900">Under Consideration</h2>
          </div>

          <div className="space-y-4">
            {planned.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <span className="text-sm text-slate-500 font-semibold">{item.date}</span>
                    </div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-[#673DE6] to-[#5B21B6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Have a Feature Request?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We'd love to hear your ideas! Your feedback helps us build better products.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#673DE6] hover:bg-slate-100"
            >
              Submit Idea <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
