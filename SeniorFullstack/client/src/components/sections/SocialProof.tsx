import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function SocialProof() {
  const [viewers, setViewers] = useState(127);
  const [purchases, setPurchases] = useState(43);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setPurchases(prev => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#673DE6]/10 to-[#EC1C65]/10 border border-[#673DE6]/20 rounded-xl p-4 mb-6"
    >
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2 text-[#1D1E2C]">
          <Users size={18} className="text-[#673DE6]" />
          <span className="font-semibold">{viewers} people</span>
          <span className="text-slate-600">viewing this deal</span>
        </div>
        <div className="flex items-center gap-2 text-[#1D1E2C]">
          <TrendingUp size={18} className="text-[#00B090]" />
          <span className="font-semibold">{purchases} purchased</span>
          <span className="text-slate-600">today</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#EC1C65]/10 text-[#EC1C65] text-xs font-bold">
            🔥 Limited Time
          </span>
        </div>
      </div>
    </motion.div>
  );
}


