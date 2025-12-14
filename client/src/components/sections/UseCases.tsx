import { motion } from "framer-motion";
import { ShoppingCart, Briefcase, Code, GraduationCap, Heart, Users } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce Stores",
      description: "Perfect for online stores with WooCommerce support and fast checkout.",
      color: "from-[#EC1C65] to-[#FF6B9D]"
    },
    {
      icon: Briefcase,
      title: "Business Websites",
      description: "Professional websites for agencies, consultants, and service providers.",
      color: "from-[#673DE6] to-[#9F85FF]"
    },
    {
      icon: Code,
      title: "Developers",
      description: "Full SSH access, Git integration, and support for all modern frameworks.",
      color: "from-[#00B090] to-[#4DD4B8]"
    },
    {
      icon: GraduationCap,
      title: "Educational",
      description: "Ideal for schools, courses, and learning management systems.",
      color: "from-[#FFA500] to-[#FFD700]"
    },
    {
      icon: Heart,
      title: "Non-Profits",
      description: "Special pricing and features tailored for charitable organizations.",
      color: "from-[#EC1C65] to-[#FF6B9D]"
    },
    {
      icon: Users,
      title: "Agencies",
      description: "Manage multiple client sites with reseller hosting options.",
      color: "from-[#673DE6] to-[#9F85FF]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4 tracking-[-0.02em]" style={{textRendering: 'geometricPrecision'}}>
            Perfect For Every Need
          </h2>
          <p className="text-lg text-[#545775] max-w-2xl mx-auto">
            Whether you're launching a blog, building an online store, or running a business, we have the perfect solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(103, 61, 230, 0.15)" }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-[#673DE6]/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-[#1D1E2C] mb-2 tracking-[-0.01em]" style={{textRendering: 'geometricPrecision'}}>
                  {useCase.title}
                </h3>
                <p className="text-[#545775] leading-relaxed">{useCase.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


