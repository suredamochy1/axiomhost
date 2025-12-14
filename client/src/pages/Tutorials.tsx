import { useEffect, useState } from "react";
import { BookOpen, Video, FileText, Search, ArrowRight, Clock } from "lucide-react";
import { useLocation } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Web Hosting Tutorials & Guides - AxiomHost | Learn Website Management Nigeria";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Master web hosting with 750+ free tutorials, video guides, and articles. Learn WordPress installation, cPanel management, SSL setup, email configuration, website optimization, backups, security, and more. Expert guides for Nigerian businesses.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Master web hosting with 750+ free tutorials, video guides, and articles. Learn WordPress installation, cPanel management, SSL setup, email configuration, website optimization, backups, security, and more. Expert guides for Nigerian businesses.";
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "web hosting tutorials Nigeria, WordPress installation guide, cPanel tutorials, website management, email setup guide, SSL certificate installation, website optimization, backup tutorials, domain setup, hosting guides Nigeria, website security tutorials");
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = "web hosting tutorials Nigeria, WordPress installation guide, cPanel tutorials, website management, email setup guide, SSL certificate installation, website optimization, backup tutorials, domain setup, hosting guides Nigeria, website security tutorials";
      document.head.appendChild(meta);
    }
    
    window.scrollTo(0, 0);

    const tutorialSchema = {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "AxiomHost Web Hosting Tutorials",
      "description": "Comprehensive web hosting tutorials covering WordPress, cPanel, security, email, domains, and website management",
      "provider": {
        "@type": "Organization",
        "name": "AxiomHost",
        "url": "https://axiomhost.cloud"
      },
      "educationalLevel": "Beginner to Advanced",
      "learningResourceType": ["Tutorial", "Video", "Article"],
      "inLanguage": "en"
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://axiomhost.cloud"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tutorials",
          "item": "https://axiomhost.cloud/tutorials"
        }
      ]
    };

    [tutorialSchema, breadcrumbSchema].forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const categories = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      count: "50+ videos",
      description: "Step-by-step video guides for common tasks"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Written Guides",
      count: "200+ articles",
      description: "Detailed written tutorials with screenshots"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Knowledge Base",
      count: "500+ articles",
      description: "Comprehensive documentation and FAQs"
    }
  ];

  const allTutorials = [
    { title: "How to Install WordPress with One-Click Installer", category: "Getting Started", duration: "5 min", type: "video", description: "Learn how to install WordPress on your hosting account using Softaculous one-click installer in cPanel. Step-by-step guide for beginners." },
    { title: "Complete WordPress Setup Guide for Beginners", category: "Getting Started", duration: "15 min", type: "article", description: "Comprehensive guide covering WordPress installation, theme selection, essential plugins, and basic configuration for Nigerian businesses." },
    { title: "Setting Up Your First Website with cPanel", category: "Getting Started", duration: "10 min", type: "video", description: "Navigate cPanel interface, upload files via File Manager, create databases, and configure your first website from scratch." },
    { title: "Understanding Web Hosting Basics", category: "Getting Started", duration: "8 min", type: "article", description: "Essential concepts every website owner should know: domains, DNS, nameservers, hosting types, and how they work together." },
    { title: "Domain Registration and Setup Guide", category: "Getting Started", duration: "7 min", type: "video", description: "Register your domain name, configure nameservers, and point your domain to AxiomHost hosting servers." },
    { title: "Migrating Your Website to AxiomHost", category: "Getting Started", duration: "12 min", type: "article", description: "Complete migration guide covering cPanel backups, database exports, file transfers, and DNS propagation for zero-downtime migration." },
    { title: "Creating Professional Email with Your Domain", category: "Email Setup", duration: "8 min", type: "video", description: "Set up professional email addresses (info@yourdomain.com) using cPanel email accounts with IMAP, POP3, and webmail access." },
    { title: "Configuring Email on iPhone and Android", category: "Email Setup", duration: "6 min", type: "article", description: "Step-by-step configuration guide for adding your domain email to mobile devices with proper IMAP/SMTP settings." },
    { title: "Setting Up Email Forwarders and Autoresponders", category: "Email Setup", duration: "5 min", type: "video", description: "Create email forwarders to redirect messages and set up autoresponders for vacation or business replies." },
    { title: "Advanced Email Security with SPF, DKIM, and DMARC", category: "Email Setup", duration: "10 min", type: "article", description: "Configure email authentication records to prevent spoofing, improve deliverability, and protect your domain reputation." },
    { title: "Managing Email Filters and Spam Protection", category: "Email Setup", duration: "7 min", type: "video", description: "Set up email filters, configure SpamAssassin, whitelist/blacklist senders, and manage spam protection effectively." },
    { title: "Setting Up Mailing Lists for Business Communication", category: "Email Setup", duration: "9 min", type: "article", description: "Create and manage mailing lists for newsletters, team communication, and customer updates using cPanel." },
    { title: "Installing Free SSL Certificate with Let's Encrypt", category: "Security", duration: "6 min", type: "video", description: "Secure your website with free SSL certificate installation via cPanel SSL/TLS manager. Enable HTTPS in minutes." },
    { title: "Forcing HTTPS and Redirecting All Traffic to SSL", category: "Security", duration: "4 min", type: "article", description: "Configure .htaccess rules to redirect all HTTP traffic to HTTPS and ensure secure connections for all visitors." },
    { title: "Setting Up Two-Factor Authentication (2FA)", category: "Security", duration: "5 min", type: "video", description: "Enable 2FA for cPanel login to add an extra security layer protecting your hosting account from unauthorized access." },
    { title: "WordPress Security Hardening Guide", category: "Security", duration: "12 min", type: "article", description: "Complete WordPress security checklist: security plugins, login protection, file permissions, database security, and malware prevention." },
    { title: "Configuring Web Application Firewall (WAF)", category: "Security", duration: "8 min", type: "video", description: "Set up and configure ModSecurity WAF rules to protect against SQL injection, XSS attacks, and common vulnerabilities." },
    { title: "Password Security Best Practices", category: "Security", duration: "6 min", type: "article", description: "Create strong passwords, use password managers, enable password-protected directories, and secure FTP/SSH access." },
    { title: "Preventing Hotlinking and Bandwidth Theft", category: "Security", duration: "5 min", type: "video", description: "Configure hotlink protection to prevent other websites from stealing your images and wasting your bandwidth." },
    { title: "Setting Up IP Address Blocking", category: "Security", duration: "4 min", type: "article", description: "Block malicious IP addresses, configure deny rules in .htaccess, and protect your site from repeated attacks." },
    { title: "Website Performance Optimization Complete Guide", category: "Performance", duration: "15 min", type: "article", description: "Comprehensive guide covering caching, image optimization, CDN setup, database optimization, and code minification for faster websites." },
    { title: "Setting Up CloudFlare CDN with AxiomHost", category: "Performance", duration: "10 min", type: "video", description: "Integrate CloudFlare CDN for global content delivery, DDoS protection, and significant performance improvements." },
    { title: "WordPress Caching with StackCache", category: "Performance", duration: "8 min", type: "article", description: "Configure AxiomHost's proprietary StackCache plugin for automatic WordPress caching and page speed optimization." },
    { title: "Image Optimization for Faster Load Times", category: "Performance", duration: "7 min", type: "video", description: "Compress images without quality loss, implement lazy loading, use WebP format, and optimize media library for speed." },
    { title: "Database Optimization and Cleanup", category: "Performance", duration: "9 min", type: "article", description: "Optimize WordPress database, remove post revisions, clean spam comments, and repair tables for better performance." },
    { title: "Enabling Gzip Compression", category: "Performance", duration: "5 min", type: "video", description: "Enable Gzip compression in cPanel to reduce file sizes and improve page load speeds by up to 70%." },
    { title: "Minifying CSS, JavaScript, and HTML", category: "Performance", duration: "6 min", type: "article", description: "Use plugins and manual techniques to minify code, reduce file sizes, and improve website loading performance." },
    { title: "PHP Version Optimization", category: "Performance", duration: "4 min", type: "video", description: "Upgrade to latest PHP version for better performance, security, and compatibility with modern WordPress themes." },
    { title: "Automated Website Backups with JetBackup", category: "Maintenance", duration: "7 min", type: "video", description: "Configure automatic backups using JetBackup in cPanel, schedule backup frequency, and understand retention policies." },
    { title: "Manual Backup and Restore Guide", category: "Maintenance", duration: "10 min", type: "article", description: "Create full cPanel backups, download files, export databases, and restore your website manually when needed." },
    { title: "WordPress Backup Strategies", category: "Maintenance", duration: "8 min", type: "video", description: "Use UpdraftPlus and other plugins for automated WordPress backups to cloud storage (Google Drive, Dropbox)." },
    { title: "Restoring from Backup After Disaster", category: "Maintenance", duration: "12 min", type: "article", description: "Step-by-step disaster recovery process: restore files, import database, reconfigure settings, and get back online fast." },
    { title: "Scheduling Automated Tasks with Cron Jobs", category: "Maintenance", duration: "9 min", type: "video", description: "Create and manage cron jobs for automated backups, database maintenance, script execution, and scheduled tasks." },
    { title: "WordPress Core and Plugin Updates", category: "Maintenance", duration: "6 min", type: "article", description: "Best practices for updating WordPress core, plugins, and themes safely without breaking your website." },
    { title: "Using cPanel File Manager", category: "cPanel", duration: "12 min", type: "video", description: "Master cPanel File Manager: upload/download files, edit code, change permissions, extract archives, and manage website files." },
    { title: "Creating and Managing MySQL Databases", category: "cPanel", duration: "10 min", type: "article", description: "Create MySQL databases, add users, assign privileges, and manage databases using phpMyAdmin in cPanel." },
    { title: "Setting Up FTP Accounts", category: "cPanel", duration: "7 min", type: "video", description: "Create FTP accounts for file access, configure FTP clients (FileZilla), and manage FTP permissions and directories." },
    { title: "Managing Domains and Subdomains", category: "cPanel", duration: "8 min", type: "article", description: "Add addon domains, create subdomains, configure domain redirects, and manage multiple websites in one cPanel account." },
    { title: "Creating Custom Error Pages", category: "cPanel", duration: "5 min", type: "video", description: "Design and implement custom 404, 500, and other error pages to improve user experience and maintain branding." },
    { title: "Accessing Website Statistics and Analytics", category: "cPanel", duration: "6 min", type: "article", description: "Use AWStats, Webalizer, and raw access logs to analyze traffic, visitor behavior, and website performance metrics." },
    { title: "Setting Up Password-Protected Directories", category: "cPanel", duration: "4 min", type: "video", description: "Protect sensitive directories with password authentication using cPanel Directory Privacy feature." },
    { title: "Managing Redirects with cPanel", category: "cPanel", duration: "5 min", type: "article", description: "Create 301/302 redirects, domain redirects, and URL forwarding using cPanel's Redirect interface." },
    { title: "Installing WordPress Themes Safely", category: "WordPress", duration: "6 min", type: "video", description: "Find, install, and activate WordPress themes from official repository and premium sources safely." },
    { title: "Essential WordPress Plugins for Every Website", category: "WordPress", duration: "10 min", type: "article", description: "Top plugins for SEO (Yoast), security (Wordfence), caching, backups, forms, and site optimization." },
    { title: "WordPress SEO Optimization Complete Guide", category: "WordPress", duration: "15 min", type: "video", description: "Configure Yoast SEO, optimize permalinks, create XML sitemaps, improve meta descriptions, and boost search rankings." },
    { title: "Creating a WordPress Staging Environment", category: "WordPress", duration: "8 min", type: "article", description: "Set up WordPress staging site with one-click cloning to test changes, updates, and new features before going live." },
    { title: "WooCommerce Installation and Setup", category: "WordPress", duration: "12 min", type: "video", description: "Install WooCommerce, configure payment gateways (Paystack, Flutterwave), set up products, and launch your online store." },
    { title: "WordPress Multisite Network Setup", category: "WordPress", duration: "14 min", type: "article", description: "Create WordPress multisite network to manage multiple websites from single installation with shared resources." },
    { title: "Customizing WordPress with Child Themes", category: "WordPress", duration: "9 min", type: "video", description: "Create child themes for safe customization without losing changes during theme updates." },
    { title: "WordPress Speed Optimization Checklist", category: "WordPress", duration: "11 min", type: "article", description: "Complete speed optimization: caching plugins, CDN integration, lazy loading, database cleanup, and image compression." },
    { title: "Managing DNS Records in cPanel", category: "Domain", duration: "10 min", type: "video", description: "Add, edit, and manage DNS records (A, CNAME, MX, TXT) for email, subdomains, and third-party services." },
    { title: "Domain Transfer to AxiomHost Guide", category: "Domain", duration: "8 min", type: "article", description: "Transfer domains from GoDaddy, Namecheap, or other registrars to AxiomHost with authorization codes and unlock steps." },
    { title: "Setting Up Custom Nameservers", category: "Domain", duration: "6 min", type: "video", description: "Create custom branded nameservers (ns1.yourdomain.com) for professional hosting reseller business." },
    { title: "Domain Privacy Protection Setup", category: "Domain", duration: "4 min", type: "article", description: "Enable WHOIS privacy to protect personal information from public domain registration databases." },
    { title: "Understanding DNS Propagation", category: "Domain", duration: "5 min", type: "video", description: "Learn about DNS propagation delays, how to check DNS status, and estimate propagation completion time." },
    { title: "Troubleshooting Website Connection Issues", category: "Troubleshooting", duration: "10 min", type: "article", description: "Diagnose and fix common connection problems: DNS errors, 500/502 errors, timeout issues, and SSL problems." },
    { title: "Fixing WordPress White Screen of Death", category: "Troubleshooting", duration: "8 min", type: "video", description: "Identify causes and fix WordPress WSOD: plugin conflicts, memory limits, theme issues, and PHP errors." },
    { title: "Resolving Email Delivery Problems", category: "Troubleshooting", duration: "9 min", type: "article", description: "Fix email sending/receiving issues: SPF/DKIM configuration, SMTP errors, spam folder placement, and authentication." },
    { title: "Database Connection Error Solutions", category: "Troubleshooting", duration: "7 min", type: "video", description: "Repair database connection errors in WordPress and other CMS platforms with database credential verification." },
    { title: "Fixing File Permission Errors", category: "Troubleshooting", duration: "6 min", type: "article", description: "Correct file and folder permissions (644/755) to resolve upload errors and security vulnerabilities." },
    { title: "Understanding Server Error Codes", category: "Troubleshooting", duration: "8 min", type: "video", description: "Learn what 404, 500, 502, 503 errors mean and how to diagnose and fix each type of server error." },
    { title: "Building E-commerce Store with WooCommerce", category: "E-commerce", duration: "20 min", type: "article", description: "Complete WooCommerce guide: product setup, payment gateways for Nigeria (Paystack, Flutterwave), shipping, taxes." },
    { title: "Integrating Paystack Payment Gateway", category: "E-commerce", duration: "8 min", type: "video", description: "Set up Paystack for accepting card payments, bank transfers, and mobile money in your Nigerian online store." },
    { title: "Setting Up Flutterwave for WooCommerce", category: "E-commerce", duration: "7 min", type: "article", description: "Configure Flutterwave payment gateway for multi-currency payments and seamless African payment processing." },
    { title: "WooCommerce Security Best Practices", category: "E-commerce", duration: "10 min", type: "video", description: "Secure your online store: SSL setup, PCI compliance, fraud prevention, secure checkout, and customer data protection." },
    { title: "Product Import and Bulk Management", category: "E-commerce", duration: "9 min", type: "article", description: "Import hundreds of products using CSV, manage inventory, set bulk pricing, and automate product updates." },
    { title: "Optimizing WooCommerce for High Traffic", category: "E-commerce", duration: "12 min", type: "video", description: "Scale WooCommerce for thousands of products and visitors: caching, database optimization, and hosting resources." },
    { title: "Installing SSL Certificate Step-by-Step", category: "SSL & HTTPS", duration: "6 min", type: "video", description: "Complete SSL installation process using Let's Encrypt free certificates in cPanel with automatic renewal." },
    { title: "Wildcard SSL for Subdomains", category: "SSL & HTTPS", duration: "5 min", type: "article", description: "Set up wildcard SSL certificates to secure main domain and all subdomains with single certificate." },
    { title: "Mixed Content Errors and HTTPS Fixes", category: "SSL & HTTPS", duration: "7 min", type: "video", description: "Resolve mixed content warnings, update HTTP resources to HTTPS, and ensure fully secure website." },
    { title: "SSL Certificate Renewal and Maintenance", category: "SSL & HTTPS", duration: "4 min", type: "article", description: "Manage SSL certificate expiration, set up automatic renewal, and monitor certificate validity." },
    { title: "Email Marketing with Mailchimp Integration", category: "Marketing", duration: "10 min", type: "video", description: "Connect Mailchimp to WordPress, create signup forms, manage subscribers, and run email campaigns." },
    { title: "SEO Content Writing Best Practices", category: "Marketing", duration: "12 min", type: "article", description: "Write SEO-friendly content: keyword research, heading structure, meta descriptions, and internal linking strategies." },
    { title: "Google Analytics Setup and Tracking", category: "Marketing", duration: "8 min", type: "video", description: "Install Google Analytics, configure tracking code, set up goals, and understand traffic reports." },
    { title: "Social Media Integration for Websites", category: "Marketing", duration: "6 min", type: "article", description: "Add social sharing buttons, Facebook pixels, Instagram feeds, and social login to boost engagement." },
    { title: "Building Landing Pages That Convert", category: "Marketing", duration: "11 min", type: "video", description: "Design high-converting landing pages with compelling copy, clear CTAs, and optimized forms for leads." },
    { title: "Advanced cPanel Features for Power Users", category: "Advanced", duration: "15 min", type: "article", description: "Master advanced cPanel tools: SSH access, WP-CLI, Git version control, Node.js apps, and Python scripts." },
    { title: "Setting Up Node.js Applications", category: "Advanced", duration: "12 min", type: "video", description: "Deploy Node.js apps on shared hosting using cPanel Node.js selector and application manager." },
    { title: "Python Application Deployment Guide", category: "Advanced", duration: "10 min", type: "article", description: "Install Python applications, manage virtual environments, configure WSGI, and deploy Flask/Django apps." },
    { title: "Git Version Control with cPanel", category: "Advanced", duration: "9 min", type: "video", description: "Clone repositories, manage deployments, pull updates, and use Git for version control in cPanel." },
    { title: "Using SSH and WP-CLI", category: "Advanced", duration: "11 min", type: "article", description: "Access server via SSH, use WP-CLI for WordPress management, run commands, and automate tasks." },
    { title: "Custom PHP.ini Configuration", category: "Advanced", duration: "7 min", type: "video", description: "Customize PHP settings: memory limits, execution time, upload sizes, and PHP extensions via php.ini." },
    { title: "Setting Up Reverse Proxy", category: "Advanced", duration: "8 min", type: "article", description: "Configure reverse proxy for Node.js or custom applications using .htaccess and mod_proxy." },
    { title: "Reseller Hosting Management Guide", category: "Reseller", duration: "15 min", type: "video", description: "Manage reseller hosting: create cPanel accounts, set resource limits, configure packages, and manage clients." },
    { title: "WHM Basics for Resellers", category: "Reseller", duration: "12 min", type: "article", description: "Navigate WHM interface, create hosting packages, manage DNS zones, and configure server settings." },
    { title: "Branding Your Reseller Hosting", category: "Reseller", duration: "8 min", type: "video", description: "White-label your hosting service with custom nameservers, branded cPanel, and custom emails." },
    { title: "Client Account Management in WHM", category: "Reseller", duration: "10 min", type: "article", description: "Create, suspend, terminate accounts, manage resource allocation, and monitor client usage in WHM." },
    { title: "Automating Billing with WHMCS", category: "Reseller", duration: "14 min", type: "video", description: "Set up WHMCS for automated billing, invoicing, payment collection, and client management for reseller business." },
  ];

  const filteredTutorials = allTutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const tutorialCategories = ["All", "Getting Started", "Email Setup", "Security", "Performance", "Maintenance", "cPanel", "WordPress", "Domain", "Troubleshooting", "E-commerce", "SSL & HTTPS", "Marketing", "Advanced", "Reseller"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-10 bg-gradient-to-br from-[#673DE6]/10 via-white to-[#00D4AA]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900">
              Learn & Grow with
              <span className="bg-gradient-to-r from-[#673DE6] to-[#00D4AA] bg-clip-text text-transparent"> Our Tutorials</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Master web hosting with our comprehensive video tutorials, guides, and documentation.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 focus:border-[#673DE6] focus:ring-2 focus:ring-[#673DE6]/20 outline-none transition-all"
              />
            </div>
            {searchQuery && (
              <p className="text-center mt-4 text-slate-600">
                Found {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? 's' : ''} matching "{searchQuery}"
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-[#673DE6] transition-colors group hover:shadow-lg cursor-pointer"
              >
                <div className="text-[#673DE6] mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{category.title}</h3>
                <p className="text-[#673DE6] font-semibold mb-2">{category.count}</p>
                <p className="text-slate-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-900">
            {selectedCategory === "All" ? "All Tutorials" : `${selectedCategory} Tutorials`}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tutorialCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[#673DE6] text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.slice(0, 90).map((tutorial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 9) * 0.05 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#673DE6] transition-all group cursor-pointer hover:shadow-lg flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#673DE6] bg-[#673DE6]/10 px-3 py-1 rounded-full">
                    {tutorial.category}
                  </span>
                  {tutorial.type === "video" && (
                    <Video className="w-4 h-4 text-slate-400" />
                  )}
                  {tutorial.type === "article" && (
                    <FileText className="w-4 h-4 text-slate-400" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-[#673DE6] transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 flex-grow line-clamp-2">
                  {tutorial.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-auto">
                  <Clock className="w-4 h-4" />
                  <span>{tutorial.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {filteredTutorials.length > 90 && (
            <div className="text-center mt-12">
              <p className="text-slate-600 mb-4">
                Showing 90 of {filteredTutorials.length} tutorials
              </p>
              <Button variant="outline" className="border-slate-300 text-slate-700">
                Load More Tutorials <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
          {filteredTutorials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No tutorials found matching your search.</p>
              <Button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4"
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Tutorial Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-[#673DE6]/10 to-[#00D4AA]/10 rounded-xl p-8 border border-slate-200">
                <Video className="w-12 h-12 text-[#673DE6] mb-4 mx-auto" />
                <h3 className="text-4xl font-bold text-slate-900 mb-2">
                  {allTutorials.filter(t => t.type === "video").length}+
                </h3>
                <p className="text-lg text-slate-600">Video Tutorials</p>
                <p className="text-sm text-slate-500 mt-2">Step-by-step visual guides</p>
              </div>
              <div className="bg-gradient-to-br from-[#EC1C65]/10 to-[#673DE6]/10 rounded-xl p-8 border border-slate-200">
                <FileText className="w-12 h-12 text-[#EC1C65] mb-4 mx-auto" />
                <h3 className="text-4xl font-bold text-slate-900 mb-2">
                  {allTutorials.filter(t => t.type === "article").length}+
                </h3>
                <p className="text-lg text-slate-600">Written Articles</p>
                <p className="text-sm text-slate-500 mt-2">Detailed guides with screenshots</p>
              </div>
              <div className="bg-gradient-to-br from-[#00D4AA]/10 to-[#673DE6]/10 rounded-xl p-8 border border-slate-200">
                <BookOpen className="w-12 h-12 text-[#00D4AA] mb-4 mx-auto" />
                <h3 className="text-4xl font-bold text-slate-900 mb-2">
                  {tutorialCategories.length - 1}
                </h3>
                <p className="text-lg text-slate-600">Categories</p>
                <p className="text-sm text-slate-500 mt-2">Organized by topic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-[#673DE6] to-[#5B21B6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our support team is here to help 24/7
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#673DE6] hover:bg-slate-100"
              onClick={() => setLocation("/contact")}
            >
              Contact Support <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
