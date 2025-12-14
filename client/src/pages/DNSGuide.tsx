import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Globe, CheckCircle, ChevronRight, Server, Mail, Shield, Settings, FileText, ArrowRight, Network, ExternalLink, RefreshCw, Clock, AlertTriangle, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function DNSGuide() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    document.title = "Complete DNS Management Guide - AxiomHost | Domain Name System Explained";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Master DNS management with our complete guide. Learn about DNS records, nameservers, propagation, and troubleshooting for Nigerian websites and businesses.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "introduction", title: "What is DNS?", icon: <Globe className="w-4 h-4" /> },
    { id: "records", title: "DNS Record Types", icon: <FileText className="w-4 h-4" /> },
    { id: "nameservers", title: "Nameservers", icon: <Server className="w-4 h-4" /> },
    { id: "a-record", title: "A & AAAA Records", icon: <Network className="w-4 h-4" /> },
    { id: "cname", title: "CNAME Records", icon: <ExternalLink className="w-4 h-4" /> },
    { id: "mx", title: "MX Records", icon: <Mail className="w-4 h-4" /> },
    { id: "txt", title: "TXT Records", icon: <Shield className="w-4 h-4" /> },
    { id: "propagation", title: "DNS Propagation", icon: <RefreshCw className="w-4 h-4" /> },
    { id: "troubleshooting", title: "Troubleshooting", icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#EC1C65] via-[#FF4D8D] to-[#EC1C65] text-white relative overflow-hidden">
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
                <Globe className="w-4 h-4" />
                DNS Management Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                DNS Mastery Guide
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Understand how DNS works, manage your domain records, and troubleshoot common issues. The complete guide to domain name system management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/domain-search">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#EC1C65] font-bold rounded-xl hover:bg-white/90 transition-all cursor-pointer">
                    Register a Domain
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
                            ? "bg-[#EC1C65] text-white font-medium"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {section.icon}
                        {section.title}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-8 p-4 bg-[#EC1C65]/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#EC1C65] mb-2">Free DNS Management</p>
                    <p className="text-xs text-slate-600 mb-3">All domains registered with AxiomHost include free DNS management with advanced features.</p>
                    <Link href="/domain-search">
                      <span className="text-xs font-semibold text-[#EC1C65] hover:underline cursor-pointer">Search Domains →</span>
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
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">What is DNS?</h2>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-slate-600 mb-6">
                        The Domain Name System (DNS) is often called the "phonebook of the internet." It translates human-readable domain names (like axiomhost.com) into IP addresses (like 192.168.1.1) that computers use to identify each other on the network.
                      </p>
                      
                      <div className="bg-slate-50 rounded-xl p-6 mb-8">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">How DNS Works</h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#EC1C65] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                            <div>
                              <p className="font-semibold text-[#1D1E2C]">User Types Domain</p>
                              <p className="text-sm text-slate-600">You type www.example.com in your browser</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#EC1C65] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                            <div>
                              <p className="font-semibold text-[#1D1E2C]">DNS Query</p>
                              <p className="text-sm text-slate-600">Browser asks DNS servers to find the IP address</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#EC1C65] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                            <div>
                              <p className="font-semibold text-[#1D1E2C]">DNS Response</p>
                              <p className="text-sm text-slate-600">DNS returns the IP address (e.g., 192.168.1.1)</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#EC1C65] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                            <div>
                              <p className="font-semibold text-[#1D1E2C]">Connection Established</p>
                              <p className="text-sm text-slate-600">Browser connects to the server and loads the website</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#EC1C65]/5 rounded-xl p-6 border border-[#EC1C65]/20">
                          <h5 className="font-bold text-[#EC1C65] mb-3">Why DNS Matters</h5>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Connects domains to web servers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Routes email to mail servers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Enables subdomains and aliases</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Verifies domain ownership</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6">
                          <h5 className="font-bold text-[#1D1E2C] mb-3">DNS Components</h5>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                              <Server className="w-4 h-4 text-[#EC1C65] mt-0.5" />
                              <span><strong>DNS Servers:</strong> Store and serve records</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <FileText className="w-4 h-4 text-[#EC1C65] mt-0.5" />
                              <span><strong>DNS Records:</strong> Define routing rules</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Globe className="w-4 h-4 text-[#EC1C65] mt-0.5" />
                              <span><strong>Nameservers:</strong> Authoritative DNS for domain</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Clock className="w-4 h-4 text-[#EC1C65] mt-0.5" />
                              <span><strong>TTL:</strong> Time records are cached</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* DNS Record Types */}
                <section id="records">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">DNS Record Types Overview</h2>
                    
                    <p className="text-slate-600 mb-6">
                      DNS records are instructions that tell the DNS system how to handle requests for your domain. Each record type serves a specific purpose:
                    </p>

                    <div className="overflow-x-auto mb-8">
                      <table className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Record Type</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Purpose</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Example</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#EC1C65]">A Record</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Points domain to IPv4 address</td>
                            <td className="px-6 py-4 text-sm text-slate-500 font-mono">192.168.1.1</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#EC1C65]">AAAA Record</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Points domain to IPv6 address</td>
                            <td className="px-6 py-4 text-sm text-slate-500 font-mono">2001:0db8:85a3::8a2e</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#EC1C65]">CNAME</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Alias for another domain</td>
                            <td className="px-6 py-4 text-sm text-slate-500 font-mono">www → example.com</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#EC1C65]">MX Record</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Directs email to mail servers</td>
                            <td className="px-6 py-4 text-sm text-slate-500 font-mono">mail.example.com</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#EC1C65]">TXT Record</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Stores text info (SPF, DKIM, verification)</td>
                            <td className="px-6 py-4 text-sm text-slate-500 font-mono">v=spf1 include:_spf...</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#EC1C65]">NS Record</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Specifies authoritative nameservers</td>
                            <td className="px-6 py-4 text-sm text-slate-500 font-mono">ns1.axiomhost.com</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-semibold text-[#EC1C65]">SRV Record</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Specifies port for services</td>
                            <td className="px-6 py-4 text-sm text-slate-500 font-mono">_sip._tcp.example.com</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                </section>

                {/* Nameservers */}
                <section id="nameservers">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Understanding Nameservers</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Nameservers are specialized servers that store DNS records for your domain. When you register a domain, you need to point it to nameservers that will handle DNS queries.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">AxiomHost Nameservers</h4>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4 border border-slate-200">
                            <p className="text-xs text-slate-500 mb-1">Primary Nameserver</p>
                            <p className="font-mono font-semibold text-[#EC1C65]">ns1.axiomhost.com</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-slate-200">
                            <p className="text-xs text-slate-500 mb-1">Secondary Nameserver</p>
                            <p className="font-mono font-semibold text-[#EC1C65]">ns2.axiomhost.com</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">When to Change Nameservers</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-[#EC1C65] mt-0.5" />
                            <span>Moving website to a new hosting provider</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-[#EC1C65] mt-0.5" />
                            <span>Using a CDN like Cloudflare</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-[#EC1C65] mt-0.5" />
                            <span>Consolidating DNS management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-[#EC1C65] mt-0.5" />
                            <span>Setting up advanced DNS features</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Important Note
                      </h4>
                      <p className="text-sm text-amber-700">
                        Changing nameservers will affect all DNS records for your domain. Make sure you have all existing records documented before making changes, as records managed by the old nameservers will no longer work.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* A & AAAA Records */}
                <section id="a-record">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">A & AAAA Records</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                          <Network className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-[#1D1E2C] mb-2">A Record (IPv4)</h4>
                        <p className="text-slate-600 text-sm mb-4">
                          The most common DNS record type. Maps a domain name to an IPv4 address (32-bit numeric address).
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <p className="text-xs text-slate-500 mb-1">Example</p>
                          <p className="font-mono text-sm">example.com → 192.168.1.1</p>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                          <Network className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-[#1D1E2C] mb-2">AAAA Record (IPv6)</h4>
                        <p className="text-slate-600 text-sm mb-4">
                          Similar to A record but for IPv6 addresses (128-bit hexadecimal address). Needed for IPv6 compatibility.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4">
                          <p className="text-xs text-slate-500 mb-1">Example</p>
                          <p className="font-mono text-sm text-xs">example.com → 2001:0db8:85a3::8a2e</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6">
                      <h4 className="font-bold text-[#1D1E2C] mb-4">Creating an A Record in cPanel</h4>
                      <ol className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#EC1C65] text-white text-xs flex items-center justify-center flex-shrink-0">1</span>
                          <span>Log into cPanel and go to <strong>Zone Editor</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#EC1C65] text-white text-xs flex items-center justify-center flex-shrink-0">2</span>
                          <span>Click <strong>Manage</strong> next to your domain</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#EC1C65] text-white text-xs flex items-center justify-center flex-shrink-0">3</span>
                          <span>Click <strong>Add Record</strong> and select <strong>A</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#EC1C65] text-white text-xs flex items-center justify-center flex-shrink-0">4</span>
                          <span>Enter the hostname (@ for root, or subdomain name)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#EC1C65] text-white text-xs flex items-center justify-center flex-shrink-0">5</span>
                          <span>Enter the IP address and set TTL (default 14400)</span>
                        </li>
                      </ol>
                    </div>
                  </motion.div>
                </section>

                {/* CNAME Records */}
                <section id="cname">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">CNAME Records</h2>
                    
                    <p className="text-slate-600 mb-6">
                      CNAME (Canonical Name) records create an alias from one domain to another. They're commonly used for subdomains and third-party services.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 mb-8">
                      <h4 className="font-bold text-[#1D1E2C] mb-4">Common CNAME Uses</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <p className="font-semibold text-[#1D1E2C] text-sm mb-1">www subdomain</p>
                          <p className="font-mono text-xs text-slate-500">www.example.com → example.com</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <p className="font-semibold text-[#1D1E2C] text-sm mb-1">Blog subdomain</p>
                          <p className="font-mono text-xs text-slate-500">blog.example.com → myblog.wordpress.com</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <p className="font-semibold text-[#1D1E2C] text-sm mb-1">Email marketing</p>
                          <p className="font-mono text-xs text-slate-500">mail.example.com → mailgun.org</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <p className="font-semibold text-[#1D1E2C] text-sm mb-1">CDN</p>
                          <p className="font-mono text-xs text-slate-500">cdn.example.com → d123.cloudfront.net</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h4 className="font-bold text-red-800 mb-2">CNAME Restrictions</h4>
                      <ul className="space-y-2 text-sm text-red-700">
                        <li>• CNAME cannot be used for the root domain (@)</li>
                        <li>• CNAME cannot coexist with other record types for the same hostname</li>
                        <li>• CNAME points to a domain, never to an IP address</li>
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* MX Records */}
                <section id="mx">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">MX Records (Mail Exchange)</h2>
                    
                    <p className="text-slate-600 mb-6">
                      MX records specify which mail servers accept incoming email for your domain. They include a priority number that determines the order servers are tried.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 mb-8">
                      <h4 className="font-bold text-[#1D1E2C] mb-4">MX Record Structure</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-slate-200">
                              <th className="text-left py-2 text-sm font-semibold text-[#1D1E2C]">Priority</th>
                              <th className="text-left py-2 text-sm font-semibold text-[#1D1E2C]">Mail Server</th>
                              <th className="text-left py-2 text-sm font-semibold text-[#1D1E2C]">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            <tr>
                              <td className="py-3 text-sm text-slate-600">10</td>
                              <td className="py-3 text-sm font-mono text-slate-600">mail.example.com</td>
                              <td className="py-3 text-sm text-slate-500">Primary mail server</td>
                            </tr>
                            <tr>
                              <td className="py-3 text-sm text-slate-600">20</td>
                              <td className="py-3 text-sm font-mono text-slate-600">mail2.example.com</td>
                              <td className="py-3 text-sm text-slate-500">Backup mail server</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-slate-500 mt-4">Lower priority numbers are tried first. If the primary server is unavailable, email routes to the backup server.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h5 className="font-bold text-[#1D1E2C] mb-3">Google Workspace MX Records</h5>
                        <div className="space-y-2 text-xs font-mono text-slate-600">
                          <p>1 ASPMX.L.GOOGLE.COM</p>
                          <p>5 ALT1.ASPMX.L.GOOGLE.COM</p>
                          <p>5 ALT2.ASPMX.L.GOOGLE.COM</p>
                          <p>10 ALT3.ASPMX.L.GOOGLE.COM</p>
                          <p>10 ALT4.ASPMX.L.GOOGLE.COM</p>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h5 className="font-bold text-[#1D1E2C] mb-3">Microsoft 365 MX Records</h5>
                        <div className="space-y-2 text-xs font-mono text-slate-600">
                          <p>0 example-com.mail.protection.outlook.com</p>
                        </div>
                        <p className="text-xs text-slate-500 mt-3">Replace "example-com" with your domain (hyphens replace dots)</p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* TXT Records */}
                <section id="txt">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">TXT Records</h2>
                    
                    <p className="text-slate-600 mb-6">
                      TXT records store text information for various purposes including domain verification, email authentication, and security policies.
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
                          Specifies which servers can send email on behalf of your domain, helping prevent email spoofing.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="font-mono text-xs text-slate-600">v=spf1 include:_spf.google.com ~all</p>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <Shield className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-[#1D1E2C]">DKIM (DomainKeys Identified Mail)</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          Adds a digital signature to outgoing emails, verifying they haven't been modified in transit.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="font-mono text-xs text-slate-600">v=DKIM1; k=rsa; p=MIIBIjANBgkqh...</p>
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
                          Tells receiving servers how to handle emails that fail SPF/DKIM checks and where to send reports.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="font-mono text-xs text-slate-600">v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com</p>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-[#1D1E2C]">Domain Verification</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          Used by services like Google, Microsoft, and Facebook to verify domain ownership.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="font-mono text-xs text-slate-600">google-site-verification=abc123...</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* DNS Propagation */}
                <section id="propagation">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">DNS Propagation</h2>
                    
                    <p className="text-slate-600 mb-6">
                      DNS propagation is the time it takes for DNS changes to spread across the global DNS system. During this period, some users may see old records while others see new ones.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Clock className="w-6 h-6 text-[#EC1C65]" />
                          <h4 className="font-bold text-[#1D1E2C]">Typical Propagation Times</h4>
                        </div>
                        <ul className="space-y-3 text-sm text-slate-600">
                          <li className="flex justify-between">
                            <span>A/AAAA Records</span>
                            <span className="font-semibold">1-24 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>MX Records</span>
                            <span className="font-semibold">1-24 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>CNAME Records</span>
                            <span className="font-semibold">1-24 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>TXT Records</span>
                            <span className="font-semibold">1-24 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Nameserver Changes</span>
                            <span className="font-semibold">24-48 hours</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Zap className="w-6 h-6 text-[#EC1C65]" />
                          <h4 className="font-bold text-[#1D1E2C]">Speed Up Propagation</h4>
                        </div>
                        <ul className="space-y-3 text-slate-600 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Lower TTL before making changes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Clear local DNS cache</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Use reliable DNS providers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Plan changes during low-traffic periods</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#EC1C65]/5 rounded-xl p-6 border border-[#EC1C65]/20">
                      <h4 className="font-bold text-[#EC1C65] mb-2">Check Propagation Status</h4>
                      <p className="text-slate-600 text-sm">
                        Use online tools like whatsmydns.net or dnschecker.org to check DNS propagation status across different global locations.
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
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">DNS Troubleshooting</h2>

                    <div className="space-y-4 mb-8">
                      {[
                        {
                          issue: "Website Not Loading After DNS Change",
                          solutions: [
                            "Wait for DNS propagation (up to 48 hours)",
                            "Clear browser cache and try incognito mode",
                            "Flush local DNS cache (ipconfig /flushdns on Windows)",
                            "Verify A record points to correct IP"
                          ]
                        },
                        {
                          issue: "Email Not Working",
                          solutions: [
                            "Check MX records are correct with proper priority",
                            "Verify SPF, DKIM, and DMARC records",
                            "Ensure mail server is running",
                            "Check if domain is blacklisted"
                          ]
                        },
                        {
                          issue: "Subdomain Not Resolving",
                          solutions: [
                            "Check if A or CNAME record exists for subdomain",
                            "Verify correct hostname format (without trailing dot)",
                            "Wait for propagation if recently created",
                            "Check for conflicting records"
                          ]
                        },
                        {
                          issue: "SSL Certificate Errors",
                          solutions: [
                            "Ensure CAA records allow your certificate authority",
                            "Verify domain ownership TXT records",
                            "Wait for DNS propagation before issuing certificate",
                            "Check if nameservers are correctly configured"
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

                    <div className="bg-[#EC1C65]/10 rounded-xl p-6 text-center">
                      <Globe className="w-10 h-10 text-[#EC1C65] mx-auto mb-3" />
                      <h4 className="font-bold text-[#1D1E2C] mb-2">Need DNS Help?</h4>
                      <p className="text-slate-600 text-sm mb-4">
                        Our technical support team can help you configure and troubleshoot DNS issues.
                      </p>
                      <Link href="/contact">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#EC1C65] text-white font-bold rounded-xl hover:bg-[#D11858] transition-colors cursor-pointer">
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
                { title: "Email Guide", href: "/knowledge-base", icon: <Mail className="w-5 h-5" /> },
                { title: "Knowledge Base", href: "/knowledge-base", icon: <Globe className="w-5 h-5" /> }
              ].map((guide, index) => (
                <Link key={index} href={guide.href}>
                  <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#EC1C65]/10 flex items-center justify-center text-[#EC1C65] mx-auto mb-3">
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
