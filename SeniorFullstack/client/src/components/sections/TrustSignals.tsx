import { motion } from "framer-motion";
import { Server, Users, Activity } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (value.includes("★")) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            const suffix = value.includes("M") ? "M" : value.includes("%") ? "%" : "";
            const decimals = value.includes(".") ? 1 : 0;
            const hasPlus = value.includes("+");
            
            let current = 0;
            const increment = numValue / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= numValue) {
                current = numValue;
                clearInterval(timer);
              }
              const formatted = current.toFixed(decimals);
              setDisplayValue(`${formatted}${suffix}${hasPlus ? "+" : ""}`);
            }, 25);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function TrustSignals() {
  const signals = [
    {
      icon: Users,
      value: "15000+",
      label: "Active customers",
      color: "bg-[#673DE6]"
    },
    {
      icon: Server,
      value: "99.99%",
      label: "Uptime guarantee",
      color: "bg-[#00B090]"
    },
    {
      icon: Activity,
      value: "4.8★",
      label: "Average rating",
      color: "bg-[#EC1C65]"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="text-center"
              >
                <motion.div 
                  className={`${signal.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-4xl font-black text-[#1D1E2C] mb-2 tracking-[-0.02em]" style={{textRendering: 'geometricPrecision'}}>
                  <AnimatedNumber value={signal.value} />
                </h3>
                <p className="text-slate-600 font-medium">{signal.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
