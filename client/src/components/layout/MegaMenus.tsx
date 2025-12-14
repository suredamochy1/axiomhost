import { motion } from "framer-motion";
import { ChevronRight, Globe, Code, Mail, Server, Zap, Lock, Settings, Cloud, DollarSign } from "lucide-react";

interface MenuLink {
  label: string;
  description?: string;
  href: string;
  icon?: any;
  badge?: string;
}

interface MegaMenuSection {
  title: string;
  links: MenuLink[];
}

interface MegaMenuProps {
  isOpen: boolean;
  sections: MegaMenuSection[];
}

export function MegaMenu({ isOpen, sections }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={`absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl ${isOpen ? "block" : "hidden pointer-events-none"}`}
    >
      <div className="max-w-7xl mx-auto px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-sm font-bold uppercase text-slate-900 tracking-widest text-[#673DE6] pb-2">
                {section.title}
              </h3>
              <ul className="space-y-5">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="group flex items-start gap-3 hover:opacity-100 transition-all"
                    >
                      {link.icon && (
                        <div className="flex-shrink-0 mt-1 text-[#673DE6] group-hover:scale-110 transition-transform">
                          {link.icon}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-[#673DE6] transition-colors">
                            {link.label}
                          </span>
                          {link.badge && (
                            <span className="text-xs bg-[#673DE6]/10 text-[#673DE6] px-2 py-0.5 rounded uppercase font-bold whitespace-nowrap">
                              {link.badge}
                            </span>
                          )}
                        </div>
                        {link.description && (
                          <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors line-clamp-2">
                            {link.description}
                          </p>
                        )}
                      </div>
                      <ChevronRight size={14} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#673DE6]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const pricingSections: MegaMenuSection[] = [
  {
    title: "Hosting",
    links: [
      { label: "Managed hosting for WordPress", description: "Optimized for the world's most popular CMS", href: "/wordpress-hosting", icon: <Globe size={18} /> },
      { label: "WooCommerce Hosting", description: "Build and grow an ecommerce website", href: "/woocommerce-hosting", icon: <Zap size={18} /> },
      { label: "Web hosting", description: "Secure, speedy, reliable services", href: "/pricing", icon: <Server size={18} /> },
      { label: "Cloud hosting", description: "The tools to level-up your business", href: "/cloud-hosting", icon: <Cloud size={18} /> },
      { label: "cPanel Hosting", description: "Industry-leading control panel", href: "/cpanel-hosting", icon: <Settings size={18} /> },
      { label: "Plesk Hosting", description: "Modern control panel", href: "/plesk-hosting", icon: <Settings size={18} /> },
      { label: "VPS hosting", description: "Get a powerful AI-managed VPS", href: "/vps-hosting", icon: <Server size={18} /> },
      { label: "Windows Hosting", description: "ASP.NET & MSSQL support", href: "/windows-hosting", icon: <Server size={18} /> },
    ]
  },
  {
    title: "Websites",
    links: [
      { label: "Website Builder", description: "Create a website in 3 easy steps", href: "/website-builder", icon: <Code size={18} />, badge: "AI" },
      { label: "Ecommerce Website Builder", description: "Get straight to business with an online store", href: "/woocommerce-hosting", icon: <Zap size={18} /> },
      { label: "Website Migration", description: "Free migration with zero downtime", href: "/website-migration", icon: <Zap size={18} />, badge: "FREE" },
    ]
  },
  {
    title: "Domains",
    links: [
      { label: "Domain name search", description: "Find and register your website address", href: "/domain-search", icon: <Globe size={18} /> },
      { label: "Domain transfer", description: "Transfer a domain to Axiomhost, fast", href: "/domain-transfer", icon: <Globe size={18} /> },
      { label: "Domain Reseller", description: "Start your domain business", href: "/domain-reseller", icon: <Globe size={18} /> },
      { label: "WHOIS Lookup", description: "Check domain ownership info", href: "/whois", icon: <Globe size={18} /> },
    ]
  },
  {
    title: "Email & Security",
    links: [
      { label: "Email Marketing", description: "Create and send emails with AI", href: "/email-marketing", icon: <Mail size={18} />, badge: "AI" },
      { label: "Business email", description: "Professional addresses to build your brand", href: "/business-email", icon: <Mail size={18} /> },
      { label: "Google Workspace", description: "Transform teamwork and boost productivity", href: "/google-workspace", icon: <Mail size={18} /> },
      { label: "SSL Certificates", description: "Secure your website with HTTPS", href: "/ssl-certificates", icon: <Lock size={18} /> },
    ]
  }
];

const servicesSections: MegaMenuSection[] = [
  {
    title: "Hosting & Compute",
    links: [
      { label: "Shared Web Hosting", description: "Perfect for starting your online presence", href: "/pricing", icon: <Server size={18} /> },
      { label: "Managed WordPress Hosting", description: "WordPress optimized infrastructure", href: "/wordpress-hosting", icon: <Globe size={18} /> },
      { label: "WooCommerce Hosting", description: "Ecommerce-optimized hosting", href: "/woocommerce-hosting", icon: <Zap size={18} /> },
      { label: "Cloud Hosting", description: "Scalable resources for growing sites", href: "/cloud-hosting", icon: <Cloud size={18} /> },
      { label: "VPS Hosting", description: "Dedicated resources for more power", href: "/vps-hosting", icon: <Server size={18} /> },
      { label: "Reseller Hosting", description: "Start your hosting business", href: "/reseller-hosting", icon: <Server size={18} /> },
      { label: "Offshore Hosting", description: "Privacy-first DMCA-ignored hosting", href: "/offshore-hosting", icon: <Lock size={18} /> },
      { label: "Enhance Hosting", description: "Next-gen hosting platform", href: "/enhance-hosting", icon: <Zap size={18} /> },
      { label: "Windows Hosting", description: "ASP.NET & MSSQL hosting", href: "/windows-hosting", icon: <Server size={18} /> },
      { label: "AWS Hosting", description: "Powered by Amazon Web Services", href: "/aws-hosting", icon: <Cloud size={18} /> },
      { label: "Google Cloud Hosting", description: "Powered by Google Cloud Platform", href: "/google-cloud-hosting", icon: <Cloud size={18} /> },
    ]
  },
  {
    title: "Site & Store Building",
    links: [
      { label: "Website Builder", description: "AI-powered site creation in 3 steps", href: "/website-builder", icon: <Code size={18} />, badge: "AI" },
      { label: "WooCommerce Store", description: "Build your online store", href: "/woocommerce-hosting", icon: <Zap size={18} /> },
      { label: "Web Development", description: "Custom website development", href: "/web-development", icon: <Code size={18} /> },
    ]
  },
  {
    title: "Email & Business Tools",
    links: [
      { label: "Business Email", description: "Professional email solutions", href: "/business-email", icon: <Mail size={18} /> },
      { label: "Email Marketing", description: "AI-powered email campaigns", href: "/email-marketing", icon: <Mail size={18} />, badge: "AI" },
      { label: "Google Workspace", description: "Collaboration and productivity tools", href: "/google-workspace", icon: <Mail size={18} /> },
    ]
  },
  {
    title: "Services & Add-ons",
    links: [
      { label: "Free Website Migration", description: "Move your site with zero downtime", href: "/website-migration", icon: <Zap size={18} />, badge: "FREE" },
      { label: "Domain Transfer", description: "Switch your domain easily", href: "/domain-transfer", icon: <Globe size={18} /> },
      { label: "Domain Reseller", description: "Start a domain business", href: "/domain-reseller", icon: <Globe size={18} /> },
      { label: "SSL Certificates", description: "Secure your website", href: "/ssl-certificates", icon: <Lock size={18} /> },
      { label: "Software Licenses", description: "cPanel, Plesk & more", href: "/software-licenses", icon: <Settings size={18} /> },
    ]
  }
];

const exploreSections: MegaMenuSection[] = [
  {
    title: "Learn & Grow",
    links: [
      { label: "Blog", description: "Our latest news and updates", href: "/blog", icon: <Globe size={18} /> },
      { label: "Features & Roadmap", description: "Latest product releases and what's coming", href: "/features", icon: <Settings size={18} /> },
      { label: "Tutorials", description: "Step-by-step guides and videos", href: "/tutorials", icon: <Code size={18} /> },
      { label: "Our story", description: "How we got here and where we're going", href: "/about", icon: <Globe size={18} /> },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About AxiomHost", description: "Our mission and team", href: "/about", icon: <Globe size={18} /> },
      { label: "Careers", description: "Join our growing team", href: "/careers", icon: <Settings size={18} />, badge: "HIRING" },
      { label: "Contact Us", description: "Get in touch with our team", href: "/contact", icon: <Mail size={18} /> },
    ]
  },
  {
    title: "Social Proof",
    links: [
      { label: "Client Stories", description: "Our clients' successes are our favorite stories", href: "/client-stories", icon: <Globe size={18} /> },
      { label: "Testimonials", description: "See what customers say", href: "/client-stories", icon: <Globe size={18} /> },
      { label: "Case Studies", description: "Deep dives into success stories", href: "/client-stories", icon: <Globe size={18} /> },
    ]
  },
  {
    title: "More",
    links: [
      { label: "Deals & Discounts", description: "Save on hosting plans", href: "/pricing", icon: <Zap size={18} /> },
      { label: "Affiliate Program", description: "Earn 30% recurring commissions", href: "/affiliate", icon: <DollarSign size={18} /> },
      { label: "System Status", description: "Check our platform health", href: "https://my.axiomhost.cloud", icon: <Settings size={18} /> },
    ]
  }
];

const supportSections: MegaMenuSection[] = [
  {
    title: "Help Center",
    links: [
      { label: "Knowledge Base", description: "Find answers instantly", href: "/help", icon: <Globe size={18} /> },
      { label: "Tutorials", description: "Learn with step-by-step guides & videos", href: "/tutorials", icon: <Code size={18} /> },
      { label: "WHOIS Lookup", description: "Check domain information", href: "/whois", icon: <Globe size={18} /> },
      { label: "FAQ", description: "Frequently asked questions", href: "/faq", icon: <Globe size={18} /> },
    ]
  },
  {
    title: "Get Help",
    links: [
      { label: "Contact Support", description: "Reach our support team", href: "/contact", icon: <Mail size={18} /> },
      { label: "Live Chat", description: "Chat with us now", href: "https://my.axiomhost.cloud", icon: <Zap size={18} /> },
      { label: "Submit a Ticket", description: "Track your support request", href: "https://my.axiomhost.cloud", icon: <Mail size={18} /> },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "System Status Page", description: "Check our uptime", href: "https://my.axiomhost.cloud", icon: <Server size={18} /> },
      { label: "Community Forum", description: "Connect with other users", href: "/blog", icon: <Globe size={18} /> },
      { label: "Sales Enquiries", description: "Talk to our sales team", href: "/contact", icon: <Mail size={18} /> },
    ]
  }
];

export { pricingSections, servicesSections, exploreSections, supportSections };