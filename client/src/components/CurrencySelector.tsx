import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useCurrency, getCurrencyInfo, type CurrencyInfo } from "@/lib/currency";

export default function CurrencySelector() {
  const { currency, setCurrency, availableCurrencies, loading } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  if (loading || !availableCurrencies || availableCurrencies.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Select currency"
      >
        <Globe size={18} />
        <span className="text-sm font-semibold">{currency}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 w-64 max-h-96 overflow-y-auto"
            >
              <div className="p-2">
                <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Select Currency
                </div>
                {availableCurrencies.map((curr: CurrencyInfo) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setCurrency(curr.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      currency === curr.code
                        ? "bg-[#673DE6]/10 text-[#673DE6] font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{curr.code}</span>
                      <span className="text-slate-500 text-xs">{curr.name}</span>
                    </div>
                    {currency === curr.code && (
                      <Check size={16} className="text-[#673DE6]" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

