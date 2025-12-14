import { useEffect } from "react";
import { useLocation } from "wouter";
import { Server, Globe, Shield, Zap, Cloud, Database, ChevronRight, CheckCircle2, HelpCircle, ArrowRight, BookOpen, Users, Lock, Cpu } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function WebHostingGuide() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Complete Web Hosting Guide 2024 - AxiomHost | Everything You Need to Know";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn everything about web hosting: types, features, how to choose the right plan, setup guides, and expert tips. Complete beginner's guide to web hosting for Nigerian businesses.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Learn everything about web hosting: types, features, how to choose the right plan, setup guides, and expert tips. Complete beginner's guide to web hosting for Nigerian businesses.";
      document.head.appendChild(meta);
    }
    
    window.scrollTo(0, 0);
  }, []);

  const hostingTypes = [
    {
      icon: <Server className="w-8 h-8" />,
      name: "Shared Hosting",
      description: "Multiple websites share server resources. Perfect for beginners and small websites with moderate traffic.",
      bestFor: "Personal blogs, small business websites, portfolios",
      priceRange: "₦500 - ₦3,000/month",
      pros: ["Most affordable option", "Easy to manage", "No technical expertise needed", "Includes cPanel"],
      cons: ["Limited resources", "Performance affected by other sites", "Less customization"],
      link: "/pricing"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: "VPS Hosting",
      description: "Dedicated virtual server with guaranteed resources. Great for growing websites needing more power.",
      bestFor: "Medium businesses, high-traffic blogs, e-commerce stores",
      priceRange: "₦2,999 - ₦15,000/month",
      pros: ["Dedicated resources", "Full root access", "Better performance", "Scalable"],
      cons: ["Requires technical knowledge", "Higher cost", "Self-managed or managed options"],
      link: "/vps-hosting"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      name: "Cloud Hosting",
      description: "Resources from multiple servers with automatic scaling. Ideal for unpredictable traffic patterns.",
      bestFor: "Growing businesses, applications, high-availability needs",
      priceRange: "₦5,000 - ₦50,000/month",
      pros: ["Auto-scaling", "High availability", "Pay for what you use", "No single point of failure"],
      cons: ["Complex pricing", "Can get expensive", "May require expertise"],
      link: "/cloud-hosting"
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Dedicated Server",
      description: "Entire physical server for your exclusive use. Maximum power, security, and customization.",
      bestFor: "Large enterprises, high-traffic sites, specific compliance needs",
      priceRange: "₦50,000 - ₦500,000/month",
      pros: ["Maximum performance", "Complete control", "No resource sharing", "Highest security"],
      cons: ["Most expensive", "Requires expert management", "Hardware responsibility"],
      link: "/contact"
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Reseller Hosting",
      description: "Buy hosting in bulk and sell to clients. Start your own web hosting business.",
      bestFor: "Web designers, agencies, entrepreneurs",
      priceRange: "₦5,000 - ₦25,000/month",
      pros: ["Start hosting business", "White-label branding", "WHM control panel", "Recurring income"],
      cons: ["Customer support responsibility", "Need marketing skills", "Competition"],
      link: "/reseller-hosting"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      name: "WordPress Hosting",
      description: "Hosting optimized specifically for WordPress websites with enhanced performance and security.",
      bestFor: "WordPress websites, blogs, WooCommerce stores",
      priceRange: "₦1,500 - ₦10,000/month",
      pros: ["WordPress optimized", "Auto updates", "Staging environment", "Enhanced security"],
      cons: ["Only for WordPress", "May have limitations", "Premium features cost more"],
      link: "/wordpress-hosting"
    }
  ];

  const essentialFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "SSD Storage",
      description: "Solid State Drives are up to 10x faster than traditional hard drives. Essential for fast website loading."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Free SSL Certificate",
      description: "Encrypts data between visitors and your website. Required for HTTPS and builds trust with customers."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Unlimited Bandwidth",
      description: "No limits on data transfer. Your website can handle traffic spikes without extra charges."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "99.9% Uptime Guarantee",
      description: "Your website stays online. Downtime means lost visitors and revenue."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Daily Backups",
      description: "Automatic daily backups protect your data. Easily restore if anything goes wrong."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Expert help whenever you need it. Quick response times for urgent issues."
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: "Choose Your Hosting Plan",
      description: "Select a hosting plan based on your website needs, expected traffic, and budget. Start small and upgrade as you grow.",
      tips: ["Consider your traffic expectations", "Check storage and bandwidth limits", "Look for scalability options"]
    },
    {
      step: 2,
      title: "Register Your Domain Name",
      description: "Choose a memorable domain name that represents your brand. We offer free domain registration with annual plans.",
      tips: ["Keep it short and memorable", "Use .com if possible", "Avoid numbers and hyphens"]
    },
    {
      step: 3,
      title: "Point Domain to Nameservers",
      description: "Update your domain's nameservers to point to your hosting account. This connects your domain to your hosting.",
      tips: ["Propagation takes 24-48 hours", "Use our nameservers", "Don't change settings during propagation"]
    },
    {
      step: 4,
      title: "Access Your Control Panel",
      description: "Log into cPanel to manage your hosting account. Create email accounts, databases, and install applications.",
      tips: ["Save your login credentials", "Explore File Manager", "Set up email accounts first"]
    },
    {
      step: 5,
      title: "Install Your Website",
      description: "Use one-click installers for WordPress, Joomla, or upload your custom website files via File Manager or FTP.",
      tips: ["WordPress recommended for beginners", "Use Softaculous for easy installs", "Set up staging for testing"]
    },
    {
      step: 6,
      title: "Configure SSL & Security",
      description: "Install your free SSL certificate and enable security features to protect your website and visitors.",
      tips: ["Force HTTPS redirect", "Enable firewall rules", "Set strong passwords"]
    }
  ];

  const faqs = [
    {
      question: "What is web hosting?",
      answer: "Web hosting is a service that stores your website files on a server connected to the internet. When someone types your domain name, the server delivers your website to their browser. Think of hosting as renting space on the internet for your website."
    },
    {
      question: "What's the difference between domain and hosting?",
      answer: "A domain is your website's address (like axiomhost.com), while hosting is the storage space where your website files live. You need both to have a working website - the domain tells visitors where to go, and hosting provides what they see."
    },
    {
      question: "How much hosting do I need?",
      answer: "For most small websites and blogs, shared hosting with 10GB storage is sufficient. If you expect more than 50,000 monthly visitors, have an e-commerce store, or run resource-intensive applications, consider VPS or cloud hosting."
    },
    {
      question: "What is bandwidth and how much do I need?",
      answer: "Bandwidth is the amount of data transferred between your website and visitors. A small blog might use 5GB/month, while an active e-commerce site could use 50GB+. Most shared hosting plans include unlimited or high bandwidth limits."
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer: "Yes! You can upgrade your hosting plan anytime as your website grows. AxiomHost makes it easy to scale from shared hosting to VPS or dedicated servers without downtime or data loss."
    },
    {
      question: "What is an SSL certificate and do I need one?",
      answer: "SSL encrypts data between your website and visitors, showing a padlock in the browser. Yes, you absolutely need one - it protects user data, improves SEO rankings, and builds trust. We include free SSL with all plans."
    },
    {
      question: "How long does it take to set up hosting?",
      answer: "Account activation is instant. Domain propagation takes 24-48 hours. Installing WordPress or another CMS takes about 5 minutes. You could have a basic website live within an hour of signing up."
    },
    {
      question: "What is cPanel?",
      answer: "cPanel is a web-based control panel for managing your hosting account. It provides easy-to-use tools for creating emails, managing files, installing applications, viewing statistics, and more - all without technical knowledge."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#673DE6] to-[#EC1C65] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Complete Beginner's Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Web Hosting Guide 2024
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Everything you need to know about web hosting: from choosing the right plan to launching your website. A comprehensive guide for beginners and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/pricing")}
                  className="px-8 py-4 bg-white text-[#673DE6] font-bold rounded-full hover:bg-slate-100 transition-colors"
                >
                  View Hosting Plans
                </button>
                <button
                  onClick={() => setLocation("/tutorials")}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Watch Tutorials
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#1D1E2C] mb-4">What You'll Learn:</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "What is Web Hosting?",
                "Types of Web Hosting",
                "Essential Features",
                "How to Choose a Plan",
                "Step-by-Step Setup",
                "Frequently Asked Questions"
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="flex items-center gap-2 text-sm text-[#673DE6] hover:text-[#5B21B6] font-medium"
                >
                  <ChevronRight className="w-4 h-4" />
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* What is Web Hosting */}
        <section id="section-0" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-6">
                What is Web Hosting?
              </h2>
              <div className="prose prose-lg max-w-none text-[#545775]">
                <p className="text-xl leading-relaxed mb-6">
                  Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. When you create a website, all the files, images, and databases need to be stored somewhere - that's where web hosting comes in.
                </p>
                <p className="mb-6">
                  Think of web hosting like renting space in a building. Your domain name is the address (like axiomhost.com), and the hosting is the actual building where your "office" (website) is located. When someone visits your address, they're taken to your office.
                </p>
                
                <div className="bg-slate-50 rounded-2xl p-8 my-8">
                  <h3 className="text-xl font-bold text-[#1D1E2C] mb-4">How Web Hosting Works:</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="bg-[#673DE6] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                      <div>
                        <strong className="text-[#1D1E2C]">You create your website</strong>
                        <p className="text-sm mt-1">Design pages, write content, add images and functionality</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-[#673DE6] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                      <div>
                        <strong className="text-[#1D1E2C]">Files are uploaded to a server</strong>
                        <p className="text-sm mt-1">Your hosting account stores all website files on a powerful computer</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-[#673DE6] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                      <div>
                        <strong className="text-[#1D1E2C]">Domain points to the server</strong>
                        <p className="text-sm mt-1">DNS settings connect your domain name to the server's location</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="bg-[#673DE6] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                      <div>
                        <strong className="text-[#1D1E2C]">Visitors access your website</strong>
                        <p className="text-sm mt-1">Anyone with internet can type your domain and view your site</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Types of Web Hosting */}
        <section id="section-1" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                Types of Web Hosting
              </h2>
              <p className="text-lg text-[#545775] max-w-2xl mx-auto">
                Different hosting types suit different needs. Here's a detailed comparison to help you choose.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hostingTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:border-[#673DE6]/30 transition-all"
                >
                  <div className="bg-[#673DE6]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#673DE6] mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D1E2C] mb-3">{type.name}</h3>
                  <p className="text-[#545775] mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#673DE6] mb-1">Best For:</p>
                    <p className="text-sm text-[#545775]">{type.bestFor}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-[#673DE6] mb-1">Price Range:</p>
                    <p className="text-lg font-bold text-[#1D1E2C]">{type.priceRange}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs font-bold text-green-600 mb-2">PROS</p>
                      {type.pros.slice(0, 3).map((pro, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[#545775] mb-1">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-600 mb-2">CONS</p>
                      {type.cons.slice(0, 3).map((con, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[#545775] mb-1">
                          <span className="w-4 h-4 flex items-center justify-center text-red-500 flex-shrink-0">×</span>
                          <span>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setLocation(type.link)}
                    className="w-full py-3 bg-[#673DE6] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Features */}
        <section id="section-2" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                Essential Hosting Features
              </h2>
              <p className="text-lg text-[#545775] max-w-2xl mx-auto">
                Look for these key features when choosing a hosting provider
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {essentialFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="bg-gradient-to-br from-[#673DE6] to-[#EC1C65] w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1D1E2C] mb-2">{feature.title}</h3>
                    <p className="text-[#545775]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section id="section-4" className="py-20 bg-gradient-to-br from-[#1D1E2C] to-[#2D2E3C] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black mb-4">
                Step-by-Step Setup Guide
              </h2>
              <p className="text-lg text-white/80">
                Follow these steps to get your website online
              </p>
            </motion.div>

            <div className="space-y-8">
              {setupSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-[#673DE6] to-[#EC1C65] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-white/70 mb-4">{step.description}</p>
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-sm font-semibold text-[#00D4AA] mb-2">Pro Tips:</p>
                        <ul className="space-y-2">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-2 text-sm text-white/60">
                              <CheckCircle2 className="w-4 h-4 text-[#00D4AA] flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="section-5" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#545775]">
                Common questions about web hosting answered
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-[#673DE6] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1D1E2C] mb-2">{faq.question}</h3>
                      <p className="text-[#545775]">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides Sidebar */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1D1E2C] mb-8">Related Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "WordPress Installation Guide", link: "/kb/wordpress-installation", category: "WordPress" },
                { title: "cPanel Tutorial for Beginners", link: "/tutorials", category: "cPanel" },
                { title: "SSL Certificate Setup", link: "/kb/ssl-installation", category: "Security" },
                { title: "Email Configuration Guide", link: "/kb/email-account-creation", category: "Email" }
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setLocation(guide.link)}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-[#673DE6]/30 transition-all cursor-pointer group"
                >
                  <span className="text-xs font-bold text-[#673DE6] mb-2 block">{guide.category}</span>
                  <h3 className="font-bold text-[#1D1E2C] group-hover:text-[#673DE6] transition-colors">
                    {guide.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#673DE6] mt-2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6">
                Ready to Launch Your Website?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get started with reliable, fast, and affordable hosting today. Free domain included with annual plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/pricing")}
                  className="px-8 py-4 bg-white text-[#673DE6] font-bold rounded-full hover:bg-slate-100 transition-colors"
                >
                  View Hosting Plans <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
                <button
                  onClick={() => setLocation("/contact")}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
