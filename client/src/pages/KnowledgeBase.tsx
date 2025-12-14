import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Book, Search, ChevronRight, Server, Mail, Shield, Globe, Zap, Database, FileText, HelpCircle, Settings, Cloud, Users, CreditCard, Lock, Folder, Code, Terminal, BarChart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function KnowledgeBase() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Knowledge Base - AxiomHost | Complete Web Hosting Documentation & Guides";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Comprehensive knowledge base with 500+ articles covering web hosting, domains, email, security, WordPress, cPanel, and more. Expert guides for Nigerian businesses and developers.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Comprehensive knowledge base with 500+ articles covering web hosting, domains, email, security, WordPress, cPanel, and more. Expert guides for Nigerian businesses and developers.";
      document.head.appendChild(meta);
    }
    
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Getting Started",
      description: "New to web hosting? Start here with our beginner-friendly guides",
      articles: [
        { title: "What is Web Hosting? A Complete Beginner's Guide", slug: "/kb/what-is-web-hosting" },
        { title: "How to Choose the Right Hosting Plan", slug: "/kb/choosing-hosting-plan" },
        { title: "Understanding Domain Names and DNS", slug: "/kb/domain-names-dns" },
        { title: "Your First Website: Step-by-Step Setup", slug: "/kb/first-website-setup" },
        { title: "Hosting Account Activation Guide", slug: "/kb/account-activation" },
        { title: "Navigating Your Client Area Dashboard", slug: "/kb/client-area-guide" }
      ],
      color: "from-[#673DE6] to-[#9F85FF]"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "cPanel Management",
      description: "Master cPanel with our comprehensive tutorials and guides",
      articles: [
        { title: "cPanel Interface Overview", slug: "/kb/cpanel-overview" },
        { title: "File Manager: Upload and Manage Files", slug: "/kb/cpanel-file-manager" },
        { title: "Creating and Managing Databases", slug: "/kb/cpanel-databases" },
        { title: "Email Account Setup in cPanel", slug: "/kb/cpanel-email-setup" },
        { title: "Domain and Subdomain Management", slug: "/kb/cpanel-domains" },
        { title: "Backup and Restore with cPanel", slug: "/kb/cpanel-backups" },
        { title: "PHP Version Selector Guide", slug: "/kb/cpanel-php-version" },
        { title: "SSL/TLS Certificate Installation", slug: "/kb/cpanel-ssl-installation" }
      ],
      color: "from-[#FF6B35] to-[#FF9F5B]"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "WordPress Hosting",
      description: "Everything you need to know about WordPress hosting and management",
      articles: [
        { title: "One-Click WordPress Installation", slug: "/kb/wordpress-installation" },
        { title: "WordPress Security Best Practices", slug: "/kb/wordpress-security" },
        { title: "Optimizing WordPress Performance", slug: "/kb/wordpress-optimization" },
        { title: "Essential WordPress Plugins Guide", slug: "/kb/wordpress-plugins" },
        { title: "WordPress Theme Installation & Customization", slug: "/kb/wordpress-themes" },
        { title: "WordPress Backup Solutions", slug: "/kb/wordpress-backups" },
        { title: "Fixing Common WordPress Errors", slug: "/kb/wordpress-troubleshooting" },
        { title: "WordPress Multisite Setup", slug: "/kb/wordpress-multisite" }
      ],
      color: "from-[#21759B] to-[#4DABCF]"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Services",
      description: "Set up and manage professional email with your domain",
      articles: [
        { title: "Creating Professional Email Accounts", slug: "/kb/email-account-creation" },
        { title: "Configuring Email on Mobile Devices", slug: "/kb/email-mobile-setup" },
        { title: "Setting Up Email Clients (Outlook, Thunderbird)", slug: "/kb/email-client-setup" },
        { title: "Email Forwarders and Autoresponders", slug: "/kb/email-forwarders" },
        { title: "SPF, DKIM, and DMARC Configuration", slug: "/kb/email-authentication" },
        { title: "Spam Protection and Filtering", slug: "/kb/email-spam-protection" },
        { title: "Mailing Lists and Group Emails", slug: "/kb/email-mailing-lists" },
        { title: "Webmail Access Guide", slug: "/kb/webmail-guide" }
      ],
      color: "from-[#00B090] to-[#4DD4B8]"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Domain Management",
      description: "Register, transfer, and manage domains effectively",
      articles: [
        { title: "Domain Registration Guide", slug: "/kb/domain-registration" },
        { title: "Transferring Domains to AxiomHost", slug: "/kb/domain-transfer-guide" },
        { title: "DNS Records Explained (A, CNAME, MX, TXT)", slug: "/kb/dns-records-explained" },
        { title: "Nameserver Configuration", slug: "/kb/nameserver-setup" },
        { title: "Domain Renewal and Expiration", slug: "/kb/domain-renewal" },
        { title: "WHOIS Privacy Protection", slug: "/kb/whois-privacy" },
        { title: "Subdomain Creation and Management", slug: "/kb/subdomain-management" },
        { title: "Domain Redirect Setup", slug: "/kb/domain-redirects" }
      ],
      color: "from-[#EC1C65] to-[#FF6B9D]"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & SSL",
      description: "Protect your website with robust security measures",
      articles: [
        { title: "Free SSL Certificate Installation", slug: "/kb/ssl-installation" },
        { title: "Forcing HTTPS on Your Website", slug: "/kb/force-https" },
        { title: "Two-Factor Authentication Setup", slug: "/kb/2fa-setup" },
        { title: "Website Firewall Configuration", slug: "/kb/firewall-setup" },
        { title: "Malware Scanning and Removal", slug: "/kb/malware-removal" },
        { title: "Password Security Best Practices", slug: "/kb/password-security" },
        { title: "IP Blocking and Access Control", slug: "/kb/ip-blocking" },
        { title: "Hotlink Protection Setup", slug: "/kb/hotlink-protection" }
      ],
      color: "from-[#FFA500] to-[#FFD700]"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Speed up your website for better user experience and SEO",
      articles: [
        { title: "Website Speed Optimization Guide", slug: "/kb/speed-optimization" },
        { title: "Enabling Browser Caching", slug: "/kb/browser-caching" },
        { title: "Image Optimization Techniques", slug: "/kb/image-optimization" },
        { title: "CDN Setup and Configuration", slug: "/kb/cdn-setup" },
        { title: "Database Optimization", slug: "/kb/database-optimization" },
        { title: "Gzip Compression Setup", slug: "/kb/gzip-compression" },
        { title: "Minifying CSS and JavaScript", slug: "/kb/minification" },
        { title: "PHP OpCache Configuration", slug: "/kb/php-opcache" }
      ],
      color: "from-[#8B5CF6] to-[#A78BFA]"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      description: "Create, manage, and optimize databases for your applications",
      articles: [
        { title: "Creating MySQL Databases", slug: "/kb/mysql-create-database" },
        { title: "phpMyAdmin Usage Guide", slug: "/kb/phpmyadmin-guide" },
        { title: "Database User Management", slug: "/kb/database-users" },
        { title: "Database Backup and Restore", slug: "/kb/database-backup" },
        { title: "Importing and Exporting Databases", slug: "/kb/database-import-export" },
        { title: "Database Connection Troubleshooting", slug: "/kb/database-troubleshooting" },
        { title: "Remote Database Access", slug: "/kb/remote-database-access" },
        { title: "Database Size Optimization", slug: "/kb/database-optimization-size" }
      ],
      color: "from-[#059669] to-[#34D399]"
    },
    {
      icon: <Folder className="w-6 h-6" />,
      title: "Backup & Restore",
      description: "Protect your data with regular backups and disaster recovery",
      articles: [
        { title: "Automated Backup Setup with JetBackup", slug: "/kb/jetbackup-setup" },
        { title: "Manual Full Account Backup", slug: "/kb/manual-backup" },
        { title: "Partial Backup: Files Only", slug: "/kb/partial-backup-files" },
        { title: "Partial Backup: Databases Only", slug: "/kb/partial-backup-database" },
        { title: "Restoring from Backup", slug: "/kb/restore-from-backup" },
        { title: "Downloading Backups Locally", slug: "/kb/download-backups" },
        { title: "Cloud Backup Integration", slug: "/kb/cloud-backup" },
        { title: "Disaster Recovery Planning", slug: "/kb/disaster-recovery" }
      ],
      color: "from-[#7C3AED] to-[#A78BFA]"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "VPS & Cloud Hosting",
      description: "Advanced hosting solutions for growing businesses",
      articles: [
        { title: "VPS vs Shared Hosting: What to Choose", slug: "/kb/vps-vs-shared" },
        { title: "Getting Started with VPS Hosting", slug: "/kb/vps-getting-started" },
        { title: "Server Management Basics", slug: "/kb/server-management" },
        { title: "Installing Control Panels on VPS", slug: "/kb/vps-control-panel" },
        { title: "VPS Security Hardening", slug: "/kb/vps-security" },
        { title: "Resource Monitoring and Scaling", slug: "/kb/vps-scaling" },
        { title: "Cloud Hosting Benefits", slug: "/kb/cloud-hosting-benefits" },
        { title: "Load Balancing Configuration", slug: "/kb/load-balancing" }
      ],
      color: "from-[#0EA5E9] to-[#38BDF8]"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Reseller Hosting",
      description: "Start your own hosting business with our reseller guides",
      articles: [
        { title: "Reseller Hosting Overview", slug: "/kb/reseller-overview" },
        { title: "WHM Interface Guide", slug: "/kb/whm-guide" },
        { title: "Creating Client Accounts", slug: "/kb/create-client-accounts" },
        { title: "Hosting Package Configuration", slug: "/kb/hosting-packages" },
        { title: "White-Label Branding Setup", slug: "/kb/white-label-branding" },
        { title: "Private Nameserver Configuration", slug: "/kb/private-nameservers" },
        { title: "WHMCS Integration Guide", slug: "/kb/whmcs-integration" },
        { title: "Client Support Best Practices", slug: "/kb/client-support" }
      ],
      color: "from-[#D946EF] to-[#E879F9]"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Developer Tools",
      description: "Advanced tools for developers and technical users",
      articles: [
        { title: "SSH Access and Key Authentication", slug: "/kb/ssh-access" },
        { title: "FTP/SFTP Configuration", slug: "/kb/ftp-sftp-setup" },
        { title: "Git Version Control with cPanel", slug: "/kb/git-cpanel" },
        { title: "Node.js Application Deployment", slug: "/kb/nodejs-deployment" },
        { title: "Python Application Setup", slug: "/kb/python-setup" },
        { title: "Cron Jobs Automation", slug: "/kb/cron-jobs" },
        { title: "WP-CLI Usage Guide", slug: "/kb/wp-cli-guide" },
        { title: "Custom Error Pages", slug: "/kb/custom-error-pages" }
      ],
      color: "from-[#1F2937] to-[#4B5563]"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Billing & Payments",
      description: "Manage your account, invoices, and payment methods",
      articles: [
        { title: "Payment Methods Available", slug: "/kb/payment-methods" },
        { title: "Invoice Management", slug: "/kb/invoice-management" },
        { title: "Upgrading Your Hosting Plan", slug: "/kb/upgrade-plan" },
        { title: "Auto-Renewal Settings", slug: "/kb/auto-renewal" },
        { title: "Refund Policy Explained", slug: "/kb/refund-policy" },
        { title: "Promo Codes and Discounts", slug: "/kb/promo-codes" },
        { title: "Account Suspension and Reactivation", slug: "/kb/account-suspension" },
        { title: "Billing Cycle Options", slug: "/kb/billing-cycles" }
      ],
      color: "from-[#10B981] to-[#6EE7B7]"
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Troubleshooting",
      description: "Diagnose and fix common hosting issues quickly",
      articles: [
        { title: "Website Not Loading: Common Causes", slug: "/kb/website-not-loading" },
        { title: "500 Internal Server Error Fix", slug: "/kb/500-error-fix" },
        { title: "404 Not Found Error Solutions", slug: "/kb/404-error-fix" },
        { title: "Email Delivery Problems", slug: "/kb/email-delivery-issues" },
        { title: "Database Connection Errors", slug: "/kb/database-connection-errors" },
        { title: "SSL Certificate Issues", slug: "/kb/ssl-issues" },
        { title: "File Permission Problems", slug: "/kb/file-permissions" },
        { title: "WordPress White Screen of Death", slug: "/kb/wordpress-wsod" }
      ],
      color: "from-[#EF4444] to-[#F87171]"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics & SEO",
      description: "Track performance and optimize for search engines",
      articles: [
        { title: "Google Analytics Integration", slug: "/kb/google-analytics" },
        { title: "Search Console Setup", slug: "/kb/search-console" },
        { title: "Website Statistics in cPanel", slug: "/kb/cpanel-statistics" },
        { title: "SEO Basics for Beginners", slug: "/kb/seo-basics" },
        { title: "XML Sitemap Creation", slug: "/kb/xml-sitemap" },
        { title: "Meta Tags Optimization", slug: "/kb/meta-tags" },
        { title: "Mobile-Friendly Website Testing", slug: "/kb/mobile-friendly-test" },
        { title: "Page Speed Insights Guide", slug: "/kb/page-speed-insights" }
      ],
      color: "from-[#6366F1] to-[#818CF8]"
    }
  ];

  const allArticles = categories.flatMap(cat => 
    cat.articles.map(article => ({
      ...article,
      category: cat.title,
      icon: cat.icon,
      color: cat.color
    }))
  );

  const filteredArticles = searchQuery
    ? allArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const displayedCategories = selectedCategory
    ? categories.filter(cat => cat.title === selectedCategory)
    : categories;

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#1D1E2C] via-[#2D2E3C] to-[#1D1E2C] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#673DE6] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#00D4AA] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#673DE6]/20 text-[#9F85FF] text-sm font-medium mb-6">
                <Book className="w-4 h-4" />
                500+ Expert Articles
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Knowledge Base
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
                Comprehensive documentation, tutorials, and guides to help you master web hosting. From beginner basics to advanced techniques.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, tutorials, and guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 h-16 text-lg rounded-2xl bg-white text-[#1D1E2C] border-0 shadow-xl focus:ring-2 focus:ring-[#673DE6]"
                />
              </div>
              
              {/* Search Results */}
              {searchQuery && filteredArticles.length > 0 && (
                <div className="max-w-2xl mx-auto mt-4 bg-white rounded-xl shadow-xl text-left max-h-80 overflow-y-auto">
                  {filteredArticles.slice(0, 10).map((article, index) => (
                    <div
                      key={index}
                      className="px-5 py-4 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0"
                      onClick={() => setLocation(article.slug)}
                    >
                      <p className="text-sm text-[#673DE6] font-medium mb-1">{article.category}</p>
                      <p className="text-[#1D1E2C] font-semibold">{article.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Help Articles" },
                { number: "15", label: "Categories" },
                { number: "90+", label: "Video Tutorials" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl md:text-4xl font-black text-[#673DE6]">{stat.number}</p>
                  <p className="text-slate-600 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        {selectedCategory && (
          <section className="py-6 bg-white border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">Filtering by:</span>
                <span className="px-4 py-2 bg-[#673DE6] text-white rounded-full text-sm font-medium flex items-center gap-2">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory(null)} className="hover:bg-white/20 rounded-full p-0.5">
                    ×
                  </button>
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Categories Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1E2C] mb-4">
                Browse by Topic
              </h2>
              <p className="text-lg text-[#545775] max-w-2xl mx-auto">
                Find expert articles and step-by-step tutorials organized by topic
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#673DE6]/30 hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Category Header */}
                  <div 
                    className={`bg-gradient-to-r ${category.color} p-6 cursor-pointer`}
                    onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="bg-white/20 p-3 rounded-xl">
                        {category.icon}
                      </div>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {category.articles.length} articles
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-4">{category.title}</h3>
                    <p className="text-white/80 text-sm mt-2">{category.description}</p>
                  </div>
                  
                  {/* Article List */}
                  <div className="p-4">
                    {category.articles.slice(0, 4).map((article, articleIndex) => (
                      <div
                        key={articleIndex}
                        className="flex items-center gap-3 py-3 px-3 hover:bg-slate-50 rounded-lg cursor-pointer group"
                        onClick={() => setLocation(article.slug)}
                      >
                        <FileText className="w-4 h-4 text-[#673DE6] flex-shrink-0" />
                        <span className="text-sm text-[#1D1E2C] group-hover:text-[#673DE6] transition-colors line-clamp-1">
                          {article.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-300 ml-auto flex-shrink-0 group-hover:text-[#673DE6]" />
                      </div>
                    ))}
                    {category.articles.length > 4 && (
                      <button
                        className="w-full mt-2 py-3 text-sm font-semibold text-[#673DE6] hover:bg-[#673DE6]/5 rounded-lg transition-colors"
                        onClick={() => setSelectedCategory(category.title)}
                      >
                        View all {category.articles.length} articles →
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-4">
                Most Popular Articles
              </h2>
              <p className="text-lg text-[#545775]">
                Top-read articles this month
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "How to Install WordPress on Your Hosting Account", category: "WordPress", views: "15.2K", time: "5 min read" },
                { title: "Understanding cPanel: A Beginner's Guide", category: "cPanel", views: "12.8K", time: "10 min read" },
                { title: "Setting Up Professional Email with Your Domain", category: "Email", views: "11.4K", time: "8 min read" },
                { title: "Free SSL Certificate Installation Guide", category: "Security", views: "10.9K", time: "6 min read" },
                { title: "Website Speed Optimization Complete Guide", category: "Performance", views: "9.7K", time: "15 min read" },
                { title: "How to Transfer Your Domain to AxiomHost", category: "Domains", views: "8.5K", time: "7 min read" },
                { title: "Backup and Restore Your Website", category: "Backup", views: "7.8K", time: "8 min read" },
                { title: "Troubleshooting 500 Internal Server Error", category: "Troubleshooting", views: "7.2K", time: "5 min read" }
              ].map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-[#673DE6]/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#673DE6]/10 p-3 rounded-xl text-[#673DE6]">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-[#673DE6] mb-1 block">{article.category}</span>
                      <h3 className="text-lg font-bold text-[#1D1E2C] group-hover:text-[#673DE6] transition-colors mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>{article.views} views</span>
                        <span>•</span>
                        <span>{article.time}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#673DE6] transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Tutorials CTA */}
        <section className="py-20 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Prefer Video Tutorials?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Watch our step-by-step video guides covering everything from basic setup to advanced configurations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setLocation("/tutorials")}
                    className="px-8 py-4 bg-white text-[#673DE6] font-bold rounded-full hover:bg-slate-100 transition-colors"
                  >
                    Browse Video Tutorials
                  </button>
                  <button
                    onClick={() => setLocation("/help")}
                    className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Visit Help Center
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { number: "90+", label: "Video Tutorials" },
                  { number: "50+", label: "Quick Tips" },
                  { number: "HD", label: "Quality Videos" },
                  { number: "Free", label: "All Content" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
                    <p className="text-3xl font-black">{stat.number}</p>
                    <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Need Help CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-[#1D1E2C] mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-[#545775] mb-8">
                Our support team is available 24/7 to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setLocation("/contact")}
                  className="px-8 py-4 bg-[#673DE6] text-white font-bold rounded-full hover:bg-[#5B21B6] transition-colors"
                >
                  Contact Support
                </button>
                <button
                  onClick={() => setLocation("/faq")}
                  className="px-8 py-4 bg-slate-100 text-[#1D1E2C] font-bold rounded-full hover:bg-slate-200 transition-colors"
                >
                  View FAQ
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
