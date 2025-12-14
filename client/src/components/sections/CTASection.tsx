import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#673DE6] to-[#9F85FF] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-[-0.02em]" style={{textRendering: 'geometricPrecision'}}>
            Ready to launch your website?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get 85% off today plus 3 months free. Build, deploy, and scale with Axiomhost.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="h-14 px-12 text-lg rounded-full bg-white hover:bg-slate-50 text-[#673DE6] font-bold shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
              data-testid="cta-start-building"
            >
              Start building now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
