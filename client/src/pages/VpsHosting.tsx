import { useEffect } from "react";
import { useLocation } from "wouter";
import { Check, Server, Shield, Zap, Globe, BarChart3, ArrowRight, ChevronDown, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function VpsHosting() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "Starter VPS",
      price: "2,999",
      monthly: "₦2,999/mo",
      features: [
        "1 vCPU Core",
        "1 GB RAM",
        "30 GB SSD Storage",
        "1 TB Bandwidth",
        "1 IP Address",
        "Free DDoS Protection",
        "Free SSL Certificate",
        "24/7 Support"
      ],
      popular: false,
      testId: "card-plan-starter"
    },
    {
      name: "Pro VPS",
      price: "5,999",
      monthly: "₦5,999/mo",
      features: [
        "2 vCPU Cores",
        "4 GB RAM",
        "80 GB SSD Storage",
        "3 TB Bandwidth",
        "3 IP Addresses",
        "Free DDoS Protection",
        "Free SSL Certificate",
        "Priority Support",
        "Weekly Backups"
      ],
      popular: true,
      testId: "card-plan-pro"
    },
    {
      name: "Enterprise VPS",
      price: "9,999",
      monthly: "₦9,999/mo",
      features: [
        "4 vCPU Cores",
        "8 GB RAM",
        "160 GB SSD Storage",
        "5 TB Bandwidth",
        "5 IP Addresses",
        "Advanced DDoS Protection",
        "Free SSL Certificate",
        "24/7 Premium Support",
        "Daily Backups",
        "Dedicated Account Manager"
      ],
      popular: false,
      testId: "card-plan-enterprise"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "SSD storage and optimized infrastructure for blazing-fast load times",
      testId: "feature-performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Free DDoS protection, SSL certificates, and firewall management included",
      testId: "feature-security"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Multiple data centers across regions for optimal performance worldwide",
      testId: "feature-global"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Full Root Access",
      description: "Complete control over your server environment and configurations",
      testId: "feature-control"
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00D4AA] to-[#673DE6] bg-clip-text text-transparent" data-testid="heading-vps-title">
              Powerful VPS Hosting
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto" data-testid="text-vps-subtitle">
              Enterprise-grade virtual private servers with full root access, perfect for developers and businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#673DE6] to-[#5B21B6] hover:shadow-lg hover:shadow-[#673DE6]/50 transition-all"
                data-testid="button-get-started-vps"
              >
                Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                data-testid="button-learn-more-vps"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-10 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-features">
            Why Choose Our VPS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-[#00D4AA] transition-colors group"
                data-testid={feature.testId}
              >
                <div className="text-[#00D4AA] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" data-testid="heading-pricing">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">Choose the perfect plan for your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  plan.popular
                    ? "border-[#673DE6] bg-gradient-to-br from-[#673DE6]/20 to-transparent shadow-lg shadow-[#673DE6]/20 scale-105"
                    : "border-slate-700 bg-slate-900/40 hover:border-slate-600"
                }`}
                data-testid={plan.testId}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#673DE6] to-[#5B21B6] px-6 py-3 text-center text-sm font-bold uppercase tracking-wider" data-testid="badge-popular">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2" data-testid={`text-plan-name-${i}`}>{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-[#00D4AA]" data-testid={`text-price-${i}`}>₦{plan.price}</div>
                    <p className="text-slate-400 text-sm mt-1">{plan.monthly}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#673DE6] to-[#5B21B6] hover:shadow-lg hover:shadow-[#673DE6]/50"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                    data-testid={`button-select-${plan.name.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3" data-testid={`feature-${i}-${j}`}>
                        <Check className="w-5 h-5 text-[#00D4AA] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-6 lg:px-10 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-specs">
            Technical Specifications
          </h2>

          <div className="space-y-4">
            {[
              { label: "Operating Systems", value: "Ubuntu, CentOS, Debian, AlmaLinux" },
              { label: "Guaranteed Uptime", value: "99.9% SLA with automatic backups" },
              { label: "Bandwidth", value: "Unmetered with burst capacity" },
              { label: "Support", value: "24/7 Technical Support via Chat & Ticket" },
              { label: "Scalability", value: "Easy upgrade options without downtime" }
            ].map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-[#00D4AA] transition-colors"
                data-testid={`spec-item-${i}`}
              >
                <h3 className="font-semibold text-[#00D4AA] mb-2" data-testid={`spec-label-${i}`}>{spec.label}</h3>
                <p className="text-slate-300" data-testid={`spec-value-${i}`}>{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#673DE6]/20 via-transparent to-[#00D4AA]/20"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6" data-testid="heading-cta">
              Ready to Power Your Applications?
            </h2>
            <p className="text-xl text-slate-300 mb-8" data-testid="text-cta">
              Get started with our VPS hosting today. Free migration and 24/7 support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#673DE6] to-[#5B21B6] hover:shadow-lg hover:shadow-[#673DE6]/50 transition-all"
                data-testid="button-cta-primary"
              >
                Start Your Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                data-testid="button-cta-secondary"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
