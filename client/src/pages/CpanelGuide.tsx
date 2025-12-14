import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Settings, Folder, Database, Mail, Globe, Shield, BarChart, Clock, FileText, ChevronRight, ChevronDown, Play, BookOpen, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function CpanelGuide() {
  const [, setLocation] = useLocation();
  const [openSection, setOpenSection] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Complete cPanel Guide - AxiomHost | Master Your Hosting Control Panel";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Master cPanel with our comprehensive guide. Learn file management, databases, emails, domains, security, and all cPanel features. Step-by-step tutorials for beginners.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const cpanelSections = [
    {
      icon: <Folder className="w-6 h-6" />,
      title: "File Management",
      description: "Upload, edit, and manage your website files",
      articles: [
        {
          title: "File Manager Overview",
          content: "File Manager in cPanel allows you to manage all your website files directly from your browser without needing FTP software.",
          steps: [
            "Log in to cPanel",
            "Click on 'File Manager' in the Files section",
            "Navigate to public_html (your website's root folder)",
            "Use the toolbar to upload, create, edit, or delete files"
          ],
          tips: ["Always backup before making changes", "Use 'Show Hidden Files' to see .htaccess", "Set proper file permissions (644 for files, 755 for folders)"]
        },
        {
          title: "Uploading Files",
          content: "Upload website files directly through cPanel or use FTP for larger transfers.",
          steps: [
            "Open File Manager and navigate to your destination folder",
            "Click 'Upload' in the toolbar",
            "Drag and drop files or click 'Select File'",
            "Wait for upload to complete",
            "Extract if uploading zip files"
          ],
          tips: ["Max upload size is typically 512MB", "For larger files use FTP", "Compress files before uploading for faster transfers"]
        },
        {
          title: "Editing Files",
          content: "Edit code, configuration files, and content directly in cPanel.",
          steps: [
            "Right-click on the file you want to edit",
            "Select 'Edit' or 'Code Editor'",
            "Make your changes in the editor",
            "Click 'Save Changes'",
            "Refresh your website to see updates"
          ],
          tips: ["Use Code Editor for syntax highlighting", "Create a backup before editing important files", "Be careful with .htaccess and wp-config.php"]
        }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Create and manage MySQL databases for your applications",
      articles: [
        {
          title: "Creating a MySQL Database",
          content: "Databases store your website's dynamic content like posts, users, and settings.",
          steps: [
            "Go to cPanel → Databases → MySQL Databases",
            "Enter a database name and click 'Create Database'",
            "Scroll down and create a database user with a strong password",
            "Add the user to the database with 'All Privileges'",
            "Note down the database name, username, and password"
          ],
          tips: ["Database names are prefixed with your cPanel username", "Use strong, unique passwords", "Grant only necessary privileges in production"]
        },
        {
          title: "Using phpMyAdmin",
          content: "phpMyAdmin is a web-based tool for managing MySQL databases visually.",
          steps: [
            "Go to cPanel → Databases → phpMyAdmin",
            "Select your database from the left sidebar",
            "Browse tables, run SQL queries, import/export data",
            "Use the 'SQL' tab to run custom queries",
            "Export for backup, Import to restore"
          ],
          tips: ["Always backup before running queries", "Use 'Quick - display only minimal' for large tables", "Check SQL syntax before running"]
        },
        {
          title: "Database Backup & Restore",
          content: "Protect your data by regularly backing up your databases.",
          steps: [
            "Open phpMyAdmin and select your database",
            "Click 'Export' tab",
            "Choose 'Quick' method and SQL format",
            "Click 'Go' to download the .sql file",
            "To restore: Click 'Import', select file, and 'Go'"
          ],
          tips: ["Schedule regular database backups", "Store backups in multiple locations", "Test restoration on staging before production"]
        }
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Management",
      description: "Create professional email accounts with your domain",
      articles: [
        {
          title: "Creating Email Accounts",
          content: "Create professional email addresses like info@yourdomain.com.",
          steps: [
            "Go to cPanel → Email → Email Accounts",
            "Click 'Create' button",
            "Enter username (part before @)",
            "Select domain and create a strong password",
            "Set mailbox quota (or unlimited)",
            "Click 'Create' to finish"
          ],
          tips: ["Use descriptive usernames: info, sales, support", "Enable Plus Addressing for filtering", "Set appropriate quota to avoid storage issues"]
        },
        {
          title: "Accessing Webmail",
          content: "Read and send emails directly from your browser without email client setup.",
          steps: [
            "Go to cPanel → Email → Email Accounts",
            "Click 'Check Email' next to your account",
            "Or visit yourdomain.com/webmail directly",
            "Choose your preferred webmail app (Roundcube recommended)",
            "Log in with your email credentials"
          ],
          tips: ["Roundcube is the most modern webmail client", "Set up email signature in settings", "Create folders for organization"]
        },
        {
          title: "Email Forwarders",
          content: "Automatically forward incoming emails to another address.",
          steps: [
            "Go to cPanel → Email → Forwarders",
            "Click 'Add Forwarder'",
            "Enter the address to forward FROM",
            "Enter the destination email address",
            "Click 'Add Forwarder'",
            "Optionally keep a copy in the original mailbox"
          ],
          tips: ["Useful for consolidating multiple addresses", "Can forward to external email like Gmail", "Set up catch-all to receive all mail to any address"]
        }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Domain Management",
      description: "Add domains, subdomains, and configure DNS",
      articles: [
        {
          title: "Adding Addon Domains",
          content: "Host multiple websites on a single hosting account.",
          steps: [
            "Go to cPanel → Domains → Domains",
            "Click 'Create A New Domain'",
            "Enter the new domain name",
            "Optionally set a custom document root",
            "Click 'Submit'",
            "Update the domain's nameservers to point to AxiomHost"
          ],
          tips: ["Each addon domain gets its own folder", "You can have separate SSL for each domain", "Subdomains work independently"]
        },
        {
          title: "Creating Subdomains",
          content: "Create subdomains like blog.yourdomain.com or shop.yourdomain.com.",
          steps: [
            "Go to cPanel → Domains → Domains",
            "Click 'Create A New Domain'",
            "Enter subdomain.yourdomain.com",
            "Set the document root folder",
            "Click 'Submit'"
          ],
          tips: ["Great for staging: staging.yourdomain.com", "Can point to different folders or apps", "DNS propagation is faster than main domain"]
        },
        {
          title: "Managing DNS Records",
          content: "Configure DNS records for email, verification, and third-party services.",
          steps: [
            "Go to cPanel → Domains → Zone Editor",
            "Select your domain",
            "Click '+ Add Record'",
            "Choose record type (A, CNAME, MX, TXT)",
            "Enter the record details",
            "Click 'Save Record'"
          ],
          tips: ["A records point to IP addresses", "CNAME records alias one domain to another", "TXT records for verification and email authentication"]
        }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Features",
      description: "Protect your website and hosting account",
      articles: [
        {
          title: "SSL/TLS Installation",
          content: "Secure your website with HTTPS encryption.",
          steps: [
            "Go to cPanel → Security → SSL/TLS Status",
            "Click 'Run AutoSSL' to install free Let's Encrypt certificate",
            "Wait 5-10 minutes for installation",
            "Verify SSL is active (look for green checkmark)",
            "Force HTTPS redirect via .htaccess or plugin"
          ],
          tips: ["AutoSSL renews automatically every 90 days", "Clear browser cache if you see warnings", "Update WordPress URLs to use https://"]
        },
        {
          title: "Two-Factor Authentication",
          content: "Add an extra layer of security to your cPanel login.",
          steps: [
            "Go to cPanel → Security → Two-Factor Authentication",
            "Click 'Set Up Two-Factor Authentication'",
            "Scan QR code with Google Authenticator or Authy",
            "Enter the 6-digit code to verify",
            "Save backup codes in a secure location"
          ],
          tips: ["Never lose your backup codes", "Use authenticator app, not SMS", "Enable on all admin accounts"]
        },
        {
          title: "IP Blocker",
          content: "Block malicious IP addresses from accessing your website.",
          steps: [
            "Go to cPanel → Security → IP Blocker",
            "Enter the IP address or range to block",
            "Click 'Add'",
            "View blocked IPs in the list below",
            "Remove blocks by clicking 'Delete'"
          ],
          tips: ["Block IPs after brute force attempts", "Use ranges for persistent attackers: 192.168.1.0/24", "Check server logs for suspicious IPs"]
        }
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Statistics & Logs",
      description: "Monitor your website traffic and resource usage",
      articles: [
        {
          title: "AWStats & Webalizer",
          content: "View detailed website traffic statistics.",
          steps: [
            "Go to cPanel → Metrics → AWStats or Webalizer",
            "Select the domain to view stats",
            "Browse monthly statistics",
            "View visitors, page views, bandwidth usage",
            "Analyze traffic sources and popular pages"
          ],
          tips: ["AWStats is more detailed and accurate", "Stats update daily", "For real-time data, use Google Analytics"]
        },
        {
          title: "Error Logs",
          content: "Debug website issues by reviewing error logs.",
          steps: [
            "Go to cPanel → Metrics → Errors",
            "View the most recent 300 errors",
            "Or access raw logs via File Manager",
            "Look for file: ~/logs/error.log",
            "Identify patterns and fix issues"
          ],
          tips: ["Check after any website issues", "Look for PHP errors and warnings", "Use for debugging 500 errors"]
        },
        {
          title: "Resource Usage",
          content: "Monitor CPU, memory, and disk usage.",
          steps: [
            "Go to cPanel → Metrics → Resource Usage",
            "View current resource consumption",
            "Check CPU, Physical Memory, I/O usage",
            "Review 24-hour usage graphs",
            "Identify resource-heavy processes"
          ],
          tips: ["High usage may slow your site", "Optimize or upgrade if consistently high", "Check during traffic spikes"]
        }
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Automation & Cron Jobs",
      description: "Schedule automated tasks and scripts",
      articles: [
        {
          title: "Setting Up Cron Jobs",
          content: "Automate recurring tasks like backups, imports, and maintenance.",
          steps: [
            "Go to cPanel → Advanced → Cron Jobs",
            "Set the schedule using the time fields",
            "Or use Common Settings for presets",
            "Enter the command to run",
            "Click 'Add New Cron Job'"
          ],
          tips: ["Test commands manually first", "Use full paths: /usr/local/bin/php", "Redirect output: >> /dev/null 2>&1 to suppress emails"]
        },
        {
          title: "WordPress Cron",
          content: "Configure WordPress scheduled tasks to run reliably.",
          steps: [
            "Disable WP-Cron in wp-config.php: define('DISABLE_WP_CRON', true);",
            "Create cPanel cron job",
            "Set to run every 5-15 minutes",
            "Command: /usr/local/bin/php /home/user/public_html/wp-cron.php",
            "Save and test"
          ],
          tips: ["More reliable than built-in WP-Cron", "Reduces server load on high-traffic sites", "Required for proper scheduled post publishing"]
        }
      ]
    }
  ];

  const quickLinks = [
    { title: "File Manager", description: "Manage website files", icon: <Folder className="w-5 h-5" /> },
    { title: "Email Accounts", description: "Create email addresses", icon: <Mail className="w-5 h-5" /> },
    { title: "MySQL Databases", description: "Create databases", icon: <Database className="w-5 h-5" /> },
    { title: "SSL/TLS", description: "Install SSL certificate", icon: <Shield className="w-5 h-5" /> },
    { title: "Domains", description: "Add domains", icon: <Globe className="w-5 h-5" /> },
    { title: "Backup", description: "Backup your site", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#FF6B35] to-[#FF9F5B] text-white relative overflow-hidden">
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
                <Settings className="w-4 h-4" />
                Complete Control Panel Guide
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Master cPanel
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Learn everything about cPanel - from basic file management to advanced configurations. Step-by-step tutorials for beginners and experts alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/tutorials")}
                  className="px-8 py-4 bg-white text-[#FF6B35] font-bold rounded-full hover:bg-slate-100 transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4" /> Watch Video Tutorials
                </button>
                <button
                  onClick={() => setLocation("/cpanel-hosting")}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Get cPanel Hosting
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#1D1E2C] mb-6 text-center">Quick Access to Common Tasks</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-xl p-4 text-center hover:shadow-md hover:bg-white transition-all cursor-pointer border border-slate-100"
                >
                  <div className="bg-[#FF6B35]/10 w-12 h-12 rounded-full flex items-center justify-center text-[#FF6B35] mx-auto mb-3">
                    {link.icon}
                  </div>
                  <h3 className="font-bold text-sm text-[#1D1E2C]">{link.title}</h3>
                  <p className="text-xs text-[#545775]">{link.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* cPanel Sections */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                cPanel Feature Guides
              </h2>
              <p className="text-lg text-[#545775]">
                Click each section to expand and learn about cPanel features
              </p>
            </motion.div>

            <div className="space-y-4">
              {cpanelSections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: sectionIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenSection(openSection === sectionIndex ? null : sectionIndex)}
                    className="w-full px-6 py-5 flex items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="bg-[#FF6B35]/10 p-3 rounded-xl text-[#FF6B35]">
                      {section.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-bold text-[#1D1E2C]">{section.title}</h3>
                      <p className="text-sm text-[#545775]">{section.description}</p>
                    </div>
                    <span className="text-sm text-[#FF6B35] font-medium mr-2">
                      {section.articles.length} guides
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform ${openSection === sectionIndex ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {openSection === sectionIndex && (
                    <div className="px-6 pb-6 border-t border-slate-100">
                      <div className="space-y-6 mt-6">
                        {section.articles.map((article, articleIndex) => (
                          <div key={articleIndex} className="bg-slate-50 rounded-xl p-6">
                            <h4 className="text-lg font-bold text-[#1D1E2C] mb-2">{article.title}</h4>
                            <p className="text-[#545775] mb-4">{article.content}</p>
                            
                            <div className="mb-4">
                              <h5 className="text-sm font-bold text-[#FF6B35] mb-2">Step-by-Step:</h5>
                              <ol className="space-y-2">
                                {article.steps.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-start gap-3 text-sm text-[#545775]">
                                    <span className="bg-[#FF6B35] text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                      {stepIndex + 1}
                                    </span>
                                    {step}
                                  </li>
                                ))}
                              </ol>
                            </div>

                            <div className="bg-white rounded-lg p-4 border border-slate-200">
                              <h5 className="text-sm font-bold text-[#1D1E2C] mb-2 flex items-center gap-2">
                                <HelpCircle className="w-4 h-4 text-[#FF6B35]" />
                                Pro Tips
                              </h5>
                              <ul className="space-y-1">
                                {article.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex} className="text-sm text-[#545775] flex items-start gap-2">
                                    <span className="text-[#FF6B35]">•</span>
                                    {tip}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1D1E2C] mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "cPanel Video Tutorials", link: "/tutorials", icon: <Play className="w-5 h-5" />, type: "Video Series" },
                { title: "WordPress Installation Guide", link: "/kb/wordpress-installation", icon: <FileText className="w-5 h-5" />, type: "Tutorial" },
                { title: "Email Setup Guide", link: "/kb/email-account-creation", icon: <Mail className="w-5 h-5" />, type: "Guide" }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setLocation(resource.link)}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all cursor-pointer group border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF6B35]/10 p-3 rounded-xl text-[#FF6B35]">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-[#FF6B35] mb-1 block">{resource.type}</span>
                      <h3 className="font-bold text-[#1D1E2C] group-hover:text-[#FF6B35] transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#FF6B35]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-[#FF9F5B] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6">
                Get cPanel Hosting Today
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Industry-standard control panel with all the features you need to manage your website effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/cpanel-hosting")}
                  className="px-8 py-4 bg-white text-[#FF6B35] font-bold rounded-full hover:bg-slate-100 transition-colors"
                >
                  View cPanel Plans
                </button>
                <button
                  onClick={() => setLocation("/contact")}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Contact Support
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
