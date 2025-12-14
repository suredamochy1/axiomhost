import { useEffect } from "react";
import { Mail, Sparkles, BarChart3, Users, ArrowRight, Check, Target, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function EmailMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Campaign Creation",
      description: "Let AI write compelling email copy, design beautiful templates, and optimize send times."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Segmentation",
      description: "Automatically segment your audience based on behavior, interests, and engagement."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Track opens, clicks, conversions, and ROI with detailed real-time reports."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "List Management",
      description: "Easily import, organize, and manage your subscriber lists with automation."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "0",
      billing: "Forever Free",
      subscribers: "Up to 500 subscribers",
      emails: "1,000 emails/month",
      features: [
        "AI Email Writer",
        "Basic Templates",
        "Email Analytics",
        "List Management",
        "Contact Forms"
      ]
    },
    {
      name: "Professional",
      price: "2,500",
      billing: "/month",
      popular: true,
      subscribers: "Up to 10,000 subscribers",
      emails: "100,000 emails/month",
      features: [
        "Everything in Starter",
        "AI Campaign Optimizer",
        "Advanced Segmentation",
        "A/B Testing",
        "Automation Workflows",
        "Priority Support",
        "Remove Branding"
      ]
    },
    {
      name: "Enterprise",
      price: "7,500",
      billing: "/month",
      subscribers: "Unlimited subscribers",
      emails: "Unlimited emails",
      features: [
        "Everything in Professional",
        "Dedicated IP Address",
        "Custom Domain",
        "API Access",
        "Advanced Automation",
        "Dedicated Manager",
        "White-label Options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-[#673DE6]/10 via-white to-[#00D4AA]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#673DE6]/10 text-[#673DE6] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Email Marketing
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Email Marketing
              <span className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] bg-clip-text text-transparent"> Made Easy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Create, send, and track email campaigns with AI. Reach your customers at the perfect time with personalized messages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#673DE6] hover:bg-[#5B21B6] text-white px-8"
              >
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Powerful Features, Simple to Use
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

      {/* Pricing */}
      <section className="py-20 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Choose Your Plan
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Start free, upgrade as you grow</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  plan.popular
                    ? "border-[#673DE6] bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#673DE6] to-[#00D4AA] px-6 py-2 rounded-full text-white text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <div className="mb-2">
                    <div className="text-4xl font-bold text-[#673DE6]">₦{plan.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{plan.billing}</p>
                  </div>
                  <div className="mb-6 space-y-1">
                    <p className="text-sm text-slate-600">{plan.subscribers}</p>
                    <p className="text-sm text-slate-600">{plan.emails}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-[#673DE6] hover:bg-[#5B21B6] text-white"
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
      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-[#673DE6] to-[#5B21B6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Start Your First Campaign Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses growing with email marketing
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#673DE6] hover:bg-slate-100"
            >
              Start Free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
