import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Code, CheckCircle, ChevronRight, Shield, Zap, Settings, Database, FileText, Download, Lock, Palette, PlugZap, Search, RefreshCw, Users, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function WordPressGuide() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    document.title = "Complete WordPress Hosting Guide - AxiomHost | Installation, Security & Optimization";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Master WordPress hosting with our complete guide. Learn installation, security hardening, performance optimization, plugin management, and troubleshooting for Nigerian websites.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "introduction", title: "Introduction to WordPress", icon: <Code className="w-4 h-4" /> },
    { id: "installation", title: "WordPress Installation", icon: <Download className="w-4 h-4" /> },
    { id: "themes", title: "Themes & Customization", icon: <Palette className="w-4 h-4" /> },
    { id: "plugins", title: "Essential Plugins", icon: <PlugZap className="w-4 h-4" /> },
    { id: "security", title: "Security Hardening", icon: <Shield className="w-4 h-4" /> },
    { id: "performance", title: "Speed Optimization", icon: <Zap className="w-4 h-4" /> },
    { id: "seo", title: "WordPress SEO", icon: <Search className="w-4 h-4" /> },
    { id: "backups", title: "Backup Strategies", icon: <Database className="w-4 h-4" /> },
    { id: "updates", title: "Updates & Maintenance", icon: <RefreshCw className="w-4 h-4" /> },
    { id: "troubleshooting", title: "Troubleshooting", icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#21759B] via-[#2D8BB5] to-[#21759B] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#00D4AA] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                Complete WordPress Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                WordPress Hosting Mastery
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Everything you need to know about WordPress hosting - from installation to optimization. Build, secure, and scale your WordPress website with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/wordpress-hosting">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#21759B] font-bold rounded-xl hover:bg-white/90 transition-all cursor-pointer">
                    Get WordPress Hosting
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/knowledge-base">
                  <span className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                    Browse Knowledge Base
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#1D1E2C] mb-4">Guide Contents</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm transition-all ${
                          activeSection === section.id
                            ? "bg-[#21759B] text-white font-medium"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {section.icon}
                        {section.title}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-8 p-4 bg-[#21759B]/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#21759B] mb-2">Need WordPress Help?</p>
                    <p className="text-xs text-slate-600 mb-3">Our experts are available 24/7 to assist with your WordPress site.</p>
                    <Link href="/contact">
                      <span className="text-xs font-semibold text-[#21759B] hover:underline cursor-pointer">Contact Support →</span>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-16">
                {/* Introduction */}
                <section id="introduction">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Introduction to WordPress</h2>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-slate-600 mb-6">
                        WordPress powers over 43% of all websites on the internet, making it the world's most popular content management system (CMS). From simple blogs to complex e-commerce stores, WordPress offers unmatched flexibility and ease of use.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-[#21759B]/5 to-[#21759B]/10 rounded-xl p-6">
                          <h4 className="font-bold text-[#1D1E2C] mb-3">WordPress.org (Self-Hosted)</h4>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Full control over your website
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Unlimited customization options
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Access to 60,000+ free plugins
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Use any theme you want
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-slate-50 rounded-xl p-6">
                          <h4 className="font-bold text-[#1D1E2C] mb-3">Why Choose WordPress?</h4>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              SEO-friendly out of the box
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Mobile-responsive themes
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Active community support
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              Regular security updates
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Installation */}
                <section id="installation">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">WordPress Installation</h2>
                    
                    <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                      <h3 className="text-xl font-bold text-[#1D1E2C] mb-4">One-Click Installation with Softaculous</h3>
                      <p className="text-slate-600 mb-6">
                        AxiomHost provides Softaculous auto-installer, making WordPress installation quick and easy. Follow these steps:
                      </p>
                      
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Log into cPanel", desc: "Access your cPanel dashboard using your hosting credentials" },
                          { step: 2, title: "Open Softaculous", desc: "Find and click on 'Softaculous Apps Installer' in the Software section" },
                          { step: 3, title: "Select WordPress", desc: "Click on WordPress from the list of available scripts" },
                          { step: 4, title: "Click Install Now", desc: "Click the 'Install Now' button to begin configuration" },
                          { step: 5, title: "Configure Settings", desc: "Enter your site name, admin username, password, and email" },
                          { step: 6, title: "Complete Installation", desc: "Click 'Install' and wait for the process to complete" },
                        ].map((item) => (
                          <div key={item.step} className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-[#21759B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {item.step}
                            </div>
                            <div>
                              <h4 className="font-semibold text-[#1D1E2C]">{item.title}</h4>
                              <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <h4 className="font-bold text-amber-800 mb-2">Important Security Tips</h4>
                      <ul className="space-y-2 text-sm text-amber-700">
                        <li>• Never use "admin" as your username</li>
                        <li>• Use a strong, unique password with at least 12 characters</li>
                        <li>• Save your login credentials in a secure password manager</li>
                        <li>• Enable two-factor authentication after installation</li>
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* Themes */}
                <section id="themes">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Themes & Customization</h2>
                    
                    <p className="text-slate-600 mb-6">
                      WordPress themes control the visual appearance and layout of your website. Choose a theme that matches your brand and provides the features you need.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {[
                        {
                          title: "Free Themes",
                          desc: "Access thousands of free themes from the WordPress.org repository",
                          features: ["Basic customization", "Community support", "Regular updates"]
                        },
                        {
                          title: "Premium Themes",
                          desc: "Professional themes with advanced features and dedicated support",
                          features: ["Advanced features", "Priority support", "Demo content"]
                        },
                        {
                          title: "Page Builders",
                          desc: "Visual drag-and-drop builders for custom layouts",
                          features: ["Elementor", "Divi Builder", "Beaver Builder"]
                        }
                      ].map((theme, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <h4 className="font-bold text-[#1D1E2C] mb-2">{theme.title}</h4>
                          <p className="text-sm text-slate-600 mb-4">{theme.desc}</p>
                          <ul className="space-y-1">
                            {theme.features.map((feature, i) => (
                              <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                                <ChevronRight className="w-3 h-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6">
                      <h4 className="font-bold text-[#1D1E2C] mb-3">Theme Best Practices</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Always use a child theme for customizations to preserve changes during updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Choose mobile-responsive themes for better user experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Check theme ratings and reviews before installing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Delete unused themes to reduce security risks</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* Plugins */}
                <section id="plugins">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Essential WordPress Plugins</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Plugins extend WordPress functionality. Here are the must-have plugins for every WordPress website:
                    </p>

                    <div className="space-y-6">
                      {[
                        {
                          category: "Security",
                          icon: <Shield className="w-5 h-5" />,
                          plugins: [
                            { name: "Wordfence Security", desc: "Firewall and malware scanner" },
                            { name: "Sucuri Security", desc: "Security auditing and monitoring" },
                            { name: "iThemes Security", desc: "30+ ways to secure your site" }
                          ]
                        },
                        {
                          category: "Performance",
                          icon: <Zap className="w-5 h-5" />,
                          plugins: [
                            { name: "WP Super Cache", desc: "Page caching for faster load times" },
                            { name: "Smush", desc: "Image compression and optimization" },
                            { name: "Autoptimize", desc: "Minify CSS, JS, and HTML" }
                          ]
                        },
                        {
                          category: "SEO",
                          icon: <Search className="w-5 h-5" />,
                          plugins: [
                            { name: "Yoast SEO", desc: "Complete SEO optimization" },
                            { name: "Rank Math", desc: "Advanced SEO with AI features" },
                            { name: "All in One SEO", desc: "Beginner-friendly SEO plugin" }
                          ]
                        },
                        {
                          category: "Backup",
                          icon: <Database className="w-5 h-5" />,
                          plugins: [
                            { name: "UpdraftPlus", desc: "Scheduled backups to cloud storage" },
                            { name: "BackWPup", desc: "Complete backup solution" },
                            { name: "Duplicator", desc: "Backup and migration tool" }
                          ]
                        }
                      ].map((cat, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-[#21759B]/10 flex items-center justify-center text-[#21759B]">
                              {cat.icon}
                            </div>
                            <h4 className="font-bold text-[#1D1E2C]">{cat.category} Plugins</h4>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            {cat.plugins.map((plugin, i) => (
                              <div key={i} className="bg-slate-50 rounded-lg p-4">
                                <p className="font-semibold text-[#1D1E2C] text-sm">{plugin.name}</p>
                                <p className="text-xs text-slate-500 mt-1">{plugin.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                      <h4 className="font-bold text-red-800 mb-2">Plugin Safety Tips</h4>
                      <ul className="space-y-2 text-sm text-red-700">
                        <li>• Only install plugins from trusted sources (WordPress.org or reputable developers)</li>
                        <li>• Keep all plugins updated to the latest versions</li>
                        <li>• Remove inactive plugins to reduce security vulnerabilities</li>
                        <li>• Avoid using nulled or pirated premium plugins</li>
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* Security */}
                <section id="security">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">WordPress Security Hardening</h2>
                    
                    <p className="text-slate-600 mb-6">
                      WordPress sites are common targets for hackers. Follow these security best practices to protect your website:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        {
                          title: "Strong Login Security",
                          items: [
                            "Use unique, complex passwords",
                            "Enable two-factor authentication",
                            "Limit login attempts",
                            "Change default login URL"
                          ]
                        },
                        {
                          title: "Keep Everything Updated",
                          items: [
                            "Update WordPress core regularly",
                            "Keep themes and plugins current",
                            "Enable automatic updates",
                            "Use staging for testing updates"
                          ]
                        },
                        {
                          title: "Secure Your Files",
                          items: [
                            "Set correct file permissions",
                            "Disable file editing in wp-admin",
                            "Protect wp-config.php",
                            "Disable directory browsing"
                          ]
                        },
                        {
                          title: "Database Security",
                          items: [
                            "Change default table prefix",
                            "Use strong database password",
                            "Regular database backups",
                            "Limit database privileges"
                          ]
                        }
                      ].map((section, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-6">
                          <h4 className="font-bold text-[#1D1E2C] mb-4 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-[#21759B]" />
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#21759B]/5 rounded-xl p-6 border border-[#21759B]/20">
                      <h4 className="font-bold text-[#21759B] mb-2">SSL Certificate Required</h4>
                      <p className="text-slate-600 text-sm">
                        All AxiomHost plans include free SSL certificates. Ensure HTTPS is enabled for your WordPress site to encrypt data transmission and improve SEO rankings.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Performance */}
                <section id="performance">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">WordPress Speed Optimization</h2>
                    
                    <p className="text-slate-600 mb-6">
                      A fast website improves user experience, reduces bounce rates, and boosts SEO rankings. Here's how to optimize your WordPress site:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Caching Strategies</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-slate-50 rounded-lg">
                            <p className="font-semibold text-[#1D1E2C]">Page Caching</p>
                            <p className="text-xs text-slate-500 mt-1">Store static HTML versions of pages</p>
                          </div>
                          <div className="text-center p-4 bg-slate-50 rounded-lg">
                            <p className="font-semibold text-[#1D1E2C]">Browser Caching</p>
                            <p className="text-xs text-slate-500 mt-1">Store assets in visitor's browser</p>
                          </div>
                          <div className="text-center p-4 bg-slate-50 rounded-lg">
                            <p className="font-semibold text-[#1D1E2C]">Object Caching</p>
                            <p className="text-xs text-slate-500 mt-1">Cache database queries in memory</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Image Optimization</h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Compress images before uploading using tools like TinyPNG or Smush</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Use WebP format for 25-35% smaller file sizes</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Enable lazy loading for images below the fold</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Specify image dimensions to prevent layout shifts</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Code Optimization</h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Minify CSS, JavaScript, and HTML files</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Combine multiple CSS/JS files to reduce HTTP requests</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Defer non-critical JavaScript loading</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Remove unused CSS and JavaScript code</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* SEO */}
                <section id="seo">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">WordPress SEO Guide</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Optimize your WordPress site for search engines to increase organic traffic and visibility.
                    </p>

                    <div className="space-y-6">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Technical SEO Settings</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-[#1D1E2C] text-sm mb-2">Permalink Structure</p>
                            <p className="text-sm text-slate-600">Use SEO-friendly URLs: <code className="bg-slate-200 px-2 py-0.5 rounded">/%postname%/</code></p>
                          </div>
                          <div>
                            <p className="font-medium text-[#1D1E2C] text-sm mb-2">XML Sitemap</p>
                            <p className="text-sm text-slate-600">Submit your sitemap to Google Search Console</p>
                          </div>
                          <div>
                            <p className="font-medium text-[#1D1E2C] text-sm mb-2">Robots.txt</p>
                            <p className="text-sm text-slate-600">Configure to allow search engine crawling</p>
                          </div>
                          <div>
                            <p className="font-medium text-[#1D1E2C] text-sm mb-2">Mobile Responsiveness</p>
                            <p className="text-sm text-slate-600">Ensure your theme works on all devices</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">On-Page SEO Checklist</h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Use focus keywords in titles, headings, and content</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Write compelling meta descriptions (150-160 characters)</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Use proper heading hierarchy (H1, H2, H3)</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Add alt text to all images</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Include internal and external links</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Backups */}
                <section id="backups">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">WordPress Backup Strategies</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Regular backups are essential for protecting your WordPress site from data loss, hacking, or accidental changes.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">What to Backup</h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-center gap-3">
                            <FileText className="w-4 h-4 text-[#21759B]" />
                            <span>WordPress files (themes, plugins, uploads)</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <Database className="w-4 h-4 text-[#21759B]" />
                            <span>MySQL database (all content and settings)</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <Settings className="w-4 h-4 text-[#21759B]" />
                            <span>wp-config.php and .htaccess</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Backup Schedule</h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Daily for active sites with frequent updates</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Weekly for standard websites</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Before any major updates or changes</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#21759B]/10 rounded-xl p-6">
                      <h4 className="font-bold text-[#21759B] mb-3">AxiomHost Backup Features</h4>
                      <p className="text-slate-600 text-sm mb-4">
                        All AxiomHost WordPress plans include automatic daily backups with JetBackup, giving you one-click restore capability.
                      </p>
                      <Link href="/cpanel-guide">
                        <span className="text-sm font-semibold text-[#21759B] hover:underline cursor-pointer">Learn about cPanel backups →</span>
                      </Link>
                    </div>
                  </motion.div>
                </section>

                {/* Updates */}
                <section id="updates">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Updates & Maintenance</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Regular maintenance keeps your WordPress site secure, fast, and running smoothly.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 mb-6">
                      <h4 className="font-bold text-[#1D1E2C] mb-4">Monthly Maintenance Checklist</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Update WordPress core",
                          "Update all themes",
                          "Update all plugins",
                          "Check for broken links",
                          "Review security logs",
                          "Optimize database",
                          "Test contact forms",
                          "Check page speed",
                          "Review analytics",
                          "Test site backups"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded border-2 border-slate-300"></div>
                            <span className="text-sm text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <h4 className="font-bold text-amber-800 mb-2">Before Updating</h4>
                      <p className="text-sm text-amber-700">
                        Always create a full backup before updating WordPress core, themes, or plugins. Test updates on a staging site first if possible.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Troubleshooting */}
                <section id="troubleshooting">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Common WordPress Issues & Fixes</h2>

                    <div className="space-y-4">
                      {[
                        {
                          issue: "White Screen of Death (WSOD)",
                          solution: "Disable plugins via FTP, increase PHP memory limit, enable debug mode to identify the issue"
                        },
                        {
                          issue: "500 Internal Server Error",
                          solution: "Check .htaccess file, increase PHP memory, check file permissions, review error logs"
                        },
                        {
                          issue: "Error Establishing Database Connection",
                          solution: "Verify database credentials in wp-config.php, check if MySQL service is running"
                        },
                        {
                          issue: "Too Many Redirects",
                          solution: "Clear browser cookies, check WordPress and Site URL settings, check .htaccess for redirect loops"
                        },
                        {
                          issue: "Maximum Upload Size Exceeded",
                          solution: "Increase upload_max_filesize and post_max_size in php.ini or use .htaccess"
                        },
                        {
                          issue: "Permalinks Not Working",
                          solution: "Re-save permalinks in Settings, check if mod_rewrite is enabled, regenerate .htaccess"
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
                          <h4 className="font-bold text-red-600 mb-2">{item.issue}</h4>
                          <p className="text-slate-600 text-sm"><strong>Fix:</strong> {item.solution}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 bg-[#21759B]/10 rounded-xl p-6 text-center">
                      <Users className="w-10 h-10 text-[#21759B] mx-auto mb-3" />
                      <h4 className="font-bold text-[#1D1E2C] mb-2">Need More Help?</h4>
                      <p className="text-slate-600 text-sm mb-4">
                        Our WordPress experts are available 24/7 to help you resolve any issues.
                      </p>
                      <Link href="/contact">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#21759B] text-white font-bold rounded-xl hover:bg-[#1a5f7d] transition-colors cursor-pointer">
                          Contact Support
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1D1E2C] mb-8 text-center">Related Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "cPanel Guide", href: "/cpanel-guide", icon: <Settings className="w-5 h-5" /> },
                { title: "Security Guide", href: "/security-guide", icon: <Shield className="w-5 h-5" /> },
                { title: "SEO Guide", href: "/seo-guide", icon: <Search className="w-5 h-5" /> },
                { title: "Knowledge Base", href: "/knowledge-base", icon: <Globe className="w-5 h-5" /> }
              ].map((guide, index) => (
                <Link key={index} href={guide.href}>
                  <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#21759B]/10 flex items-center justify-center text-[#21759B] mx-auto mb-3">
                      {guide.icon}
                    </div>
                    <p className="font-semibold text-[#1D1E2C]">{guide.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
