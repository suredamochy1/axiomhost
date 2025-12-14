import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ChatBot";
import { hostingTypes } from "@/lib/pricingData";

export default function ResellerHosting() {
  const plans = hostingTypes["reseller-hosting"].plans;

  const formatPrice = (price: number) => {
    return price.toLocaleString("en-NG");
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-[#EC1C65]">Reseller Hosting</span>
          </h1>
          <p className="text-xl text-slate-400 mb-6 max-w-3xl mx-auto">
            Start your hosting business with white-label solutions. 100% white-label, WHMCS included, and full support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden transition-all hover:scale-105 ${
                plan.popular
                  ? "border-4 border-[#673DE6] bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl md:scale-105"
                  : "border border-slate-800 bg-slate-950 hover:border-[#673DE6]"
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-16" : ""}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">₦{formatPrice(Math.round(plan.price))}</span>
                    <span className="text-slate-400">{plan.billing}</span>
                  </div>
                </div>

                <a
                  href="https://my.axiomhost.cloud/index.php?rp=/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-full font-bold mb-8 transition-all text-center ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#673DE6] to-[#EC1C65] hover:shadow-lg hover:shadow-[#673DE6]/50 text-white"
                      : "border border-[#EC1C65] text-[#EC1C65] hover:bg-[#EC1C65]/10"
                  }`}
                  data-testid={`cta-${plan.name.toLowerCase()}`}
                >
                  Order Now
                </a>

                <div className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Check size={18} className="text-[#00D4AA] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
}
