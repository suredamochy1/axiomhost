import { useEffect } from "react";
import { Lock, Shield, CheckCircle, Zap, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SSLCertificates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Encryption",
      description: "Military-grade 256-bit encryption to protect your visitors' data."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Activation",
      description: "Get your SSL certificate installed and activated within minutes."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Trust Indicators",
      description: "Display trust seals and HTTPS padlock to boost customer confidence."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "99.9% Browser Compatibility",
      description: "Compatible with all major browsers and mobile devices."
    }
  ];

  const certificates = [
    {
      name: "Free SSL",
      price: "0",
      billing: "Forever Free",
      type: "Let's Encrypt",
      popular: false,
      features: [
        "Domain Validation (DV)",
        "Single Domain",
        "256-bit Encryption",
        "90-Day Validity",
        "Auto-Renewal",
        "Basic Support"
      ]
    },
    {
      name: "Standard SSL",
      price: "8,000",
      billing: "/year",
      type: "Domain Validated",
      popular: true,
      features: [
        "Domain Validation (DV)",
        "Single Domain or Wildcard",
        "256-bit Encryption",
        "1-Year Validity",
        "Trust Seal",
        "Priority Support",
        "Warranty up to $10,000"
      ]
    },
    {
      name: "Business SSL",
      price: "25,000",
      billing: "/year",
      type: "Organization Validated",
      popular: false,
      features: [
        "Organization Validation (OV)",
        "Wildcard + Multi-Domain",
        "256-bit Encryption",
        "2-Year Validity",
        "Premium Trust Seal",
        "24/7 Support",
        "Warranty up to $1,000,000"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Lock className="w-4 h-4" />
              Trusted SSL Certificates
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              SSL Certificates
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> for HTTPS</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Secure your website with SSL certificates. Protect your visitors and boost SEO with HTTPS encryption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                Get SSL Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                Compare Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why You Need SSL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-green-500 transition-colors group hover:shadow-lg"
              >
                <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform">
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
            Choose Your SSL Certificate
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">From free to enterprise-grade security</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  cert.popular
                    ? "border-green-600 bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {cert.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 rounded-full text-white text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1 text-slate-900">{cert.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{cert.type}</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-green-600">₦{cert.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{cert.billing}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      cert.popular
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : cert.price === "0"
                        ? "bg-slate-900 hover:bg-slate-800 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    {cert.price === "0" ? "Get Free SSL" : "Purchase Now"}
                  </Button>

                  <div className="space-y-4">
                    {cert.features.map((feature, j) => (
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

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            SSL Certificate Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Encrypt sensitive data in transit",
              "Boost Google search rankings",
              "Increase customer trust and confidence",
              "Display HTTPS padlock in browser",
              "Prevent \"Not Secure\" warnings",
              "PCI compliance for e-commerce",
              "Protect against phishing attacks",
              "Improve conversion rates"
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-slate-900">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Secure Your Website Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get SSL certificate and protect your visitors' data
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-slate-100"
            >
              Get SSL Certificate <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
