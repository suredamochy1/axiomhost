import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Frequently Asked Questions - AxiomHost | Web Hosting FAQ Nigeria";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Find answers to common questions about AxiomHost web hosting services in Nigeria. Learn about our hosting plans, features, pricing, WordPress hosting, domain registration, SSL certificates, migrations, and 24/7 support.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Find answers to common questions about AxiomHost web hosting services in Nigeria. Learn about our hosting plans, features, pricing, WordPress hosting, domain registration, SSL certificates, migrations, and 24/7 support.";
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "AxiomHost FAQ, web hosting FAQ, hosting questions Nigeria, WordPress hosting FAQ, cPanel hosting questions, domain registration FAQ, SSL certificate FAQ, hosting support Nigeria, VPS hosting FAQ, cloud hosting questions");
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = "AxiomHost FAQ, web hosting FAQ, hosting questions Nigeria, WordPress hosting FAQ, cPanel hosting questions, domain registration FAQ, SSL certificate FAQ, hosting support Nigeria, VPS hosting FAQ, cloud hosting questions";
      document.head.appendChild(meta);
    }
    
    window.scrollTo(0, 0);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
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
          "name": "FAQ",
          "item": "https://axiomhost.cloud/faq"
        }
      ]
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AxiomHost",
      "url": "https://axiomhost.cloud",
      "logo": "https://axiomhost.cloud/logo.svg",
      "description": "Leading web hosting provider in Nigeria offering affordable, reliable, and high-performance hosting solutions",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-701-934-3754",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    };

    [faqSchema, breadcrumbSchema, organizationSchema].forEach((schema) => {
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

  const faqs = [
    {
      category: "General",
      question: "What is AxiomHost?",
      answer: "AxiomHost is a leading web hosting provider in Nigeria, offering affordable, reliable, and high-performance hosting solutions. We provide shared hosting, VPS hosting, cloud hosting, WordPress hosting, and domain registration services to businesses and individuals across Nigeria and West Africa."
    },
    {
      category: "General",
      question: "Where is AxiomHost located?",
      answer: "AxiomHost is based in Nigeria and serves customers across Nigeria and West Africa. We're powered by Nairahost infrastructure, ensuring reliable and fast hosting services for our customers."
    },
    {
      category: "General",
      question: "Is AxiomHost legit and reliable?",
      answer: "Yes, AxiomHost is a legitimate and reliable web hosting provider. We have thousands of satisfied customers, maintain a 99.99% uptime guarantee, and offer 24/7 customer support. We're partnered with Nairahost, one of Nigeria's trusted hosting infrastructure providers."
    },
    {
      category: "General",
      question: "What makes AxiomHost different from other hosting providers?",
      answer: "AxiomHost combines enterprise-grade performance with affordable pricing. We offer 100% SSD storage, free SSL certificates, free website migration, no price hikes on renewal, 24/7 Nigerian-based support, and we're powered by 100% renewable energy. Our platform is built with auto-scaling cloud technology for maximum performance."
    },
    {
      category: "Hosting",
      question: "What types of hosting do you offer?",
      answer: "We offer multiple hosting solutions including cPanel Hosting, DirectAdmin Hosting, WordPress Hosting, Cloud Hosting, Plesk Hosting, Windows Hosting, Enhance Hosting, VPS Hosting, Reseller Hosting, Email Hosting, AWS Hosting, Google Cloud Hosting, and Managed Hosting. Each service is tailored to different needs and budgets."
    },
    {
      category: "Hosting",
      question: "Can I upgrade or downgrade my hosting plan?",
      answer: "Yes, you can change your hosting plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle. We'll prorate your billing accordingly, so you only pay for what you use."
    },
    {
      category: "Hosting",
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied with our service within the first 30 days, we'll refund your payment with no questions asked. This gives you risk-free opportunity to try our services."
    },
    {
      category: "Hosting",
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.99% uptime for all our hosting services. Our infrastructure is monitored 24/7 with redundant power supplies, UPS, generators, and multiple internet connections. We have load-balanced and redundant systems to ensure maximum availability."
    },
    {
      category: "Hosting",
      question: "Do you provide free SSL certificates?",
      answer: "Yes, all our hosting plans include unlimited free SSL certificates provided by LetsEncrypt. SSL certificates encrypt the connection between your website and visitors, ensuring secure data transmission. They're automatically installed and renewed, so you never have to worry about expiration."
    },
    {
      category: "Hosting",
      question: "Do you offer website migration services?",
      answer: "Yes, we offer free website migration services for all new customers. Our technical team will seamlessly migrate your website from your current host to AxiomHost with zero downtime. We handle migrations from cPanel, Plesk, DirectAdmin, and other popular platforms, including WordPress sites."
    },
    {
      category: "Hosting",
      question: "What control panel do you use?",
      answer: "We offer multiple control panel options including cPanel, DirectAdmin, Plesk, Enhance, and our custom AxiomHost Control Panel. The control panel depends on your hosting plan. All control panels are user-friendly and provide full management capabilities for files, databases, email, and security."
    },
    {
      category: "Hosting",
      question: "Is cPanel hosting included in your plans?",
      answer: "Yes, we offer cPanel hosting on select plans. cPanel is an industry-leading control panel that makes it easy to manage your website, email accounts, and domain names with an intuitive interface. Our support team consists of cPanel-certified engineers."
    },
    {
      category: "Hosting",
      question: "Do you provide weekly or daily backups?",
      answer: "We provide automatic weekly backups using JetBackup on shared hosting plans and daily backups on premium plans. All backups are stored securely and can be restored with one-click. This ensures your data is always safe and recoverable."
    },
    {
      category: "Hosting",
      question: "Is there a minimum contract period?",
      answer: "No, we don't require minimum contracts or lock you into multi-year agreements. Unlike other hosts that require 12 months upfront payment, we believe in flexibility. You can cancel anytime, and we offer a 30-day money-back guarantee."
    },
    {
      category: "Hosting",
      question: "Will my renewal price increase?",
      answer: "No! We guarantee that the price you pay at signup is the price you'll pay at renewal — now and always. Unlike other hosts who increase renewal prices, we believe in transparent, fair pricing with no shock price hikes."
    },
    {
      category: "WordPress",
      question: "Do you offer WordPress hosting?",
      answer: "Yes, we offer optimized WordPress hosting built for maximum performance. Our WordPress hosting includes free staging environments, WordPress cloning, StackCache optimization, auto core updates, free SSL, unlimited CDN, malware scanning, and one-click installations."
    },
    {
      category: "WordPress",
      question: "What is WordPress staging and cloning?",
      answer: "WordPress staging lets you create a replica of your site with one click to test changes before going live. WordPress cloning allows you to duplicate your entire website. Both features are included free with our WordPress hosting plans, making development and testing safe and easy."
    },
    {
      category: "WordPress",
      question: "Is WooCommerce supported?",
      answer: "Yes, our WordPress hosting is WooCommerce optimized. You can build an online shop with our platform that's PCI compliant and provides lightning-fast load times for better conversions, SEO, and user experience. We offer one-click WooCommerce installation."
    },
    {
      category: "WordPress",
      question: "What is StackCache optimization?",
      answer: "StackCache is our proprietary caching technology that automatically speeds up WordPress page loading significantly. It works straight out of the box or you can manage settings from the StackCache plugin. This delivers faster websites for all your users."
    },
    {
      category: "Domain",
      question: "Do you offer domain registration?",
      answer: "Yes, we offer domain registration services for all popular domain extensions including .com, .net, .org, .ng, .com.ng, and 100+ other extensions. We provide competitive pricing and free domain privacy protection with select plans."
    },
    {
      category: "Domain",
      question: "Can I transfer my existing domain to AxiomHost?",
      answer: "Yes, you can transfer your domain to AxiomHost. Domain transfers are free, and we'll extend your domain registration by one year. The transfer process typically takes 5-7 days to complete. Our team will guide you through the entire process."
    },
    {
      category: "Domain",
      question: "Do you offer free domains?",
      answer: "Yes, we offer a free domain for the first year with select Business and Turbo hosting plans. After the first year, standard domain renewal rates apply. This offer is available for .com, .net, .org, and .com.ng domains."
    },
    {
      category: "Domain",
      question: "Can I use my own domain with AxiomHost hosting?",
      answer: "Absolutely! You can use any domain you own with AxiomHost hosting. Simply update your domain's nameservers to point to our servers, and we'll help you configure everything. You don't need to transfer your domain to use our hosting."
    },
    {
      category: "Domain",
      question: "Do you offer WHOIS privacy protection?",
      answer: "Yes, we offer free domain privacy protection (WHOIS privacy) on eligible domain extensions. This protects your personal information from being publicly visible in WHOIS databases, reducing spam and protecting your identity."
    },
    {
      category: "Technical",
      question: "What programming languages and databases do you support?",
      answer: "We support all popular programming languages including PHP (5.3 to latest 8.x), Python, Perl, Node.js, Ruby on Rails, and more. We support MySQL, PostgreSQL, and MongoDB databases with phpMyAdmin access. Our servers include popular modules like PDO, SOAP, MBString, GD, ImageMagick, and ionCube Loader."
    },
    {
      category: "Technical",
      question: "Do you offer SSH and FTP access?",
      answer: "Yes, we provide SSH, SFTP, and FTP access on most plans. You can create additional FTP/SFTP accounts, use FTP lockdown for security, and access our online file manager. SSH access with WP-CLI is available on VPS and select premium hosting plans."
    },
    {
      category: "Technical",
      question: "What is your server infrastructure?",
      answer: "We use enterprise-grade servers with 100% SSD storage (Samsung enterprise SSDs), latest generation processors, and redundant 10Gbps+ network connections. Our infrastructure features load balancing, auto-scaling cloud platform, no LVE limits on cloud plans, and over 60 global data center locations."
    },
    {
      category: "Technical",
      question: "Do you offer email hosting?",
      answer: "Yes, all our hosting plans include professional email hosting. You can create multiple email accounts with your domain name (e.g., info@yourdomain.com) with POP3, IMAP, webmail access, autoresponders, email forwarders, anti-spam protection, anti-virus protection, DKIM, SPF, and DMARC support."
    },
    {
      category: "Technical",
      question: "Do you provide CDN services?",
      answer: "Yes, we provide free unlimited CDN (Content Delivery Network) with all our plans. This isn't a limited version — it's fully-featured global CDN to deliver faster-loading websites wherever your users are. We also offer edge caching for static content delivery."
    },
    {
      category: "Technical",
      question: "What security features do you provide?",
      answer: "We provide comprehensive security including free SSL certificates, 1 Tbps+ DDoS protection, Web Application Firewall (WAF), automatic malware scanning, two-factor authentication, brute force login protection, IP address blocking, PCI-DSS compliance, hotlink protection, and 24/7 security monitoring with CCTV and biometric security at data centers."
    },
    {
      category: "Technical",
      question: "Do you offer one-click app installers?",
      answer: "Yes, we provide Softaculous one-click app installer with 200+ applications including WordPress, Joomla, Magento, Drupal, PrestaShop, and more. You can install popular apps without technical knowledge, and they're always updated to the latest versions."
    },
    {
      category: "Billing",
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including credit cards (Visa, Mastercard), debit cards, bank transfers, and mobile money. We also accept payments through PayPal, Paystack, Flutterwave, and other online payment gateways for your convenience."
    },
    {
      category: "Billing",
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all hosting plans. Domain registrations are non-refundable as per ICANN policy, but hosting services are fully refundable within the first 30 days if you're not satisfied — no questions asked."
    },
    {
      category: "Billing",
      question: "Can I pay monthly or do I need to pay annually?",
      answer: "We offer flexible billing with monthly, quarterly, semi-annual, and annual payment options. Annual plans come with significant discounts (typically 10% or more). You can choose the billing cycle that works best for your budget during checkout."
    },
    {
      category: "Billing",
      question: "Are there any hidden fees or setup charges?",
      answer: "No, we have transparent pricing with no hidden fees. There are no setup fees, no cancellation fees, and no surprise charges. The price you see is the price you pay. We also guarantee no price hikes on renewal."
    },
    {
      category: "Support",
      question: "What support channels do you offer?",
      answer: "We offer 24/7 customer support through multiple channels including live chat, email, phone support, WhatsApp, and our ticket system. Our Nigerian-based support team is available around the clock to help you with any issues or questions."
    },
    {
      category: "Support",
      question: "How quickly do you respond to support requests?",
      answer: "Our average response time is under 20 minutes for support tickets and faster for live chat. Our Nigerian-based support team provides personal, expert assistance. We're real people, not robots, and we're committed to resolving your issues quickly."
    },
    {
      category: "Support",
      question: "Do you offer phone support?",
      answer: "Yes, we offer phone support for all customers at +234.701 934 3754. Our phone support is available 24/7. You can also reach us via WhatsApp for quick assistance. We believe in providing multiple ways to get help when you need it."
    },
    {
      category: "Support",
      question: "Do you have a knowledge base or tutorials?",
      answer: "Yes, we have an extensive knowledge base with articles, video tutorials, and guides covering all aspects of web hosting. Our tutorials help you achieve online success whether you're a beginner or advanced user. We regularly update our documentation."
    },
    {
      category: "Features",
      question: "What is included in your hosting plans?",
      answer: "Our plans include unlimited bandwidth, free SSL certificates, free website migration, 100% SSD storage, cPanel/DirectAdmin control panel, one-click app installers, email accounts, databases, FTP access, weekly/daily backups, free CDN, malware protection, spam filtering, and 24/7 support."
    },
    {
      category: "Features",
      question: "Do you offer a free website builder?",
      answer: "Yes, all our hosting plans include a free drag-and-drop website builder with 200+ ready-made templates suitable for different sectors. You can get online in minutes without coding knowledge. The builder is mobile-responsive and SEO-friendly."
    },
    {
      category: "Features",
      question: "Is your hosting environmentally friendly?",
      answer: "Yes, we're a 100% green hosting provider! All our hosting is powered by 100% renewable energy, meaning your sites and apps are too. Our data centers have excellent PuE (Power usage Effectiveness) of 1.12. We're committed to battling climate change while providing excellent hosting."
    },
    {
      category: "Performance",
      question: "What is your average page load speed?",
      answer: "Our hosting delivers lightning-fast page loads thanks to 100% SSD storage, LiteSpeed/Nginx web servers, PHP OPcache, global CDN, edge caching, and optimized server configurations. Most sites load in under 2 seconds, significantly faster than industry average."
    },
    {
      category: "Performance",
      question: "Do you use LiteSpeed or traditional Apache servers?",
      answer: "We use optimized web server technology including LiteSpeed on select plans, which is significantly faster than traditional Apache. We also offer HTTP/2, HTTP/3 (QUIC), PHP-FPM, OPcache, and other performance optimizations for maximum speed."
    },
    {
      category: "Performance",
      question: "What is auto-scaling and do you offer it?",
      answer: "Auto-scaling automatically adjusts server resources to meet demand, ensuring fast loading speeds even during traffic spikes. Our WordPress and Cloud Hosting plans feature auto-scaling technology with no LVE limits, giving your site access to resources of the entire cloud platform."
    }
  ];

  const categories = ["All", "General", "Hosting", "WordPress", "Domain", "Technical", "Billing", "Support", "Features", "Performance"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D1E2C]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Find answers to common questions about AxiomHost hosting services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[#673DE6] text-white"
                      : "bg-white text-[#545775] hover:bg-slate-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border border-slate-200 rounded-lg overflow-hidden hover:border-[#673DE6] transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
                    >
                      <div className="flex-1">
                        <span className="text-xs font-bold text-[#673DE6] mb-2 block">{faq.category}</span>
                        <span className="font-semibold text-[#1D1E2C]">{faq.question}</span>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-[#673DE6] flex-shrink-0 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                        <p className="text-[#545775] leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-[#545775]">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#673DE6] to-[#EC1C65] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our support team is here to help 24/7
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#673DE6] font-bold rounded-full hover:bg-slate-50 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


