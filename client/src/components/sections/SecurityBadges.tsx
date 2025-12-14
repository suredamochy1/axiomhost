import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, Award } from "lucide-react";

export default function SecurityBadges() {
  const badges = [
    {
      icon: Shield,
      title: "SSL Secured",
      description: "Free SSL certificates"
    },
    {
      icon: Lock,
      title: "DDoS Protected",
      description: "Advanced security"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "PCI compliant"
    },
    {
      icon: Award,
      title: "30-Day Guarantee",
      description: "Money-back promise"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-50 to-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#673DE6] to-[#EC1C65] flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-[#1D1E2C] text-sm mb-1">{badge.title}</h4>
                <p className="text-xs text-slate-600">{badge.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


