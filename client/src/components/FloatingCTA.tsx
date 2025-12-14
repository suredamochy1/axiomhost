import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show after scrolling past hero section (approximately 600px)
      setIsVisible(scrollY > 600);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // Show exit intent when mouse leaves top of screen
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showExitIntent]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCTAClick = () => {
    setLocation("/pricing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating CTA Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-md:bottom-4 max-md:right-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-[#673DE6] to-[#EC1C65] hover:from-[#542FD0] hover:to-[#D01255] text-white font-bold shadow-2xl shadow-[#673DE6]/50 hover:shadow-[#673DE6]/70 transition-all duration-300 flex items-center gap-2 max-md:h-12 max-md:px-6 max-md:text-base"
                aria-label="Get 85% off hosting deal"
              >
                <span className="max-md:hidden">Get 85% Off Now</span>
                <span className="md:hidden">85% Off</span>
                <ArrowUp className="rotate-45" size={20} />
              </Button>
            </motion.div>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-slate-200 hover:border-[#673DE6] flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-[#673DE6]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setShowExitIntent(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              
              <div className="text-center">
                <h3 className="text-3xl font-black text-[#1D1E2C] mb-4">
                  Wait! Don't Miss Out 🎉
                </h3>
                <p className="text-slate-600 mb-6">
                  Get an <strong className="text-[#EC1C65]">extra 10% off</strong> when you sign up today!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleCTAClick}
                    className="flex-1 h-12 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] hover:from-[#542FD0] hover:to-[#D01255] text-white font-bold rounded-full"
                  >
                    Claim Extra Discount
                  </Button>
                  <Button
                    onClick={() => setShowExitIntent(false)}
                    variant="outline"
                    className="flex-1 h-12 rounded-full"
                  >
                    Maybe Later
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

