import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Globe, CheckCircle, ChevronRight, Mail, Shield, Server, Settings, FileText, ArrowRight, Search, RefreshCw, Lock, Users, AtSign, Inbox, Send, AlertTriangle, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function DomainEmailGuide() {
  const [activeSection, setActiveSection] = useState("domains");

  useEffect(() => {
    document.title = "Domain & Email Management Guide - AxiomHost | Complete Setup Tutorial";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Master domain registration, transfer, and professional email setup. Complete guide for Nigerian businesses including DNS configuration, email clients, and security.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "domains", title: "Domain Registration", icon: <Globe className="w-4 h-4" /> },
    { id: "transfer", title: "Domain Transfer", icon: <RefreshCw className="w-4 h-4" /> },
    { id: "tlds", title: "TLD Guide", icon: <Search className="w-4 h-4" /> },
    { id: "email-setup", title: "Email Setup", icon: <Mail className="w-4 h-4" /> },
    { id: "email-clients", title: "Email Clients", icon: <Inbox className="w-4 h-4" /> },
    { id: "email-security", title: "Email Security", icon: <Shield className="w-4 h-4" /> },
    { id: "forwarding", title: "Email Forwarding", icon: <Send className="w-4 h-4" /> },
    { id: "troubleshooting", title: "Troubleshooting", icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#00B090] via-[#00C9A7] to-[#00B090] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#673DE6] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Domain & Email Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Domain & Email Mastery
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Complete guide to domain registration, transfers, and professional email setup. Establish your online presence with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/domain-search">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00B090] font-bold rounded-xl hover:bg-white/90 transition-all cursor-pointer">
                    Search Domains
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/business-email">
                  <span className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                    Business Email Plans
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
                            ? "bg-[#00B090] text-white font-medium"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {section.icon}
                        {section.title}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-8 p-4 bg-[#00B090]/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#00B090] mb-2">Free Domain with Hosting</p>
                    <p className="text-xs text-slate-600 mb-3">Get a free .com domain with annual hosting plans.</p>
                    <Link href="/pricing">
                      <span className="text-xs font-semibold text-[#00B090] hover:underline cursor-pointer">View Plans →</span>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-16">
                {/* Domain Registration */}
                <section id="domains">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Domain Registration</h2>
                    
                    <p className="text-slate-600 mb-6">
                      A domain name is your unique address on the internet. Registering the right domain is the first step to establishing your online presence.
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                      <h3 className="text-xl font-bold text-[#1D1E2C] mb-6">How to Register a Domain</h3>
                      
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Search for Available Domain", desc: "Use our domain search tool to check if your desired domain is available" },
                          { step: 2, title: "Choose Your TLD", desc: "Select from .com, .ng, .com.ng, .org, .net, and 100+ other extensions" },
                          { step: 3, title: "Add to Cart", desc: "Select registration period (1-10 years) and add privacy protection if needed" },
                          { step: 4, title: "Complete Registration", desc: "Enter your contact details (WHOIS information) and complete payment" },
                          { step: 5, title: "Configure DNS", desc: "Point your domain to your hosting or set up DNS records" }
                        ].map((item) => (
                          <div key={item.step} className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-[#00B090] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Choosing the Perfect Domain</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Keep it short and memorable</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Use keywords relevant to your business</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Avoid hyphens and numbers if possible</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Check for trademark conflicts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Consider multiple extensions (.com, .ng)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Domain Privacy Protection</h4>
                        <p className="text-sm text-slate-600 mb-4">
                          WHOIS privacy protection hides your personal information (name, address, phone, email) from public WHOIS lookups.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-[#00B090]" />
                            <span>Prevents spam and unwanted contacts</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-[#00B090]" />
                            <span>Protects against identity theft</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#00B090]" />
                            <span>Included free with most domains</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Domain Transfer */}
                <section id="transfer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Domain Transfer</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Transfer your domain to AxiomHost for easier management, better pricing, and unified billing with your hosting services.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-8 mb-8">
                      <h3 className="text-xl font-bold text-[#1D1E2C] mb-6">Domain Transfer Steps</h3>
                      
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Unlock Your Domain", desc: "Log into your current registrar and disable domain lock/transfer protection" },
                          { step: 2, title: "Get EPP/Authorization Code", desc: "Request the transfer authorization code from your current registrar" },
                          { step: 3, title: "Initiate Transfer", desc: "Enter your domain and EPP code on our domain transfer page" },
                          { step: 4, title: "Approve Transfer", desc: "Approve the transfer request sent to your domain's admin email" },
                          { step: 5, title: "Wait for Completion", desc: "Transfer typically completes within 5-7 days" }
                        ].map((item) => (
                          <div key={item.step} className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-[#00B090] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
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

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                      <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Before You Transfer
                      </h4>
                      <ul className="space-y-2 text-sm text-amber-700">
                        <li>• Domain must be at least 60 days old</li>
                        <li>• Cannot transfer within 60 days of registration or previous transfer</li>
                        <li>• Domain cannot be expired or in redemption period</li>
                        <li>• Save all existing DNS records before transferring</li>
                        <li>• Ensure admin email is accessible for transfer approval</li>
                      </ul>
                    </div>

                    <div className="bg-[#00B090]/5 rounded-xl p-6 border border-[#00B090]/20">
                      <h4 className="font-bold text-[#00B090] mb-2">Free Year Extension</h4>
                      <p className="text-slate-600 text-sm">
                        When you transfer a domain to AxiomHost, you get a free 1-year extension added to your current expiration date.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* TLD Guide */}
                <section id="tlds">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">TLD Guide</h2>
                    
                    <p className="text-slate-600 mb-6">
                      TLD (Top-Level Domain) is the extension at the end of your domain name. Choose the right TLD for your business needs.
                    </p>

                    <div className="overflow-x-auto mb-8">
                      <table className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">TLD</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Best For</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Starting Price</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#00B090]">.com</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Global businesses, most trusted</td>
                            <td className="px-6 py-4 text-sm text-slate-600">₦5,500/year</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#00B090]">.com.ng</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Nigerian businesses</td>
                            <td className="px-6 py-4 text-sm text-slate-600">₦3,500/year</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#00B090]">.ng</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Premium Nigerian identity</td>
                            <td className="px-6 py-4 text-sm text-slate-600">₦12,000/year</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#00B090]">.org</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Non-profits, organizations</td>
                            <td className="px-6 py-4 text-sm text-slate-600">₦6,000/year</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#00B090]">.net</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Tech, internet services</td>
                            <td className="px-6 py-4 text-sm text-slate-600">₦5,800/year</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#00B090]">.co</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Startups, companies</td>
                            <td className="px-6 py-4 text-sm text-slate-600">₦12,500/year</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#00B090]">.io</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Tech startups, SaaS</td>
                            <td className="px-6 py-4 text-sm text-slate-600">₦18,000/year</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#00B090]">.store</td>
                            <td className="px-6 py-4 text-sm text-slate-600">E-commerce, online shops</td>
                            <td className="px-6 py-4 text-sm text-slate-600">₦8,500/year</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-3">Nigerian Domain Requirements</h4>
                        <p className="text-sm text-slate-600 mb-3">
                          .ng and .com.ng domains may require additional documentation:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#00B090]" />
                            <span>CAC registration for businesses</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#00B090]" />
                            <span>Valid ID for individuals</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#00B090]" />
                            <span>Nigerian address required</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-3">Industry-Specific TLDs</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-[#00B090]" />
                            <span><strong>.tech</strong> - Technology companies</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-[#00B090]" />
                            <span><strong>.shop</strong> - Retail and e-commerce</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-[#00B090]" />
                            <span><strong>.blog</strong> - Bloggers and writers</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-[#00B090]" />
                            <span><strong>.agency</strong> - Creative agencies</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Email Setup */}
                <section id="email-setup">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Professional Email Setup</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Create professional email addresses using your domain (e.g., info@yourbusiness.com) to build trust and credibility with customers.
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                      <h3 className="text-xl font-bold text-[#1D1E2C] mb-6">Creating Email Accounts in cPanel</h3>
                      
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Log into cPanel", desc: "Access your cPanel dashboard at yourdomain.com/cpanel" },
                          { step: 2, title: "Open Email Accounts", desc: "Click on 'Email Accounts' in the Email section" },
                          { step: 3, title: "Create New Account", desc: "Click 'Create' and enter the email username" },
                          { step: 4, title: "Set Password", desc: "Create a strong password for the email account" },
                          { step: 5, title: "Set Mailbox Quota", desc: "Allocate storage space for the mailbox (or unlimited)" },
                          { step: 6, title: "Access Webmail", desc: "Use the generated webmail link to access your email" }
                        ].map((item) => (
                          <div key={item.step} className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-[#00B090] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
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

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                        <AtSign className="w-8 h-8 text-[#00B090] mx-auto mb-3" />
                        <h5 className="font-bold text-[#1D1E2C] mb-2">cPanel Email</h5>
                        <p className="text-xs text-slate-500">Included with hosting</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                        <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png" alt="Gmail" className="w-8 h-8 mx-auto mb-3" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        <h5 className="font-bold text-[#1D1E2C] mb-2">Google Workspace</h5>
                        <p className="text-xs text-slate-500">Professional suite</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                        <Mail className="w-8 h-8 text-[#0078D4] mx-auto mb-3" />
                        <h5 className="font-bold text-[#1D1E2C] mb-2">Microsoft 365</h5>
                        <p className="text-xs text-slate-500">Enterprise solution</p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Email Clients */}
                <section id="email-clients">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Email Client Configuration</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Configure your email on desktop and mobile devices for convenient access anywhere.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 mb-8">
                      <h4 className="font-bold text-[#1D1E2C] mb-4">Email Server Settings</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <h5 className="font-semibold text-[#1D1E2C] mb-3">Incoming Mail (IMAP)</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Server:</span>
                              <span className="font-mono text-slate-700">mail.yourdomain.com</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Port:</span>
                              <span className="font-mono text-slate-700">993 (SSL) / 143</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Security:</span>
                              <span className="font-mono text-slate-700">SSL/TLS</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <h5 className="font-semibold text-[#1D1E2C] mb-3">Outgoing Mail (SMTP)</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Server:</span>
                              <span className="font-mono text-slate-700">mail.yourdomain.com</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Port:</span>
                              <span className="font-mono text-slate-700">465 (SSL) / 587</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Security:</span>
                              <span className="font-mono text-slate-700">SSL/TLS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Desktop Clients</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                          <li className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-[#00B090]" />
                            <span><strong>Outlook</strong> - Windows & Mac</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-[#00B090]" />
                            <span><strong>Thunderbird</strong> - Windows, Mac, Linux</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-[#00B090]" />
                            <span><strong>Apple Mail</strong> - Mac</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-[#00B090]" />
                            <span><strong>Windows Mail</strong> - Windows 10/11</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Mobile Devices</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                          <li className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-[#00B090]" />
                            <span><strong>iOS Mail</strong> - iPhone & iPad</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-[#00B090]" />
                            <span><strong>Gmail App</strong> - Android & iOS</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-[#00B090]" />
                            <span><strong>Outlook App</strong> - Android & iOS</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-[#00B090]" />
                            <span><strong>Samsung Email</strong> - Android</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Email Security */}
                <section id="email-security">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Email Security</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Protect your email from spam, phishing, and spoofing with proper authentication records and security practices.
                    </p>

                    <div className="space-y-6">
                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                            <Shield className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-[#1D1E2C]">SPF (Sender Policy Framework)</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          Specifies which servers can send email on behalf of your domain. Prevents email spoofing.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs text-slate-500 mb-1">Example TXT Record:</p>
                          <p className="font-mono text-xs text-slate-700">v=spf1 include:_spf.google.com include:axiomhost.com ~all</p>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <Lock className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-[#1D1E2C]">DKIM (DomainKeys Identified Mail)</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          Adds a digital signature to emails, verifying they haven't been tampered with during transit.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs text-slate-500 mb-1">Record Name:</p>
                          <p className="font-mono text-xs text-slate-700">default._domainkey.yourdomain.com</p>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                            <Shield className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-[#1D1E2C]">DMARC</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          Tells receiving servers how to handle emails that fail SPF/DKIM and provides reporting.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs text-slate-500 mb-1">Example TXT Record:</p>
                          <p className="font-mono text-xs text-slate-700">v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-[#00B090]/5 rounded-xl p-6 border border-[#00B090]/20">
                      <h4 className="font-bold text-[#00B090] mb-2">Spam Protection</h4>
                      <p className="text-slate-600 text-sm">
                        All AxiomHost email accounts include built-in SpamAssassin protection. Configure spam filters in cPanel under "Spam Filters" to adjust sensitivity levels.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Email Forwarding */}
                <section id="forwarding">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Email Forwarding & Aliases</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Set up email forwarding to redirect emails to another address, or create aliases for multiple addresses pointing to one inbox.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Email Forwarders</h4>
                        <p className="text-sm text-slate-600 mb-4">
                          Forward all email from one address to another. Great for:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <Send className="w-4 h-4 text-[#00B090]" />
                            <span>Forwarding to personal Gmail</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Send className="w-4 h-4 text-[#00B090]" />
                            <span>Consolidating multiple addresses</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Send className="w-4 h-4 text-[#00B090]" />
                            <span>Team email distribution</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Catch-All Address</h4>
                        <p className="text-sm text-slate-600 mb-4">
                          Capture all emails sent to non-existent addresses at your domain:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <Inbox className="w-4 h-4 text-[#00B090]" />
                            <span>Never miss misspelled emails</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Inbox className="w-4 h-4 text-[#00B090]" />
                            <span>Use unique addresses for tracking</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                            <span>May increase spam volume</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6">
                      <h4 className="font-bold text-[#1D1E2C] mb-4">Setting Up a Forwarder in cPanel</h4>
                      <ol className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#00B090] text-white text-xs flex items-center justify-center flex-shrink-0">1</span>
                          <span>Go to <strong>Email → Forwarders</strong> in cPanel</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#00B090] text-white text-xs flex items-center justify-center flex-shrink-0">2</span>
                          <span>Click <strong>Add Forwarder</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#00B090] text-white text-xs flex items-center justify-center flex-shrink-0">3</span>
                          <span>Enter the email address to forward</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#00B090] text-white text-xs flex items-center justify-center flex-shrink-0">4</span>
                          <span>Enter the destination email address</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#00B090] text-white text-xs flex items-center justify-center flex-shrink-0">5</span>
                          <span>Click <strong>Add Forwarder</strong> to save</span>
                        </li>
                      </ol>
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
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Troubleshooting</h2>

                    <div className="space-y-4 mb-8">
                      {[
                        {
                          issue: "Cannot Send Emails",
                          solutions: [
                            "Check SMTP settings (server, port, SSL)",
                            "Verify username and password are correct",
                            "Ensure outgoing port (465/587) is not blocked",
                            "Check if account has sending limits exceeded"
                          ]
                        },
                        {
                          issue: "Cannot Receive Emails",
                          solutions: [
                            "Check MX records point to correct mail server",
                            "Verify mailbox quota is not exceeded",
                            "Check spam/junk folder for filtered messages",
                            "Ensure domain has not expired"
                          ]
                        },
                        {
                          issue: "Emails Going to Spam",
                          solutions: [
                            "Configure SPF, DKIM, and DMARC records",
                            "Avoid spam trigger words in subject/content",
                            "Ensure IP is not blacklisted",
                            "Build sender reputation gradually"
                          ]
                        },
                        {
                          issue: "Email Client Connection Failed",
                          solutions: [
                            "Verify server name (mail.yourdomain.com)",
                            "Check port numbers match settings",
                            "Enable SSL/TLS encryption",
                            "Try alternative ports (993/143 for IMAP)"
                          ]
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
                          <h4 className="font-bold text-red-600 mb-3">{item.issue}</h4>
                          <ul className="space-y-2">
                            {item.solutions.map((solution, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#00B090]/10 rounded-xl p-6 text-center">
                      <Mail className="w-10 h-10 text-[#00B090] mx-auto mb-3" />
                      <h4 className="font-bold text-[#1D1E2C] mb-2">Need Email Help?</h4>
                      <p className="text-slate-600 text-sm mb-4">
                        Our technical support team can help you configure email and troubleshoot issues.
                      </p>
                      <Link href="/contact">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B090] text-white font-bold rounded-xl hover:bg-[#009980] transition-colors cursor-pointer">
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
                { title: "DNS Guide", href: "/dns-guide", icon: <Globe className="w-5 h-5" /> },
                { title: "cPanel Guide", href: "/cpanel-guide", icon: <Settings className="w-5 h-5" /> },
                { title: "Security Guide", href: "/security-guide", icon: <Shield className="w-5 h-5" /> },
                { title: "Knowledge Base", href: "/knowledge-base", icon: <FileText className="w-5 h-5" /> }
              ].map((guide, index) => (
                <Link key={index} href={guide.href}>
                  <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#00B090]/10 flex items-center justify-center text-[#00B090] mx-auto mb-3">
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
