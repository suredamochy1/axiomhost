import { useEffect } from "react";
import { useLocation } from "wouter";
import { Mail, Shield, Users, Zap, Lock, BarChart3, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BusinessEmail() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "999",
      monthly: "₦999/mo",
      features: [
        "Up to 5 Email Accounts",
        "5 GB Storage per Account",
        "Professional Email Address",
        "Email Forwarding",
        "Mobile Access",
        "Basic Spam Protection",
        "Email Support"
      ],
      popular: false,
      testId: "card-plan-basic"
    },
    {
      name: "Professional",
      price: "1,999",
      monthly: "₦1,999/mo",
      features: [
        "Up to 25 Email Accounts",
        "25 GB Storage per Account",
        "Custom Domain Support",
        "Advanced Spam Filtering",
        "Calendar & Contacts",
        "Mobile Sync",
        "Priority Support",
        "Collaboration Tools"
      ],
      popular: true,
      testId: "card-plan-professional"
    },
    {
      name: "Enterprise",
      price: "3,999",
      monthly: "₦3,999/mo",
      features: [
        "Unlimited Email Accounts",
        "Unlimited Storage",
        "Multiple Custom Domains",
        "Advanced Security",
        "Full Collaboration Suite",
        "24/7 Premium Support",
        "Custom Integration",
        "Admin Console",
        "Dedicated Account Manager"
      ],
      popular: false,
      testId: "card-plan-enterprise"
    }
  ];

  const features = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Professional Email Address",
      description: "Create custom business email addresses that build trust with your clients",
      testId: "feature-professional"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Maximum Security",
      description: "Advanced encryption and security measures to protect sensitive business communications",
      testId: "feature-security"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Share calendars, contacts, and files seamlessly with your entire team",
      testId: "feature-collaboration"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Easy Setup",
      description: "Get started in minutes with our simple setup wizard and migration tools",
      testId: "feature-setup"
    }
  ];

  const specs = [
    { label: "Email Accounts", value: "Up to 25+ accounts" },
    { label: "Storage", value: "25 GB+ per account" },
    { label: "Uptime", value: "99.9% guaranteed" },
    { label: "Recovery", value: "30-day backup retention" },
    { label: "Mobile Support", value: "iOS & Android" },
    { label: "Support", value: "24/7 Priority" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00D4AA] to-[#673DE6] bg-clip-text text-transparent" data-testid="heading-email-title">
              Professional Business Email
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto" data-testid="text-email-subtitle">
              Secure, reliable email for your entire team. Build trust with professional business addresses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] hover:shadow-lg hover:shadow-[#673DE6]/50 text-white border-0" 
                data-testid="button-get-started"
              >
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-10 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-features">
            Powerful Features for Professional Teams
          </h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-slate-700/50 hover:to-slate-800/50 transition-all duration-300 border border-slate-700/50"
                data-testid={feature.testId}
              >
                <div className="text-[#00D4AA] mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" data-testid="heading-pricing">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">Choose the plan that fits your business needs</p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? "border-2 border-[#673DE6] bg-gradient-to-br from-[#673DE6]/10 to-[#00D4AA]/5 shadow-2xl shadow-[#673DE6]/20" 
                    : "border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-slate-600"
                }`}
                data-testid={plan.testId}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#00D4AA] mb-2">₦{plan.price}</div>
                  <p className="text-slate-400">{plan.monthly}</p>
                </div>

                <Button 
                  className={`w-full mb-8 font-semibold transition-all ${
                    plan.popular 
                      ? "bg-gradient-to-r from-[#673DE6] to-[#00D4AA] hover:shadow-lg hover:shadow-[#673DE6]/50 text-white border-0" 
                      : "bg-slate-700 hover:bg-slate-600 text-white border-0"
                  }`}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                >
                  Choose Plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3" data-testid={`feature-${plan.name.toLowerCase()}-${idx}`}>
                      <Check className="w-5 h-5 text-[#00D4AA] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 px-6 lg:px-10 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-specs">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 text-center"
                data-testid={`spec-${spec.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <p className="text-slate-400 text-sm mb-2">{spec.label}</p>
                <p className="text-2xl font-bold text-[#00D4AA]">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#673DE6] to-[#00D4AA]"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="heading-cta">
              Ready to Elevate Your Business Email?
            </h2>
            <p className="text-xl text-slate-300 mb-8" data-testid="text-cta">
              Join thousands of businesses using professional email to build trust and improve communication
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] hover:shadow-lg hover:shadow-[#673DE6]/50 text-white border-0 text-lg px-8" 
              data-testid="button-cta-primary"
            >
              Start Your Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
