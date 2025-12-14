import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X, Cloud, ChevronDown, ShoppingCart, Globe, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MenuItem {
  icon?: string;
  name: string;
  desc: string;
  badge?: "AI" | "Popular" | "NEW";
}

import { LANGUAGES, getCountryName, detectBrowserLanguage } from "@/lib/languages";

export default function Navbar() {
  const [, setLocation] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  useEffect(() => {
    // Auto-detect browser language
    const browserLang = detectBrowserLanguage();
    const langEntry = LANGUAGES.find((l) => l.code === browserLang);
    if (langEntry) {
      setSelectedLanguage(langEntry.native);
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesMenu = {
    HOSTING: [
      { icon: "📝", name: "NH cPanel Hosting", desc: "Reliable hosting with easy-to-use control panel management" },
      { icon: "⚙️", name: "Direct Admin Hosting", desc: "Lightweight, fast, and feature-rich hosting solution" },
      { icon: "🔵", name: "NH WordPress Hosting", desc: "Optimized performance for WordPress websites" },
    ] as MenuItem[],
    DEVELOPMENT: [
      { icon: "🎨", name: "Web Development", desc: "Custom websites built for your business needs" },
      { icon: "🛒", name: "Reseller Hosting", desc: "Start your hosting business with white-label solutions" },
      { icon: "☁️", name: "Managed Hosting", desc: "Enterprise-grade hosting with dedicated support" },
    ] as MenuItem[],
    SECURITY: [
      { icon: "🔐", name: "Premium VPN Services", desc: "Secure, fast, and private browsing with VPN access" },
    ] as MenuItem[],
    DOMAINS: [
      { icon: "🔍", name: "Domain name search", desc: "Find and register your website address" },
      { icon: "🔄", name: "Domain transfer", desc: "Transfer a domain to AxiomHost, fast" },
    ] as MenuItem[],
  };

  const exploreMenu = [
    { icon: "📚", name: "Blog", desc: "Our latest news and updates" },
    { icon: "⭐", name: "Features and tools", desc: "Latest product releases and features" },
    { icon: "📖", name: "Our story", desc: "How we got here and where we're going" },
    { icon: "📜", name: "Client stories", desc: "Our clients' successes are our favorite stories" },
  ] as MenuItem[];

  const supportMenu = [
    { icon: "📚", name: "Knowledge Base", desc: "Comprehensive hosting guides and FAQs" },
    { icon: "🎓", name: "Tutorials", desc: "Videos and articles for your online success" },
    { icon: "💬", name: "Contact", desc: "How to reach us" },
  ] as MenuItem[];

  const guidesMenu = [
    { icon: "🌐", name: "Web Hosting Guide", desc: "Complete beginner's guide to web hosting" },
    { icon: "📝", name: "WordPress Guide", desc: "Everything about WordPress hosting" },
    { icon: "⚙️", name: "cPanel Tutorial", desc: "Master your hosting control panel" },
    { icon: "🔒", name: "Security Guide", desc: "Protect your website from threats" },
    { icon: "🌍", name: "DNS Management", desc: "Manage domains and DNS records" },
    { icon: "📊", name: "SEO & Performance", desc: "Optimize your site for search engines" },
  ] as MenuItem[];

  const MegaMenuLink = ({ item, hasBadge }: { item: MenuItem; hasBadge?: boolean }) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      
      if (item.name === "VPS hosting") {
        setLocation("/vps-hosting");
      } else if (item.name === "Business email") {
        setLocation("/business-email");
      } else if (item.name === "Domain name search") {
        setLocation("/domain-search");
      } else if (item.name === "Domain transfer") {
        setLocation("/domain-transfer");
      } else if (item.name === "NH cPanel Hosting") {
        setLocation("/cpanel-hosting");
      } else if (item.name === "Direct Admin Hosting") {
        setLocation("/direct-admin-hosting");
      } else if (item.name === "NH WordPress Hosting") {
        setLocation("/wordpress-hosting");
      } else if (item.name === "Web Development") {
        setLocation("/web-development");
      } else if (item.name === "Reseller Hosting") {
        setLocation("/reseller-hosting");
      } else if (item.name === "Managed Hosting") {
        setLocation("/managed-hosting");
      } else if (item.name === "Premium VPN Services") {
        setLocation("/premium-vpn");
      } else if (item.name === "Knowledge Base") {
        setLocation("/help");
      } else if (item.name === "Tutorials") {
        setLocation("/tutorials");
      } else if (item.name === "Contact") {
        setLocation("/contact");
      } else if (item.name === "Blog") {
        setLocation("/blog");
      } else if (item.name === "Features and tools") {
        setLocation("/features-roadmap");
      } else if (item.name === "Our story") {
        setLocation("/about");
      } else if (item.name === "Client stories") {
        setLocation("/client-stories");
      } else if (item.name === "Web Hosting Guide") {
        setLocation("/web-hosting-guide");
      } else if (item.name === "WordPress Guide") {
        setLocation("/wordpress-guide");
      } else if (item.name === "cPanel Tutorial") {
        setLocation("/cpanel-guide");
      } else if (item.name === "Security Guide") {
        setLocation("/security-guide");
      } else if (item.name === "DNS Management") {
        setLocation("/dns-guide");
      } else if (item.name === "SEO & Performance") {
        setLocation("/seo-guide");
      }
      
      setActiveMenu(null);
    };

    return (
      <a
        href="#"
        onClick={handleClick}
        className="group flex gap-4 p-4 -mx-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span className="text-5xl flex-shrink-0">{item.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="font-bold text-lg group-hover:text-[#673DE6] transition-colors text-slate-900" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
              {item.name}
            </div>
            {item.badge && (
              <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase whitespace-nowrap ${
                item.badge === "NEW" 
                  ? "bg-[#10B981]/20 text-[#047857]"
                  : item.badge === "Popular"
                  ? "bg-[#3B82F6]/20 text-[#1E40AF]"
                  : "bg-[#673DE6]/20 text-[#5B21B6]"
              }`}>
                {item.badge}
              </span>
            )}
          </div>
          <p className="text-base text-slate-600">
            {item.desc}
          </p>
        </div>
      </a>
    );
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 ${
          isSticky ? "border-b border-slate-800 shadow-lg" : "border-b border-slate-800"
        }`}
      >
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 cursor-pointer group flex-shrink-0 relative" data-testid="link-home">
              {/* Snow Animation */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-white text-opacity-80 animate-snowfall"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  >
                    ❄️
                  </div>
                ))}
              </div>
              <span className="text-xl lg:text-3xl font-black tracking-tight text-white hidden sm:block relative z-10">
                AXIOM<span className="text-[#EC1C65]">HOST</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {/* Pricing - Direct Link */}
              <a
                href="/pricing"
                className="text-sm lg:text-base font-semibold text-white hover:text-[#EC1C65] transition-colors"
                data-testid="nav-pricing"
              >
                Pricing
              </a>

              {/* Services - Mega Menu */}
              <div
                onMouseEnter={() => setActiveMenu("services")}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative group"
              >
                <button
                  className="flex items-center gap-1.5 text-sm lg:text-base font-semibold text-white hover:text-[#EC1C65] transition-colors py-2"
                  data-testid="nav-services"
                >
                  Services
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180 text-[#EC1C65]" : ""}`} 
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed top-20 left-0 right-0 w-screen"
                      onMouseEnter={() => setActiveMenu("services")}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <div className="shadow-2xl overflow-hidden" style={{ backdropFilter: 'blur(30px)', backgroundColor: 'rgba(240, 241, 245, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.5)' }}>
                        <div className="max-w-7xl mx-auto px-12 py-16">
                          <div className="grid grid-cols-3 gap-16">
                            {/* HOSTING Column */}
                            <div>
                              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-8" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>Hosting</h3>
                              <div className="space-y-7">
                                {servicesMenu.HOSTING.map((item, i) => (
                                  <MegaMenuLink key={i} item={item} />
                                ))}
                              </div>
                            </div>

                            {/* DEVELOPMENT Column */}
                            <div>
                              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-8" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>Development</h3>
                              <div className="space-y-7">
                                {servicesMenu.DEVELOPMENT.map((item, i) => (
                                  <MegaMenuLink key={i} item={item} />
                                ))}
                              </div>
                            </div>

                            {/* SECURITY & DOMAINS Column */}
                            <div>
                              <div className="mb-12">
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-8" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>Security</h3>
                                <div className="space-y-7">
                                  {servicesMenu.SECURITY.map((item, i) => (
                                    <MegaMenuLink key={i} item={item} />
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-8" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>Domains</h3>
                                <div className="space-y-7">
                                  {servicesMenu.DOMAINS.map((item, i) => (
                                    <MegaMenuLink key={i} item={item} />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Explore - Mega Menu */}
              <div
                onMouseEnter={() => setActiveMenu("explore")}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative group"
              >
                <button
                  className="flex items-center gap-1.5 text-sm lg:text-base font-semibold text-white hover:text-[#EC1C65] transition-colors py-2"
                  data-testid="nav-explore"
                >
                  Explore
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${activeMenu === "explore" ? "rotate-180 text-[#EC1C65]" : ""}`} 
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === "explore" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed top-20 left-0 right-0 w-screen"
                      onMouseEnter={() => setActiveMenu("explore")}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <div className="shadow-2xl overflow-hidden" style={{ backdropFilter: 'blur(30px)', backgroundColor: 'rgba(240, 241, 245, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.5)' }}>
                        <div className="max-w-7xl mx-auto px-12 py-16">
                          <div className="grid grid-cols-2 gap-16">
                            <div className="space-y-7">
                              {exploreMenu.map((item, i) => (
                                <MegaMenuLink key={i} item={item} />
                              ))}
                            </div>
                            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 flex flex-col justify-between border border-slate-300" style={{ backdropFilter: 'blur(10px)' }}>
                              <div>
                                <div className="text-5xl mb-4">📖</div>
                                <h4 className="font-bold text-xl text-black mb-3" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>Learn from our stories</h4>
                                <p className="text-base text-slate-600">Discover how customers build their success with AxiomHost</p>
                              </div>
                              <a 
                                href="/client-stories" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  setLocation("/client-stories");
                                  setActiveMenu(null);
                                }}
                                className="text-[#673DE6] font-semibold text-base mt-6 inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                              >
                                Read stories <ArrowUpRight size={18} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Support - Mega Menu */}
              <div
                onMouseEnter={() => setActiveMenu("support")}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative group"
              >
                <button
                  className="flex items-center gap-1.5 text-sm lg:text-base font-semibold text-white hover:text-[#EC1C65] transition-colors py-2"
                  data-testid="nav-support"
                >
                  Support
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${activeMenu === "support" ? "rotate-180 text-[#EC1C65]" : ""}`} 
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === "support" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed top-20 left-0 right-0 w-screen"
                      onMouseEnter={() => setActiveMenu("support")}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <div className="shadow-2xl overflow-hidden" style={{ backdropFilter: 'blur(30px)', backgroundColor: 'rgba(240, 241, 245, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.5)' }}>
                        <div className="max-w-7xl mx-auto px-12 py-16">
                          <div className="grid grid-cols-3 gap-16">
                            <div>
                              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-8" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>Support</h3>
                              <div className="space-y-7">
                                {supportMenu.map((item, i) => (
                                  <MegaMenuLink key={i} item={item} />
                                ))}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-8" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>Guides</h3>
                              <div className="space-y-7">
                                {guidesMenu.map((item, i) => (
                                  <MegaMenuLink key={i} item={item} />
                                ))}
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 flex flex-col justify-between border border-slate-300" style={{ backdropFilter: 'blur(10px)' }}>
                              <div>
                                <div className="text-5xl mb-4">🚀</div>
                                <h4 className="font-bold text-xl text-black mb-3" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>Get started guide</h4>
                                <p className="text-base text-slate-600">A step-by-step guide to building and launching a website</p>
                              </div>
                              <a 
                                href="/web-hosting-guide" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  setLocation("/web-hosting-guide");
                                  setActiveMenu(null);
                                }}
                                className="text-[#673DE6] font-semibold text-base mt-6 inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                              >
                                Read the beginner's guide <ArrowUpRight size={18} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Self-hosted n8n - Direct Link */}
              <a
                href="#n8n"
                className="text-sm lg:text-base font-semibold text-white hover:text-[#EC1C65] transition-colors"
                data-testid="nav-n8n"
              >
                Self-hosted n8n
              </a>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-4 relative">
              <button 
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-2 text-white hover:text-[#EC1C65] transition-colors px-3 py-2 rounded-lg hover:bg-slate-700" 
                data-testid="button-language"
              >
                <Globe size={18} />
                <span className="text-sm font-semibold">{selectedLanguage}</span>
              </button>
              
              {/* Language Dropdown */}
              <AnimatePresence>
                {langDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 w-80 max-h-96 overflow-y-auto"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-[#1E293B] mb-3 px-2">Choose your language</h3>
                      <input 
                        type="text" 
                        placeholder="Search language..." 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#673DE6]"
                      />
                      <div className="space-y-1">
                        {LANGUAGES.map((lang, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedLanguage(lang.native);
                              setLangDropdown(false);
                              // Store language preference
                              localStorage.setItem("selectedLanguage", lang.native);
                              localStorage.setItem("selectedCode", lang.code);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                              selectedLanguage === lang.native
                                ? "bg-[#673DE6]/10 text-[#673DE6] font-medium"
                                : "text-[#1E293B] hover:bg-slate-50"
                            }`}
                            data-testid={`lang-option-${lang.code}-${lang.country}`}
                          >
                            <div>
                              <div className="font-medium">{lang.native}</div>
                              <div className="text-xs text-slate-500">{getCountryName(lang.country)}</div>
                            </div>
                            {selectedLanguage === lang.native && (
                              <span className="text-[#673DE6]">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close dropdown when clicking outside */}
              {langDropdown && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdown(false)}
                />
              )}


              
              <a 
                href="https://my.axiomhost.cloud/index.php?rp=/login"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 lg:px-7 py-2.5 lg:py-3 text-sm lg:text-base font-semibold transition-all hover:shadow-lg" 
                style={{ 
                  backdropFilter: 'blur(15px)',
                  backgroundColor: 'rgba(240, 241, 245, 0.8)',
                  color: '#1E293B',
                  border: '1px solid rgba(255, 255, 255, 0.6)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(240, 241, 245, 0.95)';
                  e.currentTarget.style.color = '#EC1C65';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(240, 241, 245, 0.8)';
                  e.currentTarget.style.color = '#1E293B';
                }}
                data-testid="button-my-account"
              >
                My account
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white p-2 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="px-6 py-6 space-y-2">
                {/* Pricing Link */}
                <a
                  href="/pricing"
                  className="block px-4 py-3 text-base font-medium text-white hover:text-[#EC1C65] hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Pricing
                </a>

                {/* Services Accordion */}
                <div>
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === "services" ? null : "services")}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white hover:text-[#EC1C65] hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Services
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform ${expandedMobile === "services" ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {expandedMobile === "services" && (
                    <div className="bg-slate-800 rounded-lg mt-2 p-4 space-y-5">
                      {Object.entries(servicesMenu).map(([category, items]) => (
                        <div key={category}>
                          <h4 className="text-xs font-bold uppercase text-[#EC1C65] mb-3 tracking-wide">{category}</h4>
                          <ul className="space-y-2 ml-2">
                            {items.map((item, i) => (
                              <li key={i}>
                                <a 
                                  href="#" 
                                  onClick={(e) => {
                                    if (item.name === "VPS hosting") {
                                      e.preventDefault();
                                      setMobileOpen(false);
                                      setLocation("/vps-hosting");
                                    } else if (item.name === "Business email") {
                                      e.preventDefault();
                                      setMobileOpen(false);
                                      setLocation("/business-email");
                                    } else if (item.name === "Domain name search") {
                                      e.preventDefault();
                                      setMobileOpen(false);
                                      setLocation("/domain-search");
                                    } else if (item.name === "Domain transfer") {
                                      e.preventDefault();
                                      setMobileOpen(false);
                                      setLocation("/domain-transfer");
                                    }
                                  }}
                                  className="flex items-start gap-2 text-sm text-white hover:text-[#EC1C65] transition-colors py-1 cursor-pointer"
                                >
                                  <span className="text-lg mt-0.5">{item.icon}</span>
                                  <div className="flex-1">
                                    <div className="font-medium flex items-center gap-2">
                                      {item.name}
                                      {item.badge && (
                                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                                          item.badge === "NEW" 
                                            ? "bg-[#10B981]/10 text-[#10B981]"
                                            : item.badge === "Popular"
                                            ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                                            : "bg-[#673DE6]/10 text-[#673DE6]"
                                        }`}>
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Explore Accordion */}
                <div>
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === "explore" ? null : "explore")}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white hover:text-[#EC1C65] hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Explore
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform ${expandedMobile === "explore" ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {expandedMobile === "explore" && (
                    <div className="bg-slate-800 rounded-lg mt-2 p-4 space-y-2 ml-2">
                      {exploreMenu.map((item, i) => (
                        <a 
                          key={i} 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileOpen(false);
                            if (item.name === "Blog") setLocation("/blog");
                            else if (item.name === "Features and tools") setLocation("/features-roadmap");
                            else if (item.name === "Our story") setLocation("/about");
                            else if (item.name === "Client stories") setLocation("/client-stories");
                          }}
                          className="flex items-start gap-2 text-sm text-white hover:text-[#EC1C65] transition-colors py-2 cursor-pointer"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium">{item.name}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Support Accordion */}
                <div>
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === "support" ? null : "support")}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white hover:text-[#EC1C65] hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Support
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform ${expandedMobile === "support" ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {expandedMobile === "support" && (
                    <div className="bg-slate-800 rounded-lg mt-2 p-4 space-y-2 ml-2">
                      {supportMenu.map((item, i) => (
                        <a 
                          key={i} 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileOpen(false);
                            if (item.name === "Knowledge Base") setLocation("/help");
                            else if (item.name === "Tutorials") setLocation("/tutorials");
                            else if (item.name === "Contact") setLocation("/contact");
                          }}
                          className="flex items-start gap-2 text-sm text-white hover:text-[#EC1C65] transition-colors py-2 cursor-pointer"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium">{item.name}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Links */}
                <a
                  href="#n8n"
                  className="block px-4 py-3 text-base font-medium text-white hover:text-[#EC1C65] hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Self-hosted n8n
                </a>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-700 space-y-3">
                  <a
                    href="/dashboard"
                    className="block text-center px-4 py-3 text-base font-medium text-white border border-white hover:border-[#EC1C65] hover:text-[#EC1C65] rounded-full transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    My account
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
