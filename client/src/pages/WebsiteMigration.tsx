import { useEffect } from "react";
import { RefreshCw, Shield, Zap, CheckCircle, ArrowRight, Clock, Database } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WebsiteMigration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Migration",
      description: "Most websites migrated within 24-48 hours with zero downtime."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Safe & Secure",
      description: "Your data is encrypted and transferred securely. No data loss guaranteed."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Zero Downtime",
      description: "Your website stays live throughout the entire migration process."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Everything Transferred",
      description: "Files, databases, emails, and configurations - we move it all."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Request Migration",
      description: "Fill out our simple form with your current hosting details"
    },
    {
      number: "02",
      title: "We Handle Everything",
      description: "Our expert team migrates your website, databases, and emails"
    },
    {
      number: "03",
      title: "Test & Verify",
      description: "We ensure everything works perfectly before going live"
    },
    {
      number: "04",
      title: "Go Live",
      description: "Your website is now on AxiomHost with better performance"
    }
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
            <div className="inline-flex items-center gap-2 bg-[#00D4AA]/10 text-[#00D4AA] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <RefreshCw className="w-4 h-4" />
              Free Website Migration
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Free Website Migration
              <span className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] bg-clip-text text-transparent"> to AxiomHost</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Switch to AxiomHost risk-free. We'll handle the entire migration process for you - completely free with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#673DE6] hover:bg-[#5B21B6] text-white px-8"
              >
                Start Free Migration <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                Talk to Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Choose Our Migration Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#673DE6] transition-colors group hover:shadow-lg"
              >
                <div className="text-[#673DE6] mb-4 group-hover:scale-110 transition-transform">
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
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            How Migration Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-[#673DE6]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            What We Migrate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Website Files & Content",
              "Databases (MySQL, PostgreSQL)",
              "Email Accounts & Data",
              "SSL Certificates",
              "DNS Records",
              "CMS Configurations",
              "WordPress Plugins & Themes",
              "Application Settings"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200"
              >
                <CheckCircle className="w-6 h-6 text-[#00D4AA] flex-shrink-0" />
                <span className="text-slate-900 font-medium">{item}</span>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Switch to Faster Hosting?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let our experts handle your migration - completely free and risk-free
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#673DE6] hover:bg-slate-100"
            >
              Request Free Migration <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
