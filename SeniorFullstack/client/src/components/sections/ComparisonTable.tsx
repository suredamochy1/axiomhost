import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const features = [
    { name: "Websites", premium: "3", business: "50", cloud: "100" },
    { name: "Storage", premium: "20 GB", business: "50 GB NVMe", cloud: "100 GB NVMe" },
    { name: "Bandwidth", premium: "Unlimited", business: "Unlimited", cloud: "Unlimited" },
    { name: "Free Domain", premium: true, business: true, cloud: true },
    { name: "SSL Certificate", premium: true, business: true, cloud: true },
    { name: "Daily Backups", premium: false, business: true, cloud: true },
    { name: "CDN", premium: false, business: true, cloud: true },
    { name: "AI Website Builder", premium: false, business: true, cloud: true },
    { name: "Priority Support", premium: false, business: false, cloud: true },
    { name: "Dedicated IP", premium: false, business: false, cloud: true },
    { name: "Free Migration", premium: false, business: false, cloud: true }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4 tracking-[-0.02em]" style={{textRendering: 'geometricPrecision'}}>
            Compare Plans
          </h2>
          <p className="text-lg text-[#545775]">
            See exactly what's included in each plan
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white">
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Premium</th>
                  <th className="px-6 py-4 text-center font-bold bg-white/10">Business</th>
                  <th className="px-6 py-4 text-center font-bold">Cloud Startup</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-[#1D1E2C]">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.premium === "boolean" ? (
                        feature.premium ? (
                          <Check className="w-5 h-5 text-[#00B090] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#1D1E2C] font-medium">{feature.premium}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-[#673DE6]/5">
                      {typeof feature.business === "boolean" ? (
                        feature.business ? (
                          <Check className="w-5 h-5 text-[#00B090] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#1D1E2C] font-medium">{feature.business}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.cloud === "boolean" ? (
                        feature.cloud ? (
                          <Check className="w-5 h-5 text-[#00B090] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#1D1E2C] font-medium">{feature.cloud}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


