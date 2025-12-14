import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Database, CheckCircle, ChevronRight, Shield, Clock, Cloud, HardDrive, Download, RefreshCw, AlertTriangle, Server, FileText, Settings, ArrowRight, Calendar, Lock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function BackupsGuide() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    document.title = "Complete Backup & Recovery Guide - AxiomHost | Protect Your Website Data";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Master website backup strategies with our complete guide. Learn automated backups, disaster recovery, JetBackup, cPanel backups, and data protection for Nigerian businesses.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "introduction", title: "Why Backups Matter", icon: <Database className="w-4 h-4" /> },
    { id: "types", title: "Types of Backups", icon: <HardDrive className="w-4 h-4" /> },
    { id: "jetbackup", title: "JetBackup Tutorial", icon: <Cloud className="w-4 h-4" /> },
    { id: "cpanel", title: "cPanel Backups", icon: <Settings className="w-4 h-4" /> },
    { id: "scheduling", title: "Backup Scheduling", icon: <Calendar className="w-4 h-4" /> },
    { id: "restore", title: "Restoring Backups", icon: <RefreshCw className="w-4 h-4" /> },
    { id: "offsite", title: "Offsite Backups", icon: <Cloud className="w-4 h-4" /> },
    { id: "disaster", title: "Disaster Recovery", icon: <AlertTriangle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#7C3AED] text-white relative overflow-hidden">
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
                <Database className="w-4 h-4" />
                Backup & Recovery Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Website Backup Mastery
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Protect your website data with comprehensive backup strategies. Learn automated backups, disaster recovery, and one-click restoration techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/cpanel-hosting">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7C3AED] font-bold rounded-xl hover:bg-white/90 transition-all cursor-pointer">
                    Get Hosting with Backups
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
                            ? "bg-[#7C3AED] text-white font-medium"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {section.icon}
                        {section.title}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-8 p-4 bg-[#7C3AED]/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#7C3AED] mb-2">Daily Automated Backups</p>
                    <p className="text-xs text-slate-600 mb-3">All AxiomHost plans include automatic daily backups with JetBackup.</p>
                    <Link href="/pricing">
                      <span className="text-xs font-semibold text-[#7C3AED] hover:underline cursor-pointer">View Plans →</span>
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
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Why Backups Matter</h2>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-slate-600 mb-6">
                        Website backups are your safety net against data loss, hacking, human error, and server failures. A comprehensive backup strategy ensures you can quickly recover your website and get back online with minimal downtime.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" />
                            Risks Without Backups
                          </h4>
                          <ul className="space-y-2 text-sm text-red-700">
                            <li>• Complete data loss from hacking or malware</li>
                            <li>• Inability to recover from human errors</li>
                            <li>• Extended downtime during emergencies</li>
                            <li>• Loss of customer data and trust</li>
                            <li>• Potential legal and compliance issues</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            Benefits of Regular Backups
                          </h4>
                          <ul className="space-y-2 text-sm text-green-700">
                            <li>• Quick recovery from any disaster</li>
                            <li>• Protection against ransomware attacks</li>
                            <li>• Easy rollback of bad updates</li>
                            <li>• Peace of mind for you and customers</li>
                            <li>• Business continuity assurance</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-[#7C3AED]/5 rounded-xl p-6 border border-[#7C3AED]/20">
                        <h4 className="font-bold text-[#7C3AED] mb-2">The 3-2-1 Backup Rule</h4>
                        <p className="text-slate-600">
                          <strong>3</strong> copies of your data, on <strong>2</strong> different storage types, with <strong>1</strong> copy stored offsite. This industry-standard approach ensures maximum data protection.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Types of Backups */}
                <section id="types">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Types of Backups</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                            <HardDrive className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#1D1E2C] mb-2">Full Backup</h4>
                            <p className="text-slate-600 mb-3">
                              A complete copy of all website files, databases, emails, and settings. Full backups take more storage space and time but provide complete restoration capability.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Complete protection</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Larger file size</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Weekly recommended</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                            <RefreshCw className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#1D1E2C] mb-2">Incremental Backup</h4>
                            <p className="text-slate-600 mb-3">
                              Only backs up files that have changed since the last backup. Faster and uses less storage, but requires the previous backup chain for full restoration.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Space efficient</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Faster backups</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Daily recommended</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                            <Database className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#1D1E2C] mb-2">Differential Backup</h4>
                            <p className="text-slate-600 mb-3">
                              Backs up all changes since the last full backup. Faster restoration than incremental as only the last full backup and the differential are needed.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Balanced approach</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Easier restoration</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Medium storage</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-slate-50 rounded-xl p-5">
                          <h5 className="font-bold text-[#1D1E2C] mb-3">File Backup Components</h5>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Website files (HTML, CSS, JS)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Media uploads and images
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Theme and plugin files
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Configuration files
                            </li>
                          </ul>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-5">
                          <h5 className="font-bold text-[#1D1E2C] mb-3">Database Backup Components</h5>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Posts and pages content
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              User accounts and data
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Settings and options
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Comments and metadata
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* JetBackup Tutorial */}
                <section id="jetbackup">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">JetBackup Tutorial</h2>
                    
                    <p className="text-slate-600 mb-6">
                      JetBackup is the enterprise-grade backup solution included with all AxiomHost hosting plans. It provides automated daily backups with one-click restoration.
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                      <h3 className="text-xl font-bold text-[#1D1E2C] mb-6">Creating a Manual Backup</h3>
                      
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Access JetBackup", desc: "Log into cPanel and click on 'JetBackup 5' in the Files section" },
                          { step: 2, title: "Select Backup Type", desc: "Choose from Full Backup, Home Directory, Databases, or Cron Jobs" },
                          { step: 3, title: "Generate Backup", desc: "Click 'Create New Backup' to start the backup process" },
                          { step: 4, title: "Wait for Completion", desc: "The backup will be created and stored securely on our backup servers" },
                          { step: 5, title: "Verify Backup", desc: "Check the backup list to confirm your backup was created successfully" }
                        ].map((item) => (
                          <div key={item.step} className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                        <h4 className="font-bold text-[#1D1E2C] mb-4">JetBackup Features</h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span>Automated daily backups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span>30-day backup retention</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span>One-click full restore</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span>Selective file/folder restore</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span>Database-only restore</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Backup Storage Locations</h4>
                        <ul className="space-y-3 text-slate-600">
                          <li className="flex items-start gap-2">
                            <Server className="w-4 h-4 text-[#7C3AED] mt-1" />
                            <span>Local server storage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Cloud className="w-4 h-4 text-[#7C3AED] mt-1" />
                            <span>Remote backup servers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <HardDrive className="w-4 h-4 text-[#7C3AED] mt-1" />
                            <span>Download to local device</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Lock className="w-4 h-4 text-[#7C3AED] mt-1" />
                            <span>Encrypted secure storage</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* cPanel Backups */}
                <section id="cpanel">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">cPanel Backup Wizard</h2>
                    
                    <p className="text-slate-600 mb-6">
                      cPanel includes a built-in Backup Wizard that allows you to create and download full or partial backups of your hosting account.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 mb-8">
                      <h4 className="font-bold text-[#1D1E2C] mb-4">Full Account Backup</h4>
                      <ol className="space-y-3 text-slate-600">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white text-xs flex items-center justify-center flex-shrink-0">1</span>
                          <span>Navigate to <strong>Backup Wizard</strong> in cPanel</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white text-xs flex items-center justify-center flex-shrink-0">2</span>
                          <span>Click <strong>Back Up</strong> to create a new backup</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white text-xs flex items-center justify-center flex-shrink-0">3</span>
                          <span>Select <strong>Full Backup</strong> for complete protection</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white text-xs flex items-center justify-center flex-shrink-0">4</span>
                          <span>Choose destination: Home Directory or Remote FTP</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white text-xs flex items-center justify-center flex-shrink-0">5</span>
                          <span>Enter your email for notification when complete</span>
                        </li>
                      </ol>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                        <FileText className="w-8 h-8 text-[#7C3AED] mx-auto mb-3" />
                        <h5 className="font-bold text-[#1D1E2C] mb-2">Home Directory</h5>
                        <p className="text-xs text-slate-500">All files in public_html and subdomains</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                        <Database className="w-8 h-8 text-[#7C3AED] mx-auto mb-3" />
                        <h5 className="font-bold text-[#1D1E2C] mb-2">MySQL Databases</h5>
                        <p className="text-xs text-slate-500">Export individual database backups</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                        <Settings className="w-8 h-8 text-[#7C3AED] mx-auto mb-3" />
                        <h5 className="font-bold text-[#1D1E2C] mb-2">Email Forwarders</h5>
                        <p className="text-xs text-slate-500">Backup email configurations</p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Backup Scheduling */}
                <section id="scheduling">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Backup Scheduling Best Practices</h2>

                    <div className="overflow-x-auto mb-8">
                      <table className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Website Type</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Full Backup</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Database Backup</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1D1E2C]">Retention</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-600">Static Website</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Weekly</td>
                            <td className="px-6 py-4 text-sm text-slate-600">N/A</td>
                            <td className="px-6 py-4 text-sm text-slate-600">30 days</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-600">Blog/CMS</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Weekly</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Daily</td>
                            <td className="px-6 py-4 text-sm text-slate-600">30 days</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-600">E-commerce</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Daily</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Every 6 hours</td>
                            <td className="px-6 py-4 text-sm text-slate-600">90 days</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-600">High-traffic App</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Daily</td>
                            <td className="px-6 py-4 text-sm text-slate-600">Hourly</td>
                            <td className="px-6 py-4 text-sm text-slate-600">90+ days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <h4 className="font-bold text-amber-800 mb-2">When to Create Additional Backups</h4>
                      <ul className="space-y-2 text-sm text-amber-700">
                        <li>• Before updating WordPress, themes, or plugins</li>
                        <li>• Before making major design or content changes</li>
                        <li>• Before installing new software or scripts</li>
                        <li>• Before migrating to a new server</li>
                        <li>• After completing major updates or changes (verified working)</li>
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* Restoring Backups */}
                <section id="restore">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Restoring from Backup</h2>
                    
                    <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                      <h3 className="text-xl font-bold text-[#1D1E2C] mb-6">JetBackup Restoration Steps</h3>
                      
                      <div className="space-y-4">
                        {[
                          { step: 1, title: "Access JetBackup", desc: "Log into cPanel and navigate to JetBackup 5" },
                          { step: 2, title: "Select Restore Point", desc: "Browse available backups and select the date you want to restore" },
                          { step: 3, title: "Choose Restore Type", desc: "Select Full Restore, Files Only, Database Only, or specific items" },
                          { step: 4, title: "Confirm Restoration", desc: "Review your selection and click 'Restore' to begin" },
                          { step: 5, title: "Verify Website", desc: "After restoration completes, verify your website is working correctly" }
                        ].map((item) => (
                          <div key={item.step} className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Selective File Restore</h4>
                        <p className="text-slate-600 text-sm mb-4">
                          Restore individual files or folders without affecting the rest of your website:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Browse backup file structure
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Select specific files/folders
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Restore or download selected items
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-[#1D1E2C] mb-4">Database Restore</h4>
                        <p className="text-slate-600 text-sm mb-4">
                          Restore your database without touching website files:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Select database backup point
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Choose target database
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Restore with one click
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Offsite Backups */}
                <section id="offsite">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Offsite Backup Storage</h2>
                    
                    <p className="text-slate-600 mb-6">
                      Storing backups in multiple locations protects against catastrophic data center failures. Consider these offsite backup options:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {[
                        {
                          title: "Cloud Storage",
                          icon: <Cloud className="w-6 h-6" />,
                          services: ["Google Drive", "Dropbox", "Amazon S3", "Microsoft OneDrive"],
                          desc: "Automatic sync with popular cloud platforms"
                        },
                        {
                          title: "Remote FTP",
                          icon: <Server className="w-6 h-6" />,
                          services: ["Custom FTP server", "Remote hosting", "NAS devices"],
                          desc: "Transfer backups to your own remote server"
                        },
                        {
                          title: "Local Download",
                          icon: <Download className="w-6 h-6" />,
                          services: ["External hard drive", "Local NAS", "USB storage"],
                          desc: "Download and store backups on local devices"
                        }
                      ].map((option, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
                          <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] mb-4">
                            {option.icon}
                          </div>
                          <h4 className="font-bold text-[#1D1E2C] mb-2">{option.title}</h4>
                          <p className="text-sm text-slate-600 mb-4">{option.desc}</p>
                          <ul className="space-y-1">
                            {option.services.map((service, i) => (
                              <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#7C3AED]/5 rounded-xl p-6 border border-[#7C3AED]/20">
                      <h4 className="font-bold text-[#7C3AED] mb-2">Encryption Reminder</h4>
                      <p className="text-slate-600 text-sm">
                        Always encrypt backup files stored offsite, especially if they contain sensitive customer data. Use strong encryption and store the encryption keys separately from the backups.
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Disaster Recovery */}
                <section id="disaster">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-[#1D1E2C] mb-6">Disaster Recovery Planning</h2>
                    
                    <p className="text-slate-600 mb-6">
                      A disaster recovery plan ensures you can quickly restore your website and minimize business disruption during emergencies.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-8 mb-8">
                      <h3 className="text-xl font-bold text-[#1D1E2C] mb-6">Disaster Recovery Checklist</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          "Document all hosting account details",
                          "Keep backup of DNS records",
                          "Store login credentials securely",
                          "Test backup restoration regularly",
                          "Document restoration procedures",
                          "Maintain contact list for emergencies",
                          "Set up monitoring and alerts",
                          "Define RTO and RPO targets",
                          "Create communication plan",
                          "Train team on recovery procedures"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0"></div>
                            <span className="text-sm text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 className="font-bold text-blue-800 mb-3">RTO (Recovery Time Objective)</h4>
                        <p className="text-sm text-blue-700">
                          Maximum acceptable time your website can be offline. For e-commerce sites, this is typically 1-4 hours. For informational sites, 24-48 hours may be acceptable.
                        </p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h4 className="font-bold text-purple-800 mb-3">RPO (Recovery Point Objective)</h4>
                        <p className="text-sm text-purple-700">
                          Maximum acceptable data loss measured in time. If your RPO is 6 hours, you need backups at least every 6 hours to meet this target.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#7C3AED]/10 rounded-xl p-6 text-center">
                      <Database className="w-10 h-10 text-[#7C3AED] mx-auto mb-3" />
                      <h4 className="font-bold text-[#1D1E2C] mb-2">Need Help with Backups?</h4>
                      <p className="text-slate-600 text-sm mb-4">
                        Our technical support team can help you set up automated backups and create a disaster recovery plan.
                      </p>
                      <Link href="/contact">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#7C3AED] text-white font-bold rounded-xl hover:bg-[#6D2AD8] transition-colors cursor-pointer">
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
                { title: "WordPress Guide", href: "/wordpress-guide", icon: <FileText className="w-5 h-5" /> },
                { title: "Knowledge Base", href: "/knowledge-base", icon: <Database className="w-5 h-5" /> }
              ].map((guide, index) => (
                <Link key={index} href={guide.href}>
                  <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] mx-auto mb-3">
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
