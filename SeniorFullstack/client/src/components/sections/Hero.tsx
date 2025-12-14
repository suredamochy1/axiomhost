import { Check, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const domains = ["axiomhost.online", "yourimagination.yours", "creativity.peak"];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [countdown, setCountdown] = useState("00D 00H 00M 00S");
  const [domainError, setDomainError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Reset animation when input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Domain validation - allows dots for TLD separation (e.g., example.com)
    if (value.length > 0) {
      // Remove any trailing spaces
      const trimmedValue = value.trim();
      
      // Check for invalid characters (only allow letters, numbers, dots, and hyphens)
      if (!/^[a-zA-Z0-9.-]+$/.test(trimmedValue)) {
        setDomainError("Invalid character. Use only letters, numbers, dots, and hyphens.");
        return;
      }
      
      // Check for consecutive dots
      if (trimmedValue.includes("..")) {
        setDomainError("Domain cannot contain consecutive dots.");
        return;
      }
      
      // Check if starts or ends with dot
      if (trimmedValue.startsWith(".") || trimmedValue.endsWith(".")) {
        setDomainError("Domain cannot start or end with a dot.");
        return;
      }
      
      // Check if starts or ends with hyphen
      if (trimmedValue.startsWith("-") || trimmedValue.endsWith("-")) {
        setDomainError("Domain cannot start or end with a hyphen.");
        return;
      }
      
      // Split by dots and validate each part
      const parts = trimmedValue.split(".");
      if (parts.length > 1) {
        // Has TLD - validate each part
        for (const part of parts) {
          if (part.length === 0) {
            setDomainError("Domain parts cannot be empty.");
            return;
          }
          if (part.length > 63) {
            setDomainError("Each domain part cannot exceed 63 characters.");
            return;
          }
          // Each part should be alphanumeric with optional hyphens (but not start/end with hyphen)
          if (!/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(part)) {
            setDomainError("Domain parts cannot start or end with a hyphen.");
            return;
          }
        }
      } else {
        // No TLD yet - just validate the domain name part
        if (trimmedValue.length < 1) {
          setDomainError("Domain must be at least 1 character");
          return;
        }
        if (trimmedValue.length > 63) {
          setDomainError("Domain name cannot exceed 63 characters.");
          return;
        }
        if (!/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(trimmedValue)) {
          setDomainError("Domain cannot start or end with a hyphen.");
          return;
        }
      }
      
      // All validations passed
      setDomainError("");
    } else {
      setDomainError("");
    }
  };

  const handleDomainSearch = async () => {
    if (!inputValue || domainError) return;
    
    setIsSearching(true);
    // Simulate domain search
    setTimeout(() => {
      setIsSearching(false);
      // In real implementation, this would check domain availability
    }, 1500);
  };

  useEffect(() => {
    const currentDomain = domains[currentDomainIndex];
    let timer: NodeJS.Timeout;

    // Don't animate if user is typing
    if (inputValue.length > 0) {
      return;
    }

    if (!isDeleting) {
      if (displayText.length < currentDomain.length) {
        timer = setTimeout(() => {
          setDisplayText(currentDomain.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentDomainIndex((prev) => (prev + 1) % domains.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentDomainIndex, inputValue]);

  useEffect(() => {
    // Set end date to 7 days from now
    const getEndDate = () => {
      const date = new Date();
      date.setDate(date.getDate() + 7);
      return date;
    };

    const tick = () => {
      const endDate = getEndDate();
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown("00D 00H 00M 00S");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const formatted = `${String(days).padStart(2, "0")}D ${String(hours).padStart(2, "0")}H ${String(minutes).padStart(2, "0")}M ${String(seconds).padStart(2, "0")}S`;
      setCountdown(formatted);
    };

    tick(); // Run immediately
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#11092A] text-white">
      {/* Top Banner */}
      <div className="sticky top-0 left-0 right-0 bg-[#EC1C65] text-white text-center py-4 text-base font-bold flex items-center justify-center gap-6 z-40 backdrop-blur-sm shadow-lg">
        <span>Don't miss the Black Friday deals</span>
        <motion.div 
          className="bg-white/20 px-4 py-1.5 rounded text-sm font-mono border border-black/20" 
          data-testid="countdown-timer" 
          style={{ boxSizing: 'content-box' }}
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.3)', '0 0 0px rgba(255,255,255,0)']
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {countdown}
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="pt-8 pb-20 lg:pt-12 lg:pb-20 relative overflow-hidden">
        
        {/* Background Grid/Glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
          <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#EC1C65]/10 rounded-full blur-[100px] opacity-30" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Domain Search Bar - Centered Top */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <label className="block text-slate-400 text-base font-medium mb-3 text-center">Find your domain</label>
            <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 transition-all duration-300 relative max-w-2xl mx-auto">
              <Search className="text-slate-400 mr-3 flex-shrink-0" size={20} />
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => e.key === "Enter" && handleDomainSearch()}
                  data-testid="domain-search-input"
                  placeholder={inputValue.length === 0 ? "" : ""}
                  className="w-full bg-transparent border-none outline-none text-[#1D1E2C] text-base relative z-10"
                  aria-label="Domain search input"
                />
                {inputValue.length === 0 && (
                  <div className="absolute inset-0 pointer-events-none flex items-center pl-0">
                    <span className="text-slate-400 font-medium text-base">
                      {displayText}
                      <span className="animate-pulse">|</span>
                    </span>
                  </div>
                )}
              </div>
              <Button 
                onClick={handleDomainSearch}
                disabled={!inputValue || !!domainError || isSearching}
                className="rounded-full px-8 h-11 bg-[#673DE6] hover:bg-[#542FD0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold flex-shrink-0"
              >
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </div>
            {domainError && (
              <div className="mt-2 text-center">
                <p className="text-red-300 text-sm">{domainError}</p>
              </div>
            )}
            <div className="mt-3 flex justify-center gap-3 text-xs font-medium flex-wrap">
              <span className="bg-white/10 text-white px-3 py-1 rounded-full">.com - US$ 0.01/1st yr</span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full">.online - US$ 0.99/1st yr</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual Impact - 85% OFF Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-full aspect-square max-w-[480px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#9F85FF] to-[#673DE6] drop-shadow-2xl filter tracking-[-0.04em]" style={{WebkitTextStroke: '0.8px rgba(159, 133, 255, 0.4)', textRendering: 'geometricPrecision'}}>
                    85<span className="text-[90px] align-top">%</span>
                  </h2>
                </div>
                <div className="absolute bottom-16 right-12 bg-[#673DE6] text-white text-4xl font-bold px-6 py-2 rounded-lg transform rotate-[-5deg] shadow-xl border-2 border-[#9F85FF]">
                  OFF
                </div>
              </div>
            </motion.div>

            {/* Right: Call to Action Content */}
            <div className="text-left order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="text-5xl md:text-6xl font-black tracking-[-0.02em] mb-4 leading-[1.1]" style={{textShadow: '0 0 30px rgba(236, 28, 101, 0.4), 0 0 60px rgba(103, 61, 230, 0.2)', WebkitTextStroke: '0.5px rgba(236, 28, 101, 0.3)', textRendering: 'geometricPrecision'}}>
                  Black Friday sale
                </h1>
                <p className="text-lg text-[#A5A5F5] mb-6 font-medium tracking-[-0.01em]">
                  Up to 85% off Hosting + Website Builder
                </p>
              </motion.div>
              
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3 mb-6"
              >
                <li className="flex items-center gap-3 text-base">
                  <Check className="text-[#00B090]" strokeWidth={3} size={20} />
                  Build your site fast with AI
                </li>
                <li className="flex items-center gap-3 text-base">
                  <Check className="text-[#00B090]" strokeWidth={3} size={20} />
                  Free domain included
                </li>
              </motion.ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-sm text-[#A5A5F5] mb-2 font-medium">From US$ 1.95/mo</div>
                <div className="text-xs text-[#A5A5F5] mb-5 flex items-center gap-2">
                  <span className="bg-[#EC1C65]/20 text-[#EC1C65] px-2 py-0.5 rounded font-bold">+3 months free</span>
                </div>
                
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Button 
                    size="lg" 
                    className="h-14 px-12 text-lg rounded-full bg-[#EC1C65] hover:bg-[#D01255] text-white font-bold shadow-lg shadow-[#EC1C65]/50 hover:shadow-2xl hover:shadow-[#EC1C65]/60 transition-all duration-300 w-full sm:w-auto mb-4" 
                    data-testid="hero-claim-deal"
                    aria-label="Claim Black Friday deal with 85% off"
                  >
                    Claim deal
                  </Button>
                </motion.div>
                
                <div className="flex items-center gap-2 text-sm text-[#A5A5F5]">
                  <Clock size={16} />
                  30-day money-back guarantee
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
