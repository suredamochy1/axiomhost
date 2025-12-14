import { useEffect } from "react";
import { Globe, DollarSign, Users, TrendingUp, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function DomainReseller() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "High Commission Rates",
      description: "Earn up to 50% commission on every domain sale. Build recurring revenue."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "500+ TLDs",
      description: "Access to over 500 domain extensions including .com, .ng, .co.uk and more."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "White-Label Platform",
      description: "Brand the domain platform as your own. Full white-label control panel."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Grow Your Business",
      description: "Manage unlimited clients and domains from one powerful dashboard."
    }
  ];

  const plans = [
    {
      name: "Starter Reseller",
      price: "10,000",
      billing: "/month",
      features: [
        "50 Domain Credits",
        "30% Commission",
        "White-label Dashboard",
        "Email Support",
        "Basic API Access",
        "Domain Management Tools"
      ]
    },
    {
      name: "Professional Reseller",
      price: "25,000",
      billing: "/month",
      popular: true,
      features: [
        "200 Domain Credits",
        "40% Commission",
        "Full White-label",
        "Priority Support",
        "Full API Access",
        "Advanced Tools",
        "WHMCS Integration",
        "Custom Pricing"
      ]
    },
    {
      name: "Enterprise Reseller",
      price: "50,000",
      billing: "/month",
      features: [
        "Unlimited Domain Credits",
        "50% Commission",
        "Complete White-label",
        "Dedicated Manager",
        "Premium API Access",
        "All Advanced Tools",
        "WHMCS & Blesta",
        "Volume Discounts",
        "Custom Solutions"
      ]
    }
  ];

  const domainPricing = [
    { extension: ".com", price: "₦8,000/year", commission: "₦4,000" },
    { extension: ".ng", price: "₦5,000/year", commission: "₦2,500" },
    { extension: ".net", price: "₦9,500/year", commission: "₦4,750" },
    { extension: ".org", price: "₦9,000/year", commission: "₦4,500" },
    { extension: ".co.uk", price: "₦4,500/year", commission: "₦2,250" },
    { extension: ".com.ng", price: "₦3,000/year", commission: "₦1,500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Domain Reseller Program
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Start Your Own
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Domain Business</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Become a domain reseller and earn commissions selling domain names under your own brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
              >
                Become a Reseller <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Become a Reseller?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-500 transition-colors group hover:shadow-lg"
              >
                <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
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
            Reseller Plans
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Start small, scale as you grow</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border transition-all ${
                  plan.popular
                    ? "border-emerald-600 bg-white shadow-xl scale-105 relative"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2 rounded-full text-white text-sm font-bold">
                    Best Value
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-emerald-600">₦{plan.price}</div>
                    <p className="text-slate-600 text-sm mt-1">{plan.billing}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
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

          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Sample Domain Pricing & Commission</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Extension</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Retail Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Your Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {domainPricing.map((domain, i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="px-6 py-4 text-slate-900 font-medium">{domain.extension}</td>
                      <td className="px-6 py-4 text-slate-600">{domain.price}</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">{domain.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join our domain reseller program today and build your business
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-slate-100"
            >
              Become a Reseller Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
