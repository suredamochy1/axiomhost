import { useEffect } from "react";
import { DollarSign, Users, TrendingUp, Gift, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AffiliateProgram() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "30% Recurring Commission",
      description: "Earn 30% commission on every sale, every month, for the lifetime of the customer."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growing Revenue",
      description: "Build passive income as your referrals renew their hosting plans month after month."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Get access to our affiliate manager and exclusive promotional materials."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Bonus Rewards",
      description: "Earn extra bonuses when you hit sales milestones and referral targets."
    }
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Sign Up Free",
      description: "Join our affiliate program in minutes - no approval needed"
    },
    {
      number: "02",
      title: "Get Your Link",
      description: "Receive your unique tracking link and promotional materials"
    },
    {
      number: "03",
      title: "Promote AxiomHost",
      description: "Share your link on your blog, social media, or website"
    },
    {
      number: "04",
      title: "Earn Commissions",
      description: "Get paid 30% recurring commission on every successful referral"
    }
  ];

  const tiers = [
    {
      name: "Starter",
      sales: "0-10 sales/month",
      commission: "30%",
      bonus: "None",
      features: [
        "30% recurring commission",
        "Affiliate dashboard",
        "Basic marketing materials",
        "Email support"
      ]
    },
    {
      name: "Professional",
      sales: "11-50 sales/month",
      commission: "35%",
      bonus: "₦50,000",
      popular: true,
      features: [
        "35% recurring commission",
        "Monthly bonus: ₦50,000",
        "Premium marketing materials",
        "Priority support",
        "Dedicated affiliate manager"
      ]
    },
    {
      name: "Elite",
      sales: "50+ sales/month",
      commission: "40%",
      bonus: "₦200,000",
      features: [
        "40% recurring commission",
        "Monthly bonus: ₦200,000",
        "Custom landing pages",
        "VIP support",
        "Dedicated account manager",
        "Exclusive promotional offers"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-green-50 via-white to-[#673DE6]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Earn Money with
              <span className="bg-gradient-to-r from-green-600 to-[#673DE6] bg-clip-text text-transparent"> Our Affiliate Program</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Get paid 30% recurring commission for every customer you refer. Start earning passive income today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                Join Now - It's Free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: "₦5M+", label: "Paid to Affiliates" },
              { value: "1,000+", label: "Active Affiliates" },
              { value: "30%", label: "Commission Rate" },
              { value: "Lifetime", label: "Recurring Income" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Join Our Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-green-500 transition-colors group hover:shadow-lg"
              >
                <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-green-600/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Commission Tiers
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Earn more as you grow</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  tier.popular
                    ? "border-green-600 bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-[#673DE6] px-6 py-2 rounded-full text-white text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{tier.name}</h3>
                  <p className="text-slate-600 mb-4">{tier.sales}</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-green-600">{tier.commission}</div>
                    <p className="text-slate-600 text-sm mt-1">Recurring Commission</p>
                    {tier.bonus !== "None" && (
                      <p className="text-sm text-green-600 font-semibold mt-2">+ {tier.bonus} monthly bonus</p>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      tier.popular
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    Get Started
                  </Button>

                  <div className="space-y-4">
                    {tier.features.map((feature, j) => (
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

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-green-600 to-[#673DE6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Start Earning Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 1,000+ affiliates earning recurring commissions with AxiomHost
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-slate-100"
            >
              Join Affiliate Program <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
